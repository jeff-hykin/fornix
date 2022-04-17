#!/usr/bin/env -S deno run --allow-all

import { Console, blue } from "https://deno.land/x/quickr@0.3.13/main/console.js"
import { FileSystem } from "https://deno.land/x/quickr@0.3.13/main/file_system.js"
import { OperatingSystem } from "https://deno.land/x/quickr@0.3.13/main/operating_system.js"
import { Overwrite, run } from "https://deno.land/x/quickr@0.3.13/main/run.js"
import { findAll } from "https://deno.land/x/good@0.4.1/string.js"
import * as Path from "https://deno.land/std@0.128.0/path/mod.ts"
import { readableStreamFromReader } from "https://deno.land/std@0.135.0/streams/mod.ts";

export const projectRoot = Console.env.FORNIX_FOLDER||FileSystem.pwd
console.debug(`projectRoot is:`,projectRoot)
const projectSettingsPath = `${projectRoot}/settings/project.json`
const tauriSettingsPath = `${projectRoot}/settings/tauri.conf.json`
let maybeProjectSettings, maybeTauriSettings
try { maybeProjectSettings = JSON.parse(await FileSystem.read(projectSettingsPath)) } catch (error) {}
try { maybeTauriSettings   = JSON.parse(await FileSystem.read(tauriSettingsPath  )) } catch (error) {}

if (!(maybeProjectSettings instanceof Object)) {
    console.error(`
        
        When loading part of the project (this is the '${FileSystem.thisFile}' speaking)
            
            I was looking for: ${blue`${projectSettings}`}
            But I either I couldn't find it, or it wasnt a valid JSON file
        
        Please create it, and make it similar to this:
            {
                "workspaceFolder": "./workspace.ignore",
                "transpileOptions": {
                    "esVersion": "es2015",
                    "minified": true,
                    "presets": [],
                    "plugins": []
                }
            }
    `)
}
if (!(maybeTauriSettings instanceof Object)) {
    console.error(`
        
        When loading part of the project (this is the '${FileSystem.thisFile}' speaking)
            
            I was looking for: ${blue`${tauriSettingsPath}`}
            But I either I couldn't find it, or it wasnt a valid JSON file
        
        Please create it, and check the tauri github for how it should be formatted
        (The available options are way more than I can cover here)
    `)
}
export const projectSettings = maybeProjectSettings
export const tauriSettings = maybeTauriSettings
export const tauriSrc = `${projectRoot}/${projectSettings.workspaceFolder}/src-tauri`
export const frontendFolder = `${projectRoot}/${projectSettings.frontendFolder}`
export const compiledFrontendFolder = `${tauriSrc}/frontend`

const babelRuntimePath = `${projectRoot}/scripting_helpers/dependencies/babel_runtime@v0.13.9.js`
const babelCompileTimePath = `${projectRoot}/scripting_helpers/dependencies/babel@v7.13.8.js`
const packupInstallerSource = "https://deno.land/x/packup@v0.1.12/install.ts"
const transpileOptions = projectSettings.transpileOptions

export async function relativeLink({existingItem, newItem, force=true}) {
    existingItem = existingItem.path || existingItem
    newItem = newItem.path || newItem // if given ItemInfo object
    
    const existingItemDoesntExist = (await Deno.lstat(existingItem).catch(()=>({doesntExist: true}))).doesntExist
    // if the item doesnt exists
    if (existingItemDoesntExist) {
        throw Error(`\nTried to create a relativeLink between existingItem:${existingItem}, newItem:${newItem}\nbut existingItem didn't actually exist`)
    } else {
        if (force) {
            await FileSystem.remove(newItem)
            await FileSystem.ensureIsFolder(FileSystem.dirname(newItem))
        }
        const pathFromNewToExisting = Path.relative(newItem, existingItem).replace(/^\.\.\//,"")
        return Deno.symlink(pathFromNewToExisting, newItem)
    }
}

export async function createWorkspace() {
    // frontend is special
    const [ frontendExisting, frontendTarget ] = [ frontendFolder, `${tauriSrc}/frontend` ]
    // others are not
    const pathsToLink = [
        [`${projectRoot}/.gitignore`,                       `${tauriSrc}/.gitignore`      ],
        [`${projectRoot}/settings/requirements/Cargo.toml`, `${tauriSrc}/Cargo.toml`      ],
        [`${projectRoot}/settings/requirements/Cargo.lock`, `${tauriSrc}/Cargo.lock`      ],
        [`${projectRoot}/rustfmt.toml`,                     `${tauriSrc}/rustfmt.toml`    ],
        [ tauriSettingsPath,                                `${tauriSrc}/tauri.conf.json` ],
        [`${projectRoot}/main/icons`,                       `${tauriSrc}/icons`           ],
        [`${projectRoot}/main/backend`,                     `${tauriSrc}/src`             ],
    ]
    // start all the links
    const promises = pathsToLink.map(async ([eachExistingPath, eachTargetPath])=>{
        const itemInfo = await FileSystem.info(eachExistingPath)
        if (itemInfo.doesntExist) {
            throw Error(`\n\nWhen trying to generate the Tauri workspace, I was looking for ${itemInfo.relativePathFrom(projectRoot)}\nHowever, I couldn't find it and it is necessary for building tauri`)
        } else {
            await relativeLink({
                existingItem: eachExistingPath,
                newItem: eachTargetPath,
            })
        }
    })
    // wait for all
    await Promise.all(promises)
    // 
    // handle frontend
    // 
    await compileFrontend({ frontendExisting: frontendFolder, frontendTarget: compiledFrontendFolder })

    return tauriSrc
}

export async function compileFrontend({ frontendExisting, frontendTarget }) {
    await FileSystem.remove(frontendTarget) // packup doesnt cleanup old files for some reason
    // 
    // link babel runtime
    // 
    const babelRuntimeName = `babel_runtime.js`
    const babelRuntimeHtmlPath = `/${babelRuntimeName}`
    const babelRuntimeTarget = `${frontendTarget}/${babelRuntimeName}`
    const babelRuntimeScript = `<script src="${babelRuntimeHtmlPath}"></script>` // TODO: technically some escaping should be done here

    //
    // bundle all the html files
    //
    for (const eachItem of await FileSystem.recursivelyListItemsIn(frontendExisting)) {
        if (eachItem.isFile && eachItem.extension == ".html") {
            const targetPath = `${frontendTarget}/${eachItem.relativePathFrom(frontendExisting)}`
            await FileSystem.ensureIsFolder(FileSystem.dirname(targetPath))
            await packup({
                inputPath: eachItem.path,
                outputPath: targetPath,
            })
            // inject the babel runtime into the <head> of each html file
            await injectBabelRuntimeInto({
                htmlPath: targetPath,
                babelScriptTag: babelRuntimeScript,
            })
        }
    }
    // 
    // transpile all the js files
    // 
    for (const eachItem of await FileSystem.recursivelyListItemsIn(frontendTarget)) {
        if (eachItem.isFile && eachItem.extension === '.js') {
            await transpile({
                inputPath: eachItem.path,
                outputPath: eachItem.path, // overwrite in place
                ...transpileOptions,
            })
        }
    }
    
    // connect after transpiling
    await relativeLink({
        existingItem: babelRuntimePath,
        newItem: babelRuntimeTarget,
    })
}

export async function injectBabelRuntimeInto({htmlPath, babelScriptTag}) {
    let htmlCode = await FileSystem.read(htmlPath)
    const htmlCodeNoScripts = htmlCode.replace(/<script[\w\W]+<\/script>/,"").replace(/<style[\w\W]+<\/style>/,"") // TODO: this might be imperfect escaping
    if (!htmlCodeNoScripts.match(/<head>/i)) {
        
        // situation1:
        //     <body>
        //     </body>
        if (!htmlCodeNoScripts.match(/<html/i)) {
            // add a head with the babelScriptTag
            htmlCode = `
                <head>
                    ${babelScriptTag}
                </head>
                \n${htmlCode}
            `
        // situation2:
        //     <html>
        //         <body>
        //         </body>
        //     </html>
        } else {
            htmlCode = htmlCode.replace(/(<html.*?>)/i,`$1\n    <head>${babelScriptTag}</head>\n`)
        }
    } else {
        // situation3:
        //     *something*
        //          <head>
        //          </head>
        //     *something*
        htmlCode = htmlCode.replace(/(<head.*?>)/i,`$1\n    ${babelScriptTag}\n`)
    }
    
    // 
    // move all the body tag scripts out of the body (otherwise document.body in the script wont work)
    // 
    const bodyTagMatch = htmlCode.match(/<body[\w\W]+<\/body>/)
    if (bodyTagMatch) {
        const bodyTag = bodyTagMatch[0]
        const scriptTags = []
        const bodyTagNoScriptTags = bodyTag.replace(/<script .*?src=.*?>[\w\W]*?<\/script>/g, (eachString)=>{
            scriptTags.push(eachString)
            return ""
        })
        const newBodyTag = `${bodyTagNoScriptTags}\n${scriptTags.join("\n")}`
        htmlCode = htmlCode.replace(bodyTag, newBodyTag)
    }

    await FileSystem.write({
        data: htmlCode,
        path: htmlPath,
    })
}

let Babel
export async function transpile({ inputPath, outputPath, esVersion, minified, presets, plugins }) {
    // Babel is huge so delay the import
    if (!Babel) {
        Babel = (await import(babelCompileTimePath)).default
    }
    const inputInfo = await FileSystem.info(inputPath)
    if (!inputInfo.isFile) {
        throw Error(`\nIt appears the inputPath in transpile({inputPath}), is not a file:\n    ${inputPath}\n\n`)
    } else {
        let outputParentPromise = FileSystem.ensureIsFolder(FileSystem.dirname(outputPath))
        let code = await FileSystem.read(inputPath)
        try {
            code = Babel.transform(code, {
                presets: [ esVersion, ...presets ].filter(each=>each),
                plugins,
                generatorOpts: {
                    comments: true,
                    minified,
                }
            }).code
        } catch (error) {
            if (error.loc) {
                console.error(`Error while using Babel to parse ${inputPath}:${error.loc.line}:${error.loc.column}\n${error.message}`)
                Deno.exit(1)
            } else {
                throw error
            }
        }
        await outputParentPromise
        await FileSystem.write({
            data: code,
            path: outputPath
        })
    }
}

export async function packup({ inputPath, outputPath }) {
    outputPath = FileSystem.dirname(outputPath)
    // 
    // make sure packup exists
    // 
    const packupCommand = `${OperatingSystem.home}/.deno/bin/packup`
    let packupInfo = await FileSystem.info(packupCommand)
    let hasPackup = true
    // try auto-install packup
    if (packupInfo.doesntExist) {
        hasPackup = false
        const { success, exitCode } = await run(`deno`, "run", "-A", packupInstallerSource).outcome
        if (success) {
            packupInfo = await FileSystem.info(packupCommand)
            hasPackup = packupInfo.exists
        }
    }
    if (!hasPackup) {
        throw Error(`Looks like you don't have packup installed. Please try installing it from here: https://deno.land/x/packup`)
    }
    // 
    // use packup
    // 
    const { success, exitCode } = await run(packupCommand, "build", inputPath, `--dist-dir`, outputPath).outcome
    if (!success) {
        throw Error(`\n\nTried to bundle: ${inputPath}\nThis was done using packup at: ${packupCommand}\nHowever the command failed (error stream should be printed above)`)
    }
    return outputPath
}

export async function server({port, folder}) {
    // Start listening on port 8080 of localhost.
    const server = Deno.listen({ port })
    console.log(`File server running on http://localhost:${port}/`)

    for await (const conn of server) {
        handleHttp(conn)
    }

    async function handleHttp(conn) {
        const httpConn = Deno.serveHttp(conn)
        for await (const requestEvent of httpConn) {
            // Use the request pathname as filepath
            const url = new URL(requestEvent.request.url)
            const path = decodeURIComponent(url.pathname)

            // Try opening the file
            let file
            try {
                file = await Deno.open(`${folder}/${path}`, { read: true })
                const stat = await file.stat()

                // If File instance is a directory, lookup for an index.html
                if (stat.isDirectory) {
                    file.close()
                    file = await Deno.open(`${folder}/${path}/index.html`, { read: true })
                }
            } catch {
                // If the file cannot be opened, return a "404 Not Found" response
                const notFoundResponse = new Response("404 Not Found", { status: 404 })
                await requestEvent.respondWith(notFoundResponse)
                return
            }

            // Build a readable stream so the file doesn't have to be fully loaded into
            // memory while we send it
            const readableStream = readableStreamFromReader(file)

            // Build and send the response
            const response = new Response(readableStream)
            await requestEvent.respondWith(response)
        }
    }
}
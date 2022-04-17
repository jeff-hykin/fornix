#!/usr/bin/env -S deno run --allow-all

import { Console, green, blue } from "https://deno.land/x/quickr@0.3.13/main/console.js"
import { FileSystem } from "https://deno.land/x/quickr@0.3.13/main/file_system.js"
import { Overwrite, run, hasCommand } from "https://deno.land/x/quickr@0.3.13/main/run.js"
import { createWorkspace } from "./generate_workspace.js"

const projectRoot = Console.env.FORNIX_FOLDER||FileSystem.pwd
const projectSettings = JSON.parse(await FileSystem.read(`${projectRoot}/settings/project.json`))

// 
// create a dummy file
// 
const tempDir = await Deno.makeTempDir()
const mainFilePath = `${tempDir}/file.js`
const bundleOutputFilePath = `${tempDir}/dist/file.js`
const dependencyOutputPath = `${projectRoot}/tauri_support/dependencies/tauri_api@latest.js`
await FileSystem.write({
    data: `
        import * as tauriAppsApi from '@tauri-apps/api'

        globalThis.tauriApi = tauriAppsApi
        export const tauriApi = tauriAppsApi
    `,
    path: mainFilePath,
})

FileSystem.pwd = tempDir

if (!await hasCommand("npm")) {
    console.error(`Sorry, for this one command npm is currently required. (and I don't see an npm command). If you can find a better way to bundle tauri please do let me know.`)
    Deno.exit(1)
}

// install dependences
await run('npm', "install", "parcel-bundler@1.12.5", "@tauri-apps/api")

// make the bundled output
await run('npx', "parcel", "build", "--target", "node", "--bundle-node-modules", mainFilePath)

const output = await FileSystem.read(bundleOutputFilePath)
await FileSystem.write({
    data: `
        if (typeof navigator == 'undefined') {
            var navigator = {userAgent:[], appVersion:[]}
        }
        if (!navigator.userAgent) {
            navigator.userAgent = []
        }
        if (!navigator.appVersion) {
            navigator.appVersion = []
        }
        var parcelRequire;
        ${output}
    `,
    path: dependencyOutputPath,
})

await FileSystem.remove(tempDir)
console.log(``)
console.log(green.bold`//`)
console.log(green.bold`// file saved to: ${blue`${dependencyOutputPath}`}`)
console.log(green.bold`// `)
import "./tauri_api.js" // sets globalThis.tauriApi, which is the only global variable in the project
import { toCamelCase } from "https://deno.land/x/good@0.5.4/string.js"

const tauriInvoke = globalThis.tauriApi.invoke
const backendRun = async (code)=> {
    const { v, e } = JSON.parse(await tauriInvoke('run_deno', { code }))
    if (e) {
        throw Error(e)
    } else {
        return v
    }
}

await backendRun(`globalThis.FileSystem = await import("https://deno.land/x/good@0.5.0/quicker.js")`)


export const FileSystem = {
    pwd: ()=>backendRun(`await globalThis.FileSystem.pwd`),
    home: ()=>backendRun(`await globalThis.FileSystem.home`),
    listPathsIn: (path)=>backendRun(`await globalThis.FileSystem.listPathsIn(${JSON.stringify(path)})`),
    write: ({path, data})=>backendRun(`await globalThis.FileSystem.write(${JSON.stringify({path, data})})`),
    read: (path)=>backendRun(`await globalThis.FileSystem.read(${JSON.stringify(path)})`),
}
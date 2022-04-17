import "./tauri_api.js" // sets globalThis.tauriApi, which is the only global variable in the project
import { toCamelCase } from "https://deno.land/x/good@0.5.4/string.js"

for (let each of ["name_one", "Name Two", "Example-Three", "name4"]) {
    document.body.innerHTML += `each is:${toCamelCase(each)}<br>`
}

document.body.innerHTML += `<br>${Object.keys(globalThis.tauriApi)}`

console.log("Howdy!")
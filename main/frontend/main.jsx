import "./tauri_api.js" // sets globalThis.tauriApi, which is the only global variable in the project
import { toCamelCase } from "https://deno.land/x/good@0.5.4/string.js"

import { Box } from "./components/box.jsx"

const tauriInvoke = globalThis.tauriApi.invoke
const backendRun = async (code)=> {
    const { v, e } = JSON.parse(await tauriInvoke('run_deno', { code }))
    if (e) {
        throw Error(e)
    } else {
        return v
    }
}

for (let each of ["name_one", "Name Two", "Example-Three", "name4"]) {
    document.body.innerHTML += `each is:${toCamelCase(each)}<br>`
}

document.body.innerHTML += `
    <br>${Object.keys(globalThis.tauriApi)}
`
    // <br>Box.toString(): ${Box.toString()}

backendRun('globalThis.thing = 0').then(thing=>{
    document.body.innerHTML += `<br>thing: ${thing}`
}).catch(error=>document.body.innerHTML += `<br>thingError: ${error}`)
    
setTimeout(
    ()=>backendRun('Object.keys(globalThis)').then(thing=>{
        document.body.innerHTML += `<br>thing: ${thing}`
    }).catch(error=>document.body.innerHTML += `<br>thingError: ${error}`),
    1000
)
setTimeout(
    ()=>backendRun('globalThis.thing++').then(thing=>{
        document.body.innerHTML += `<br>thing: ${thing}`
    }).catch(error=>document.body.innerHTML += `<br>thingError: ${error}`),
    2000
)


console.log("Howdy!")
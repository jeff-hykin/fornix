import init, {convert} from "./pkg/fornix.js"
var a = init().then(() => {
    convert("WebAssembly")
})
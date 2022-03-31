import { toCamelCase } from "https://deno.land/x/good@0.4.2/string.js"


for (let each of ["name_one", "Name Two", "Example-Three"]) {
    document.body.innerHTML += `each is:${toCamelCase(each)}<br>`
}

console.log("Howdy!")
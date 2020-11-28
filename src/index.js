import("../pkg").catch(e => console.error("Failed loading WASM module:", e)).then(
    rust =>
        rust.hello_world()
);

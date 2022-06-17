// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
//!  This example shows you how to define ops in Rust and then call them from
//!  JavaScript.


#![cfg_attr(all(not(debug_assertions), target_os = "windows"), windows_subsystem = "windows" )]
fn main() {
    tauri::Builder::default()
        // .invoke_handler(tauri::generate_handler![run_deno])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}


use deno_core::op;
use deno_core::Extension;
use deno_core::JsRuntime;
use deno_core::RuntimeOptions;

// This is a hack to make the `#[op]` macro work with
// deno_core examples.
// You can remove this:
use deno_core::*;

#[op]
fn op_sum(nums: Vec<f64>) -> Result<f64, deno_core::error::AnyError> {
    // Sum inputs
    let sum = nums.iter().fold(0.0, |a, v| a + v);
    // return as a Result<f64, AnyError>
    Ok(sum)
}

fn eval(
    context: &mut JsRuntime,
    code: &str,
) -> Result<serde_json::Value, String> {
    let res = context.execute_script("<anon>", code);
    match res {
        Ok(global) => {
            let scope = &mut context.handle_scope();
            let local = v8::Local::new(scope, global);
            // Deserialize a `v8` object into a Rust type using `serde_v8`,
            // in this case deserialize to a JSON `Value`.
            let deserialized_value = serde_v8::from_v8::<serde_json::Value>(scope, local);

            match deserialized_value {
                Ok(value) => Ok(value),
                Err(err) => Err(format!("Cannot deserialize value: {:?}", err)),
            }
        }
        Err(err) => Err(format!("Evaling error: {:?}", err)),
    }
}

// #[tauri::command]
// fn run_deno(invoke_message: String) {
//     // 
//     // const { invoke } = window.__TAURI__
//     // invoke('my_custom_command', { invokeMessage: 'Hello!' })
//     // 
//     // Build a deno_core::Extension providing custom ops
//     let ext = Extension::builder()
//         .ops(vec![
//             // An op for summing an array of numbers
//             // The op-layer automatically deserializes inputs
//             // and serializes the returned Result & value
//             op_sum::decl(),
//         ])
//         .build();

//     // Initialize a runtime instance
//     let mut runtime = JsRuntime::new(RuntimeOptions {
//         extensions: vec![ext],
//         ..Default::default()
//     });

//     // Now we see how to invoke the op we just defined. The runtime automatically
//     // contains a Deno.core object with several functions for interacting with it.
//     // You can find its definition in core.js.
//     // eval(&runtime, )
//     runtime
//         .execute_script(
//             "<usage>",
//             &invoke_message,
//         )
//         .unwrap();
// }


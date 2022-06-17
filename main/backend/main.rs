#![cfg_attr(all(not(debug_assertions), target_os = "windows"), windows_subsystem = "windows" )]
fn main() {
    let ext = Extension::builder().build();
    let runtime = JsRuntime::new(RuntimeOptions {
        extensions: vec![ext],
        ..Default::default()
    });
    unsafe {
        RUNTIME_PTR = &runtime as *const JsRuntime as *mut JsRuntime;
    };
    
    
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![run_deno])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
    
    // use runtime at the end so rust doesn't optimize it away
    // (theres got to be a better way to do this)
    println!("runtime {:p}", &runtime);
}


use std::env;
use std::ptr;

use deno_core::op;
use deno_core::v8;
use deno_core::Extension;
use deno_core::JsRuntime;
use deno_core::RuntimeOptions;
use serde_v8;
use serde_json::json;
use std::{thread, time};

// static mut ext_ptr: *const Extension = ptr::null() as *const Extension;
static mut RUNTIME_PTR: *mut JsRuntime = ptr::null::<JsRuntime>() as *mut JsRuntime;
static mut RUNTIME_IN_USE: bool = false;

// // This is a hack to make the `#[op]` macro work with
// // deno_core examples.
// // You can remove this:
// use deno_core::*;

// #[op]
// fn op_sum(nums: Vec<f64>) -> Result<f64, deno_core::error::AnyError> {
//     // Sum inputs
//     let sum = nums.iter().fold(0.0, |a, v| a + v);
//     // return as a Result<f64, AnyError>
//     Ok(sum)
// }

fn eval(
    context: &mut JsRuntime,
    code: &String,
) -> String {
    let res = context.execute_script("<anon>", code);
    match res {
        Ok(global) => {
            let scope = &mut context.handle_scope();
            let local = v8::Local::new(scope, global);
            // Deserialize a `v8` object into a Rust type using `serde_v8`,
            // in this case deserialize to a JSON `Value`.
            let deserialized_value = serde_v8::from_v8::<serde_json::Value>(scope, local);

            match deserialized_value {
                Ok(value) => json!({ "v": value}).to_string(),
                Err(err) => json!({ "e": format!("{:?}", err)}).to_string(),
            }
        }
        Err(err) => json!({ "e": format!("{:?}", err)}).to_string(),
    }
}

#[tauri::command]
fn run_deno(invoke_message: String) -> String {
    println!("I was invoked from JS, with this message: {}", invoke_message);
    unsafe {
        // some primitive thread blocking (bools are threadsafe right?)
        while RUNTIME_IN_USE {
            thread::sleep(time::Duration::from_millis(50));
        }
        RUNTIME_IN_USE = true;
        let output = eval(
            &mut (*RUNTIME_PTR),
            &invoke_message
        );
        RUNTIME_IN_USE = false;
        output
    }
}
#![cfg_attr(all(not(debug_assertions), target_os = "windows"), windows_subsystem = "windows" )]
fn main() {
    // let args: Vec<String> = env::args().collect();
    // let this_file = args[0];
    // if args.len() >= 1 {
    //     if args[1] == "deno" {
    //         let mut p = Popen::create(&[this_file, "-A"], PopenConfig {
    //             stdout: Redirection::Pipe, ..Default::default()
    //         })?;
    //     }
    // }
    // println!("{:?}", args);
    
    let ext = Extension::builder()
        .ops(vec![
            // An op for summing an array of numbers
            // The op-layer automatically deserializes inputs
            // and serializes the returned Result & value
            // op_sum::decl(),
        ])
        .build();
    // Initialize a runtime instance
    let runtime = JsRuntime::new(RuntimeOptions {
        extensions: vec![ext],
        ..Default::default()
    });
    
    unsafe {
        // convert the reference to a raw pointer, and the raw pointer to another pointer
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
use deno_core::Extension;
use deno_core::JsRuntime;
use deno_core::RuntimeOptions;
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

// fn eval(
//     context: &mut JsRuntime,
//     code: &str,
// ) -> String {
//     let res = context.execute_script("<anon>", code);
//     match res {
//         Ok(global) => {
//             let scope = &mut context.handle_scope();
//             let local = v8::Local::new(scope, global);
//             // Deserialize a `v8` object into a Rust type using `serde_v8`,
//             // in this case deserialize to a JSON `Value`.
//             let deserialized_value = serde_v8::from_v8::<serde_json::Value>(scope, local);
//             let as_string = serde_json::to_string(&deserialized_value)?;

//             match deserialized_value {
//                 Ok(value) => Ok(value),
//                 Err(err) => Err(format!("Cannot deserialize value: {:?}", err)),
//             }
//         }
//         Err(err) => Err(format!("Evaling error: {:?}", err)),
//     }
// }

#[tauri::command]
fn run_deno(invoke_message: String) -> String {
    println!("I was invoked from JS, with this message: {}", invoke_message);
    unsafe {
        // some primitive thread blocking (bools are threadsafe right?)
        while RUNTIME_IN_USE {
            thread::sleep(time::Duration::from_millis(50));
        }
        RUNTIME_IN_USE = true;
        (*RUNTIME_PTR).execute_script(
            "<usage>",
            &invoke_message,
        )
        .unwrap();
        RUNTIME_IN_USE = false;
    }
    "Hello from Rust!".into()
}
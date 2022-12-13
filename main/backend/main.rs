
#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::env;
use std::ptr;

use std::sync::{Arc, Mutex};
use std::thread;
use std::sync::mpsc::channel;

use deno_core;
use deno_core::Extension;
use deno_core::JsRuntime;
use deno_core::RuntimeOptions;
use deno_core::FsModuleLoader;
use deno_core::v8;
use deno_core::op;
use deno_core::*;

use deno_runtime;
use deno_runtime::permissions::Permissions;

use deno_bench_util;
use deno_broadcast_channel;
use deno_console;
use deno_crypto;
use deno_fetch;
use deno_ffi;
use deno_http;
use deno_net;
use deno_tls;
use deno_url;
use deno_web;
use deno_webgpu;
use deno_webidl;
use deno_websocket;
use deno_webstorage;
use deno_ops;
use serde_v8;

use serde_json::json;
use std::{thread, time};

static mut RUNTIME_PTR: *mut JsRuntime = ptr::null::<JsRuntime>() as *mut JsRuntime;
// static mut RUNTIME_IN_USE: bool = false;
let RUNTIME_IN_USE = Arc::new(Mutex::new(0));

#[op]
fn op_sum(nums: Vec<f64>) -> Result<f64, deno_core::error::AnyError> {
    // Sum inputs
    let sum = nums.iter().fold(0.0, |a, v| a + v);
    // return as a Result<f64, AnyError>
    Ok(sum)
}

fn main() {
    let ext = Extension::builder().ops(vec![
            // An op for summing an array of numbers
            // The op-layer automatically deserializes inputs
            // and serializes the returned Result & value
            op_sum::decl(),
        ]).build();
    let runtime = JsRuntime::new(RuntimeOptions {
        // module_loader: Some(Rc::new(FsModuleLoader)), // CliModuleLoader, TypescriptModuleLoader, NoopModuleLoader, EmbeddedModuleLoader {
        extensions: vec![
            ext,
            deno_console::init(),
            deno_http::init(),
            deno_net::init::<Permissions>(
                None,
                false, // No --unstable.
                None,
            ),
            deno_tls::init(),
            deno_url::init(),
            deno_webidl::init(),
            deno_fetch::init::<Permissions>(Default::default()),
            deno_web::init::<Permissions>(
                deno_web::BlobStore::default(),
                Default::default(),
            ),
            deno_websocket::init::<Permissions>("".to_owned(), None, None),
            deno_webstorage::init(None),
            deno_crypto::init(None),
            deno_webgpu::init(false),
            deno_broadcast_channel::init(
                deno_broadcast_channel::InMemoryBroadcastChannel::default(),
                false, // No --unstable.
            ),
            deno_ffi::init::<Permissions>(false),
            // 
                // deno_webidl::init(),
                // deno_console::init(),
                // deno_url::init(),
                // deno_tls::init(),
                // deno_fetch::init::<Permissions>(Default::default()),
                // deno_websocket::init::<Permissions>("".to_owned(), None, None),
                // deno_webstorage::init(None),
                // deno_crypto::init(None),
                // deno_webgpu::init(false),
                // deno_ffi::init::<Permissions>(false),
                // deno_net::init::<Permissions>(
                //     None, false, // No --unstable.
                //     None,
                // ),
                // deno_http::init(),
        ],
        ..Default::default()
    });
    unsafe {
        RUNTIME_PTR = &runtime as *const JsRuntime as *mut JsRuntime;
    };
    
    // https://github.com/tauri-apps/tauri/search?q=tauri%3A%3AWindow   
    // tauri::Builder::default()
    //     .on_page_load(|window, _payload| {
    //         let label = window.label().to_string();
    //         window.listen("clicked".to_string(), move |_payload| {
    //             println!("got 'clicked' event on window '{}'", label);
    //         });
    //     })
    //     .setup(|app| {
    //         WindowBuilder::new(
    //             app,
    //             "Rust".to_string(),
    //             tauri::WindowUrl::App("index.html".into()),
    //         )
    //         .title("Tauri - Rust")
    //         .build()?;
    //         Ok(())
    //     })
    //     .run(context)
    //     .expect("failed to run tauri application");
    
    
    tauri::Builder::default()
        // .menu(tauri::Menu::os_default(&context.package_info().name))
        .invoke_handler(tauri::generate_handler![run_deno])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
    
    // use runtime at the end so rust doesn't optimize it away
    // (theres got to be a better way to do this)
    println!("runtime {:p}", &runtime);
}

#[tauri::command]
fn run_deno(code: String) -> String {
    unsafe {
        let mut data = RUNTIME_IN_USE.lock().unwrap(); // unlocks when the function returns
        
        let context = &mut (*RUNTIME_PTR);
        let result = context.execute_script("<anon>", &code);
        let output = match result {
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
        };
        output
    }
}

// https://tauri.app/v1/guides/features/command/#accessing-the-window-in-commands
// #[tauri::command]
// async fn my_custom_command(window: tauri::Window) {
//     window.emit
//     println!("Window: {}", window.label());
// }

// https://tauri.app/v1/guides/features/command/#accessing-an-apphandle-in-commands
// #[tauri::command]
// async fn my_custom_command(app_handle: tauri::AppHandle) {
//   let app_dir = app_handle.path_resolver().app_dir();
//   use tauri::GlobalShortcutManager;
//   app_handle.global_shortcut_manager().register("CTRL + U", move || {});
// }

// struct MyState(String);
// #[tauri::command]
// fn my_custom_command(state: tauri::State<MyState>) {
//   assert_eq!(state.0 == "some state value", true);
// }
// fn main() {
//   tauri::Builder::default()
//     .manage(MyState("some state value".into()))
//     .invoke_handler(tauri::generate_handler![my_custom_command])
//     .run(tauri::generate_context!())
//     .expect("error while running tauri application");
// }
extern crate toml_edit;
use wasm_bindgen::prelude::*;
use toml_edit::{Document, Item, value};
use serde_json;

#[wasm_bindgen]
extern "C" {
    // Use `js_namespace` here to bind `console.log(..)` instead of just
    // `log(..)`
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);

    // The `console.log` is quite polymorphic, so we can bind it with multiple
    // signatures. Note that we need to use `js_name` to ensure we always call
    // `log` in JS.
    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_u32(a: u32);

    // Multiple arguments too!
    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_many(a: &str, b: &str);
}


#[wasm_bindgen]
pub fn convert(toml: &str, json: &str) -> String {
    // get the original as a string
    let mut doc = toml.parse::<Document>().expect("invalid doc");
    // see what should change
    let resp: serde_json::value::Value = serde_json::from_str(json)?;
    for each_change in resp["changes"].as_array().unwrap().iter() {
        let keylist_value = each_change.as_array().unwrap();
        let keylist = keylist_value[0].as_array().unwrap();
        let value = keylist_value[1];
        let mut parent = doc.as_item();
        
        let items: Vec<_> = pairwise(keylist).collect();
        for each_pair in items {
            let previous_key_possibly = each_pair.0;
            let current_key = each_pair.1;
            
            // figure out if the parent's parent was table or not
            let mut prev_was_table = match previous_key_possibly {
                Some(previous_key) => previous_key.is_str(),
                None => true, // the top level is always an object
            };
            
            // 
            // string key
            // 
                // if key is a string 
                    // if value is not an object
                        // change doc value to be an empty object
            if (current_key.is_string()) {
                let mut key = current_key.as_str().unwrap();
                // FIXME: parent can either be table like or array like
                let mut table = parent.as_table_like_mut();
                if (! table.contains_key(key)) {
                    // FIXME: create it 
                    
                } else {
                    let mut item: Item = table.get_mut(key);
                    if (!item.is_table_like()) {
                        // FIXME: force it to be table like
                    }
                }
            }
            
            // 
            // numeric key
            // 
                // if value is not an array
                    // change doc value to be an array: toml_edit::Array::new()
                        // add empty values until one before the number-index: arr.push(toml_edit::table());
            if (current_key.is_number()) {
                let mut key = current_key.as_i64().unwrap();
                let mut table = parent.as_table_like_mut();
                if (! table.contains_key(key)) {
                    // FIXME: create it 
                    
                } else {
                    let mut item: Item = table.get_mut(key);
                    if (!item.is_table_like()) {
                        // FIXME: force it to be table like
                    }
                }
            }
            
            let key = current_key.as_str().unwrap();
            parent = parent[key];
        }
        println!("{}", current_key);
    }
    // read key-value change
    
    // let's add a new key/value pair inside a.b: c = {d = "hello"}
    doc["a"]["b"]["c"]["d"] = value("hello");
    // autoformat inline table a.b.c: { d = "hello" }
    doc["a"]["b"]["c"].as_inline_table_mut().map(|t| t.fmt());
    return doc.to_string();
}
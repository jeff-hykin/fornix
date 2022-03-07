use serde_json;
use std::iter;

fn pairwise<I>(right: I) -> impl Iterator<Item=(Option<I::Item>,I::Item)> where I: IntoIterator + Clone, {
    let left = iter::once(None).chain(right.clone().into_iter().map(Some));
    left.zip(right)
}

fn main() {
    let resp: serde_json::value::Value = serde_json::from_str(r###"
        [
            1,2,3,4
        ]
    "###).unwrap();
    
    let items: Vec<_> = pairwise(resp.as_array().unwrap()).collect();
    for each in items {
        println!("{}", each.1);
    }
}

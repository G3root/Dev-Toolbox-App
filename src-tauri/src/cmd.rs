use comrak::{markdown_to_html, ComrakOptions};
use tauri::command;

#[command]
pub fn my_custom_command() -> String {
    "Hello from Rust!".into()
}

#[command]
pub fn generate_html(markdown: String) -> String {
    let converted = markdown_to_html(&markdown, &ComrakOptions::default());
    converted.into()
}

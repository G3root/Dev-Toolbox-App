#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod cmd;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            cmd::my_custom_command,
            cmd::generate_html,
            cmd::generate_lorem_ipsum,
            cmd::text_case,
            cmd::hash_generator
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

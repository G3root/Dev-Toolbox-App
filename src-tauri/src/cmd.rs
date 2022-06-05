use comrak::{markdown_to_html, ComrakOptions};
use convert_case::{Case, Casing};
use lipsum::lipsum;
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

#[command]
pub fn generate_lorem_ipsum(length: usize) -> String {
    let converted = lipsum(length);
    converted.into()
}

#[derive(serde::Serialize)]
pub struct NameValueResp {
    name: String,
    value: String,
}

#[command]
pub fn text_case(text: String) -> Vec<NameValueResp> {
    vec![
        NameValueResp {
            name: "Camel Case".to_string(),
            value: text.to_case(Case::Camel),
        },
        NameValueResp {
            name: "Pascal Case".to_string(),
            value: text.to_case(Case::Pascal),
        },
        NameValueResp {
            name: "Snake Case".to_string(),
            value: text.to_case(Case::Snake),
        },
        NameValueResp {
            name: "Kebab Case".to_string(),
            value: text.to_case(Case::Kebab),
        },
        NameValueResp {
            name: "Cobol Case".to_string(),
            value: text.to_case(Case::Cobol),
        },
        NameValueResp {
            name: "Upper Snake Case".to_string(),
            value: text.to_case(Case::UpperSnake),
        },
        NameValueResp {
            name: "Title Case".to_string(),
            value: text.to_case(Case::Title),
        },
    ]
}

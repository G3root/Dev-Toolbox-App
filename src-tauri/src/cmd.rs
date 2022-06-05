use comrak::{markdown_to_html, ComrakOptions};
use convert_case::{Case, Casing};
use lipsum::lipsum;
use md5::Md5;
use sha2::{Digest, Sha256, Sha512};
use sha3::{Keccak256, Sha3_256, Sha3_512};
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

#[command]
pub fn hash_generator(text: String) -> Vec<NameValueResp> {
    let mut sha256_hasher = Sha256::new();
    let mut sha512_hasher = Sha512::new();
    let mut sha3_256_hasher = Sha3_256::new();
    let mut sha3_512_hasher = Sha3_512::new();
    let mut keccak256 = Keccak256::new();
    let mut md5_hasher = Md5::new();

    sha256_hasher.update(&text);
    sha512_hasher.update(&text);
    md5_hasher.update(&text);
    sha3_256_hasher.update(&text);
    sha3_512_hasher.update(&text);
    keccak256.update(&text);

    vec![
        NameValueResp {
            name: "MD5".to_string(),
            value: format!("{:X}", md5_hasher.finalize()),
        },
        NameValueResp {
            name: "SHA256".to_string(),
            value: format!("{:X}", sha256_hasher.finalize()),
        },
        NameValueResp {
            name: "SHA512".to_string(),
            value: format!("{:X}", sha512_hasher.finalize()),
        },
        NameValueResp {
            name: "SHA-3 256".to_string(),
            value: format!("{:X}", sha3_256_hasher.finalize()),
        },
        NameValueResp {
            name: "SHA-3 512".to_string(),
            value: format!("{:X}", sha3_512_hasher.finalize()),
        },
        NameValueResp {
            name: "Keccak256".to_string(),
            value: format!("{:X}", keccak256.finalize()),
        },
    ]
}

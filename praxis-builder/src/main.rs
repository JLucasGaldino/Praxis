use serde_json::json;
use std::fs::File;
use std::io::prelude::*;
use std::path::Path;

mod headings;
mod calendar;
mod page_content;

fn main() {

    fn create_language_content(language: &str) -> serde_json::Value {
        let index = match language {
            "en" => 0,
            "pt" => 1,
            _ => 0,
        };
        let lang_specific_data = json!({
            "headings": {
                "pages": {
                    "prayers": headings::PRAYERS[index],
                    "settings": headings::SETTINGS[index]
                },
                "sections": {
                    "synaxarion": headings::SYNAXARION[index],
                    "daily": headings::DAILY[index],
                    "communion": headings::COMMUNION[index]
                }
            },
            "calendar": {
                "weekDays": calendar::WEEK_DAYS[index],
                "months": calendar::MONTHS[index]
            },
            "cardContent": language,
            "pageContent": page_content::create_content()
        });
        return lang_specific_data;
    }

    // Add other languages as necessary
    let data = json!({
        "en": create_language_content("en"),
        "pt": create_language_content("pt")
    });

    let output = serde_json::to_string_pretty(&data).unwrap().to_string();


    let path = Path::new("output.json");
    let display = path.display();

    let mut file = match File::create(&path) {
        Err(why) => panic!("couldn't create {}: {}", display, why),
        Ok(file) => file,
    };

    match file.write_all(output.as_bytes()) {
        Err(why) => panic!("couldn't write to {}: {}", display, why),
        Ok(_) => println!("successfully wrote to {}", display),
    }
}

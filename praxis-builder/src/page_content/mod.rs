// Here, will be placed the core common style shared between page contents, and
// inside the directory, there will be many md files that will be turned into html
// use build_html::{HtmlElement, HtmlTag, Html, HtmlPage, HtmlContainer};
use tera::Tera;

pub fn create_content() -> String {
    let mut tera = Tera::new("templates/**/*").unwrap();
    tera.add_raw_template("hello", "Hello, {{ name }}!").unwrap();

    let mut context = tera::Context::new();
    context.insert("name", "World");

    let rendered = tera.render("hello", &context).unwrap();
    return rendered;
}

// pub fn create_content() -> std::string::String {
//     let element = HtmlElement::new(HtmlTag::Div)
//         .with_child(
//             HtmlElement::new(HtmlTag::ParagraphText)
//                 .with_child("Paragraph Text".into())
//                 .into()
//         )
//         .into();

//     let page = HtmlPage::new()
//         .add_html(element)
//         .to_html_string();

//     return page;
// }

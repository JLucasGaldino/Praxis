import toml
import json
import click

@click.command()
def build() -> None:
    """Writes test.json from a content.toml in the root directory of the package"""
    with open('content.toml', 'r') as f:
        content = toml.load(f)

    data = {
        "test": content['portuguese']['headings']['test']
    }

    with open("test.json", "a+") as file:
        json.dump(data, file)

    click.echo("test.json written")

# Services

This folder include the list of all available services

## Format

each Service should be contained into their own folder, they should use a JSON file to declare what they do

```json
{
    "name": "Service display name",
    "input": {
        "field1": {
            "type": "string,number,date",
            "validor": "validation function",
            "choices": "choices function"
        }
    },
    "output":{
        "entryPoint": "entry function",
        "type": "file,json"
    }
}
```
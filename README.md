
# 254 Price Display

Html website that reads a json file converted from Open Office spreadsheet ".ods" and displays current phone prices.

## Features

- Shows current repair prices
- Uses Open Office spreadsheets ".ods" to store current prices

## FullPageOS
Using FullPageOS Raspberrypi distro.\n
MAKE SURE TO KEEP USERNAME "pi" 
## Convert .ods to .json

To convert .ods to json after editing .ods file

```bash
  python3 ods_to_json.py
```

This will create or replace "prices.json"

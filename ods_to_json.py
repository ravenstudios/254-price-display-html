from pyexcel_ods import get_data
data = get_data("Phone_Repair_Prices.ods")
import json

# Serializing json
json_object = json.dumps(data, indent=4)

# Writing to sample.json
with open("prices.json", "w") as outfile:
    outfile.write(json_object)

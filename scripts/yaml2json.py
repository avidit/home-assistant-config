#!/usr/bin/env python3

import sys, json, yaml

with open(sys.argv[1]) as file:
    print(json.dumps(yaml.safe_load(file), indent=2))


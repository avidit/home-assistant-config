#!/usr/bin/env python3

import sys, json, yaml

with open(sys.argv[1]) as file:
    print(yaml.safe_dump(json.load(file), default_flow_style=False))


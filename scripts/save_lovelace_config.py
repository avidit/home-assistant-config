#!/usr/bin/env python

import sys
import json
from ruamel.yaml import YAML

yaml = YAML()
yaml.indent(sequence=4, offset=2)

try:
    with open('.storage/lovelace') as json_file:
        with open('ui-lovelace.yaml', 'w') as yaml_file:
            config = json.load(json_file)['data']['config']
            yaml.dump(config, yaml_file)
except Exception as error:
    print(f'failed to save config, {error}')

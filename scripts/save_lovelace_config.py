#!/usr/bin/env python

import os
import sys
import json
from ruamel.yaml import YAML

yaml = YAML()
yaml.indent(sequence=4, offset=2)


def save(json_file):
    """save lovelace json files in yaml format"""
    try:
        with open(json_file) as source_file:
            yaml_file = os.path.join(
                'lovelace', os.path.basename(json_file) + '.yaml')
            os.makedirs(os.path.dirname(yaml_file), exist_ok=True)
            with open(yaml_file, 'w') as target_file:
                content = json.load(source_file)
                yaml.dump(content, target_file)
    except Exception as error:
        print(f'failed to save config, {error}')


rootdir = '.storage'
for file in os.listdir(rootdir):
    if file.startswith('lovelace'):
        json_file = os.path.join(rootdir, file)
        save(json_file)

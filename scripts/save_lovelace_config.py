#!/usr/bin/env python

import os
import sys
import json
import yaml

def save(json_file):
    """save lovelace json files in yaml format"""
    print(f'saving config: {json_file}')
    try:
        with open(json_file) as source_file:
            yaml_file = os.path.join(
                'lovelace', os.path.basename(json_file) + '.yaml')
            os.makedirs(os.path.dirname(yaml_file), exist_ok=True)
            with open(yaml_file, 'w') as target_file:
                content = json.load(source_file)
                yaml.dump(content, target_file)
                print(f'config saved as: {yaml_file}')
    except Exception as error:
        print(f'failed to save config, {error}')


if __name__ == "__main__":
    rootdir = '.storage'
    for file in os.listdir(rootdir):
        if file.startswith('lovelace'):
            json_file = os.path.join(rootdir, file)
            save(json_file)

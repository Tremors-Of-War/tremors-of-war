#!/bin/env python
import json

from constants import OUTPUT_FILE
from parsers.database import parse_database
from utils import sort_arrays_in_nested_dict


def get_database():
    data = parse_database()
    data = sort_arrays_in_nested_dict(data)
    return json.dumps(data, indent=2, sort_keys=True)


def write_data_to_file(data):
    with open(OUTPUT_FILE, "w") as f:
        f.write(data)


def main():
    data = get_database()
    write_data_to_file(data)


if __name__ == "__main__":
    main()

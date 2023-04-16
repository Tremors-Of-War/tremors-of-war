#!/bin/env python
import json

from constants import OUTPUT_FILE
from parsers.database import parse_database


def main():
    data = parse_database()
    with open(OUTPUT_FILE, "w") as f:
        f.write(json.dumps(data, indent=2))


if __name__ == "__main__":
    main()

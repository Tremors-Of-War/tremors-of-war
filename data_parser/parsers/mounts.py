from pylightxl import Database

from constants import SHEETS
from utils import (
    get_table_from_sheet,
    get_table_size,
    build_object_from_table_on_index,
    transform_multi_columns_to_list,
)


def _get_mounts_sheet(db: Database):
    return db.ws(SHEETS.MOUNTS)


def parse_mounts(db: Database):
    sheet = _get_mounts_sheet(db)
    table = get_table_from_sheet(sheet)
    table_size = get_table_size(table)

    mounts = {}
    for index in range(table_size):
        mount = build_object_from_table_on_index(table, index)
        mount = transform_multi_columns_to_list(mount, "AB", 3, "Abilities")

        name = mount["Name"]
        mounts[name] = mount
        print(mount)

    return mounts

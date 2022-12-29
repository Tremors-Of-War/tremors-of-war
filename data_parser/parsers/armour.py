from pylightxl import Database

from constants import SHEETS
from utils import (
    get_table_from_sheet,
    get_table_size,
    build_object_from_table_on_index,
    transform_set_name,
)


class ARMOUR_HEADERS:
    ARMOUR_VALUE_CC = "Armour Value CC"
    ARMOUR_VALUE_R = "Armour Value R"
    EFFECTS = "Effects"


def _get_armour_sheet(db: Database):
    return db.ws(SHEETS.ARMOUR)


def _transform_empty_value_to_null(armour, field):
    if armour[field] == "-":
        armour[field] = None
    return armour


def parse_armour(db: Database):
    sheet = _get_armour_sheet(db)
    table = get_table_from_sheet(sheet)
    table_size = get_table_size(table)

    armours = {}
    for index in range(table_size):
        armour = build_object_from_table_on_index(table, index)
        armour = transform_set_name(armour, "Armour")
        armour = _transform_empty_value_to_null(armour, ARMOUR_HEADERS.ARMOUR_VALUE_CC)
        armour = _transform_empty_value_to_null(armour, ARMOUR_HEADERS.ARMOUR_VALUE_R)
        armour = _transform_empty_value_to_null(armour, ARMOUR_HEADERS.EFFECTS)

        name = armour["Name"]
        armours[name] = armour

    return armours

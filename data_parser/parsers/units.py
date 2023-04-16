from pylightxl import Database
import logging

from constants import SHEETS
from parsers.relations import parse_relations
from utils import (
    join_pascal_snake_case,
    get_table_size,
    build_object_from_table_on_index,
    transform_multi_columns_to_list,
    get_table_from_sheet,
    set_camel_case_keys,
    convert_name_to_title_case,
)


logger = logging.getLogger(__name__)


def _units_sheet_name(ruleset):
    return join_pascal_snake_case(ruleset, SHEETS.UNITS)


def _get_units_sheet(db: Database, ruleset):
    sheet_name = _units_sheet_name(ruleset)
    return db.ws(sheet_name)


def _add_relations_to_unit(unit, relations):
    unit_name = unit["Name"]

    if unit_name not in relations:
        logger.warning('Data integrity issue: "%s" not in relations table', unit_name)
        return unit

    return {**unit, **relations[unit_name]}


def parse_units(db: Database, ruleset):
    sheet = _get_units_sheet(db, ruleset)
    relations = parse_relations(db, ruleset)

    table = get_table_from_sheet(sheet)
    num_units = get_table_size(table)

    units = {}
    for index in range(num_units):
        unit = build_object_from_table_on_index(table, index)
        unit = transform_multi_columns_to_list(unit, "AB", 3, "Abilities")
        unit = _add_relations_to_unit(unit, relations)
        unit = set_camel_case_keys(unit)

        unit_id = unit["name"]
        unit["id"] = unit_id

        unit = convert_name_to_title_case(unit)

        units[unit_id] = unit

    return units

from pylightxl import Database
import logging


from constants import SHEETS, STAT_HEADER_LIST
from parsers.relations import parse_relations
from utils import join_pascal_snake_case, load_stats, get_table_from_headers

logger = logging.getLogger(__name__)


class UNIT_HEADERS:
    UNIT_NAME = "Unit_Name"


HEADERS = [
    UNIT_HEADERS.UNIT_NAME,
    "Faction",
    "AB1",
    "AB2",
    "AB3",
    *STAT_HEADER_LIST,
]


def _units_sheet_name(ruleset):
    return join_pascal_snake_case(ruleset, SHEETS.UNITS)


def _get_units_sheet(db: Database, ruleset):
    sheet_name = _units_sheet_name(ruleset)
    return db.ws(sheet_name)


def _get_num_units(table):
    # Get the length of the first element in the table
    return len(table[HEADERS[0]])


def _get_abilities_list(unit):
    list_with_null_values = [
        unit.get("AB1"),
        unit.get("AB2"),
        unit.get("AB3"),
    ]
    set_without_null_values = {x for x in list_with_null_values if x}
    return list(set_without_null_values)


def _transform_abilities(unit):
    unit["Abilities"] = _get_abilities_list(unit)
    del unit["AB1"]
    del unit["AB2"]
    del unit["AB3"]
    return unit


def _add_relations_to_unit(unit, relations):
    unit_name = unit[UNIT_HEADERS.UNIT_NAME]

    if unit_name not in relations:
        logger.warning('Data integrity issue: "%s" not in relations table', unit_name)
        return unit

    return {**unit, **relations[unit_name]}


# TODO: Determine cost of units
def parse_units(db: Database, ruleset):
    sheet = _get_units_sheet(db, ruleset)
    relations = parse_relations(db)

    table = get_table_from_headers(sheet, HEADERS)
    num_units = _get_num_units(table)

    units = []
    for index in range(num_units):
        unit = {column: table[column][index] for column in table.keys()}
        unit = _transform_abilities(unit)
        unit = _add_relations_to_unit(unit, relations)
        units.append(unit)

    return units

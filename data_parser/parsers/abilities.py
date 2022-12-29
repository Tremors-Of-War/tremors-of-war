from pylightxl import Database

from constants import SHEETS
from utils import get_table_from_sheet, get_table_size, build_object_from_table_on_index


def _get_abilities_sheet(db: Database):
    return db.ws(SHEETS.ABILITIES)


def _transform_empty_cost_to_zero(ability):
    if ability["Cost"] == "":
        ability["Cost"] = 0
    return ability


def _transform_ability_label_to_name(ability):
    ability["Name"] = ability["Ability"]
    del ability["Ability"]
    return ability


def parse_abilities(db: Database):
    sheet = _get_abilities_sheet(db)
    table = get_table_from_sheet(sheet)
    table_size = get_table_size(table)

    abilities = {}
    for index in range(table_size):
        ability = build_object_from_table_on_index(table, index)
        ability = _transform_empty_cost_to_zero(ability)
        ability = _transform_ability_label_to_name(ability)

        name = ability["Name"]
        abilities[name] = ability

    return abilities

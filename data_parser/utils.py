from typing import List

from constants import STAT_NAMES


def join_pascal_snake_case(*args):
    return "_".join(args)


def load_stats(stat_array: List):
    return {
        STAT_NAMES.MOVEMENT: stat_array[0],
        STAT_NAMES.WEAPON_SKILL: stat_array[1],
        STAT_NAMES.BALLISTIC_SKILL: stat_array[2],
        STAT_NAMES.STRENGTH: stat_array[3],
        STAT_NAMES.TOUGHNESS: stat_array[4],
        STAT_NAMES.WOUNDS: stat_array[5],
        STAT_NAMES.INITIATIVE: stat_array[6],
        STAT_NAMES.ATTACKS: stat_array[7],
        STAT_NAMES.COOL: stat_array[8],
        STAT_NAMES.INTELLIGENCE: stat_array[9],
    }


def get_table_from_headers(sheet, headers):
    return {column: sheet.keycol(column)[1:] for column in headers}


def get_table_from_sheet(sheet):
    first_value = sheet.index(1, 1)
    headers = sheet.keyrow(first_value)
    return get_table_from_headers(sheet, headers)


def get_table_size(table):
    return len(list(table.values())[0])


def build_object_from_table_on_index(table, index):
    return {column: table[column][index] for column in table.keys()}


def transform_set_name(obj, key):
    obj["Name"] = obj[key]
    del obj[key]
    return obj

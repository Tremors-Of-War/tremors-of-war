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

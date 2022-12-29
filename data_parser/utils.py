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


def _get_field_value(obj, column):
    value = obj.get(column)
    if value == "-":
        return None
    return value


def _remove_null_and_duplicate_values_from_list(li):
    return list({x for x in li if x})


def transform_multi_columns_to_list(obj, column_base, num_columns, full_name):
    column_names = [f"{column_base}{x + 1}" for x in range(num_columns)]
    values = [_get_field_value(obj, column_name) for column_name in column_names]
    values = _remove_null_and_duplicate_values_from_list(values)

    for column_name in column_names:
        del obj[column_name]

    obj[full_name] = values

    return obj

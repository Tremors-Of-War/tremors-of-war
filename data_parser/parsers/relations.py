from pylightxl import Database

from constants import SHEETS
from utils import get_table_from_headers


def _get_relations_sheet(db: Database):
    return db.ws(SHEETS.RELATIONS)


def _get_relation_name_from_cell(unit_name, cell):
    split_by_unit_name = cell.split(f"{unit_name}_")
    if unit_name in cell and len(split_by_unit_name) > 1:
        return split_by_unit_name[1]

    return None


# For better readability
_cell_is_relation_name = _get_relation_name_from_cell


def parse_relations(db: Database):
    sheet = _get_relations_sheet(db)

    first_value = sheet.index(1, 1)
    headers = sheet.keyrow(first_value)
    table = get_table_from_headers(sheet, headers)

    unit_relations = {}

    for unit_name, cells in table.items():
        unit_relations[unit_name] = {}
        relations = unit_relations[unit_name]
        current_relation = None

        for cell in cells:
            if not cell:
                continue

            if _cell_is_relation_name(unit_name, cell):
                current_relation = _get_relation_name_from_cell(unit_name, cell)
                relations[current_relation] = []

            else:
                relations[current_relation].append(cell)

    return unit_relations

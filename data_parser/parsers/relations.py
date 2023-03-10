from pylightxl import Database

from constants import SHEETS
from utils import get_table_from_sheet, join_pascal_snake_case


def _get_relations_sheet(db: Database, ruleset):
    name = join_pascal_snake_case(ruleset, SHEETS.RELATIONS)
    return db.ws(name)


def _get_relation_name_from_cell(unit_name, cell):
    split_by_unit_name = cell.split(f"{unit_name}_")
    if unit_name in cell and len(split_by_unit_name) > 1:
        return split_by_unit_name[1]

    return None


# For better readability
_cell_is_relation_name = _get_relation_name_from_cell


def parse_relations(db: Database, ruleset):
    sheet = _get_relations_sheet(db, ruleset)

    table = get_table_from_sheet(sheet)
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

from pylightxl import Database
import logging
from constants import SHEETS
from parsers.relations import parse_relations

from utils import (
    get_table_from_sheet,
    get_table_size,
    build_object_from_table_on_index,
    transform_multi_columns_to_list,
    set_camel_case_keys

)

logger = logging.getLogger(__name__)


def _get_mounts_sheet(db: Database):
    return db.ws(SHEETS.MOUNTS)


def _add_relations_to_unit(mount, relations):
    mount_name = mount["Name"]

    if mount_name not in relations:
        logger.warning('Data integrity issue: "%s" not in relations table', mount_name)
        return mount

    return {**mount, **relations[mount_name]}


def parse_mounts(db: Database):
    sheet = _get_mounts_sheet(db)
    relations = parse_relations(db, "Fantasy")

    table = get_table_from_sheet(sheet)
    table_size = get_table_size(table)

    mounts = {}
    for index in range(table_size):
        mount = build_object_from_table_on_index(table, index)
        mount = transform_multi_columns_to_list(mount, "AB", 3, "Abilities")
        mount = _add_relations_to_unit(mount, relations)
        mount = set_camel_case_keys(mount)
        name = mount["name"]
        mounts[name] = mount
        
        
 
    return mounts

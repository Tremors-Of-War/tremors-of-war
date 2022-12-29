import logging
from pylightxl import Database

from constants import SHEETS
from utils import (
    get_table_from_sheet,
    get_table_size,
    build_object_from_table_on_index,
    transform_multi_columns_to_list,
)

logger = logging.getLogger(__name__)


def _get_weapons_sheet(db: Database):
    return db.ws(SHEETS.WEAPONS)


def _get_weapon_traits_sheet(db: Database):
    return db.ws(SHEETS.WEAPON_TRAITS)


def _parse_weapon_traits(db: Database):
    sheet = _get_weapon_traits_sheet(db)
    table = get_table_from_sheet(sheet)
    table_size = get_table_size(table)

    weapon_traits = {}
    for index in range(table_size):
        weapon_trait = build_object_from_table_on_index(table, index)
        name = weapon_trait["Name"]
        weapon_traits[name] = weapon_trait

    return weapon_traits


def _get_trait_cost(weapon, weapon_traits):
    traits_list = weapon["Traits"]
    cost = 0
    for trait in traits_list:
        if trait not in weapon_traits:
            logger.warning(
                "Integrity error: '%s' not in weapon_traits for '%s'",
                trait,
                weapon["Name"],
            )
            continue

        cost += weapon_traits[trait]["Cost"]

    return cost


# TODO: ACTUALLY CALCULATE THE WEAPON COST
def _transform_set_weapon_cost(weapon, weapon_traits):
    trait_cost = _get_trait_cost(weapon, weapon_traits)
    return weapon


def parse_weapons(db: Database):
    # weapon_traits = _parse_weapon_traits(db)
    sheet = _get_weapons_sheet(db)
    table = get_table_from_sheet(sheet)
    table_size = get_table_size(table)

    weapons = {}
    for index in range(table_size):
        weapon = build_object_from_table_on_index(table, index)
        weapon = transform_multi_columns_to_list(weapon, "T", 4, "Traits")
        # TODO: ACTUALLY CALCULATE THE WEAPON COST
        #       Currently we have the value precomputed
        # weapon = _transform_set_weapon_cost(weapon, weapon_traits)

        name = weapon["Name"]
        weapons[name] = weapon

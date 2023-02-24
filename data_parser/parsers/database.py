from pylightxl import readxl

from constants import DATABASE
from parsers.abilities import parse_abilities
from parsers.armour import parse_armour
from parsers.mounts import parse_mounts
from parsers.ruleset import parse_rulesets, RULESET
from parsers.weapons import parse_weapons


def get_factions_from_rulesets(rulesets):
    return {**rulesets['fantasy']['factions'], **rulesets['dark_ages']['factions']}


def get_units_from_factions(factions):
    units = {}
    for faction_units in list(factions.values()):
        units = {**units, **faction_units}
    return units


def parse_database():
    db = readxl(DATABASE)

    weapons = parse_weapons(db)
    abilities = parse_abilities(db)
    armour = parse_armour(db)
    mounts = parse_mounts(db)
    rulesets = parse_rulesets(db)
    factions = get_factions_from_rulesets(rulesets)
    units = get_units_from_factions(factions)

    return {
        "abilities": abilities,
        "armour": armour,
        "weapons": weapons,
        "mounts": mounts,
        "rulesets": rulesets,
        "factions": factions,
        "units": units,
    }

from pylightxl import readxl

from constants import DATABASE
from parsers.abilities import parse_abilities
from parsers.armour import parse_armour
from parsers.mounts import parse_mounts
from parsers.ruleset import parse_rulesets
from parsers.weapons import parse_weapons


def parse_database():
    db = readxl(DATABASE)

    weapons = parse_weapons(db)
    abilities = parse_abilities(db)
    armour = parse_armour(db)
    mounts = parse_mounts(db)
    rulesets = parse_rulesets(db)

    return {
        "abilities": abilities,
        "armour": armour,
        "weapons": weapons,
        "mounts": mounts,
        "rulesets": rulesets,
    }

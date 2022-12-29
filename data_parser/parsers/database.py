from pylightxl import readxl

from constants import DATABASE, RULESET
from parsers.abilities import parse_abilities
from parsers.armour import parse_armour
from parsers.mounts import parse_mounts
from parsers.ruleset import parse_ruleset
from parsers.weapons import parse_weapons


def parse_database():
    db = readxl(DATABASE)

    weapons = parse_weapons(db)
    abilities = parse_abilities(db)
    armour = parse_armour(db)
    mounts = parse_mounts(db)
    fantasy = parse_ruleset(db, RULESET.FANTASY)
    dark_ages = parse_ruleset(db, RULESET.DARK_AGES)

    return {
        "abilities": abilities,
        "armour": armour,
        "weapons": weapons,
        "mounts": mounts,
        "ruleset": {
            "fantasy": fantasy,
            "dark_ages": dark_ages,
        },
    }

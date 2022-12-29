from pylightxl import readxl

from constants import DATABASE, RULESET
from parsers.abilities import parse_abilities
from parsers.armour import parse_armour
from parsers.ruleset import parse_ruleset


def parse_database():
    db = readxl(DATABASE)

    # TODO: WEAPONS
    abilities = parse_abilities(db)
    armour = parse_armour(db)
    fantasy = parse_ruleset(db, RULESET.FANTASY)
    dark_ages = parse_ruleset(db, RULESET.DARK_AGES)

    return {
        "abilities": abilities,
        "armour": armour,
        "ruleset": {
            "fantasy": fantasy,
            "dark_ages": dark_ages,
        },
    }

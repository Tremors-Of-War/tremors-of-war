from pylightxl import Database

from parsers.units import parse_units


def parse_factions_list(db: Database, ruleset):
    units = parse_units(db, ruleset)

    factions = {}
    for unit_id, unit in units.items():
        faction = unit['Faction']

        if faction not in factions:
            factions[faction] = {}

        factions[faction][unit_id] = unit

    return factions

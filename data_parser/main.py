from openpyxl.reader.excel import load_workbook
import pylightxl

from constants import RULESET
from parsers.abilities import parse_abilities
from parsers.armour import parse_armour
from parsers.baseline import parse_baseline_stats, parse_points_per_stats
from parsers.factions import parse_factions_list
from parsers.relations import parse_relations
from parsers.units import parse_units

DATABASE = "../Database.xlsx"


def parse_ruleset(db: pylightxl.Database, ruleset):
    baseline_stats = parse_baseline_stats(db, ruleset)
    points_per_stat = parse_points_per_stats(db, ruleset)
    factions_list = parse_factions_list(db, ruleset)

    # TODO: Determine cost of units
    units = parse_units(db, ruleset)


def main():
    db = pylightxl.readxl(DATABASE)

    abilities = parse_abilities(db)
    armour = parse_armour(db)

    fantasy = parse_ruleset(db, RULESET.FANTASY)

    # ssd = .keyrow("Baseline")
    # wb = load_workbook(filename=DATA_WORKBOOK)
    # test = wb['test']
    # print(test['A4'].value)


if __name__ == "__main__":
    main()

from pylightxl import Database

from constants import SHEETS, STAT_NAMES
from utils import join_pascal_snake_case


class BASELINE_SHEET:
    BASELINE = "Baseline"
    POINTS_PER_STAT = "Points_Per_Stat"


def load_stats(stat_array):
    return {
        STAT_NAMES.MOVEMENT: stat_array[0],
        STAT_NAMES.WEAPON_SKILL: stat_array[1],
        STAT_NAMES.BALLISTIC_SKILL: stat_array[2],
        STAT_NAMES.STRENGTH: stat_array[3],
        STAT_NAMES.TOUGHNESS: stat_array[4],
        STAT_NAMES.WOUNDS: stat_array[5],
        STAT_NAMES.INITIATIVE: stat_array[6],
        STAT_NAMES.ATTACKS: stat_array[7],
        STAT_NAMES.COOL: stat_array[8],
        STAT_NAMES.INTELLIGENCE: stat_array[9],
    }


def _baseline_sheet_name(ruleset):
    return join_pascal_snake_case(ruleset, SHEETS.BASELINE_STATS)


def _get_baseline_sheet(db: Database, ruleset):
    sheet_name = _baseline_sheet_name(ruleset)
    return db.ws(sheet_name)


def parse_baseline_stats(db: Database, ruleset):
    sheet = _get_baseline_sheet(db, ruleset)
    baseline_stats_row = sheet.keyrow(BASELINE_SHEET.BASELINE)
    return load_stats(baseline_stats_row[1:])


def parse_points_per_stats(db: Database, ruleset):
    sheet = _get_baseline_sheet(db, ruleset)
    points_per_stat_row = sheet.keyrow(BASELINE_SHEET.POINTS_PER_STAT)
    return load_stats(points_per_stat_row[1:])

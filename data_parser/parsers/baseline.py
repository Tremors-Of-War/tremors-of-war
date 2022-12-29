from pylightxl import Database

from constants import SHEETS, BASELINE_SHEET
from utils import join_pascal_snake_case, load_stats


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

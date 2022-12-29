from pylightxl import Database

from parsers.baseline import parse_baseline_stats, parse_points_per_stats
from parsers.factions import parse_factions_list
from parsers.units import parse_units


def parse_ruleset(db: Database, ruleset: object) -> object:
    return {
        "baseline_stats": parse_baseline_stats(db, ruleset),
        "points_per_stat": parse_points_per_stats(db, ruleset),
        "factions": parse_factions_list(db, ruleset),
        # TODO: Determine cost of units
        "units": parse_units(db, ruleset),
    }

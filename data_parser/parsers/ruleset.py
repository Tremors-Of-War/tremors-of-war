from pylightxl import Database

from parsers.baseline import parse_baseline_stats, parse_points_per_stats
from parsers.factions import parse_factions_list


class RULESET:
    FANTASY = "Fantasy"
    DARK_AGES = "Dark_Ages"


def parse_ruleset(db: Database, ruleset: object) -> object:
    return {
        "baseline_stats": parse_baseline_stats(db, ruleset),
        "points_per_stat": parse_points_per_stats(db, ruleset),
        "factions": parse_factions_list(db, ruleset),
    }


def parse_rulesets(db: Database) -> object:
    return {
        "fantasy": parse_ruleset(db, RULESET.FANTASY),
        "dark_ages": parse_ruleset(db, RULESET.DARK_AGES),
    }

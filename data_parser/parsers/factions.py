from pylightxl import Database

from constants import SHEETS


def _get_factions_sheet(db: Database):
    return db.ws(SHEETS.FACTIONS)


def parse_factions_list(db: Database, ruleset):
    sheet = _get_factions_sheet(db)
    factions_column = sheet.keycol(ruleset)
    return factions_column[1:]

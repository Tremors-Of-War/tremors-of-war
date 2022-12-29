from pylightxl import Database

from constants import SHEETS


def _get_abilities_sheet(db: Database):
    return db.ws(SHEETS.ABILITIES)


def parse_abilities(db: Database):
    pass

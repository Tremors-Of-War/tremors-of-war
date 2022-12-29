class SHEETS:
    BASELINE_STATS = "Baseline_Stats"
    MOUNTS = "Mounts"
    FACTIONS = "Factions"
    UNITS = "Units"
    ABILITIES = "Abilities"
    ARMOUR = "Armour"
    RELATIONS = "Relations"
    WEAPONS = "Weapons"
    WEAPON_TRAITS = "Weapon_Traits"


class BASELINE_SHEET:
    BASELINE = "Baseline"
    POINTS_PER_STAT = "Points_Per_Stat"


class RULESET:
    FANTASY = "Fantasy"
    DARK_AGES = "Dark_Ages"


class STAT_NAMES:
    MOVEMENT = "M"
    WEAPON_SKILL = "WS"
    BALLISTIC_SKILL = "BS"
    STRENGTH = "S"
    TOUGHNESS = "T"
    WOUNDS = "W"
    INITIATIVE = "I"
    ATTACKS = "A"
    COOL = "Cl"
    INTELLIGENCE = "Int"


STAT_HEADER_LIST = [
    STAT_NAMES.MOVEMENT,
    STAT_NAMES.WEAPON_SKILL,
    STAT_NAMES.BALLISTIC_SKILL,
    STAT_NAMES.STRENGTH,
    STAT_NAMES.TOUGHNESS,
    STAT_NAMES.WOUNDS,
    STAT_NAMES.INITIATIVE,
    STAT_NAMES.ATTACKS,
    STAT_NAMES.COOL,
    STAT_NAMES.INTELLIGENCE,
]

DATABASE = "../Database.xlsx"
OUTPUT_FILE = "../src/data.json"

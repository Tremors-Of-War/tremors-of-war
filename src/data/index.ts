import {
  Ability,
  AbilityId,
  Armour,
  ArmourId,
  FactionId,
  Mount,
  MountId,
  RuleSetId,
  Unit,
  UnitId,
  Weapon,
  WeaponId,
} from "./types";
import database from "./database.json";

export * from "./types";

// TODO: FIX UNITSBYFACTION

export const ruleSets = Object.keys(database.rulesets) as RuleSetId[];

export const factions = Object.keys(database.factions) as FactionId[];

export const unitsById = database.units as Record<UnitId, Unit>;

export const getUnitsByFaction = (factionId: FactionId) =>
  Object.values(database.factions[factionId]) as Unit[];

export const unitsList = Object.values(database.units) as Unit[];

export const mountsById = database.mounts as Record<MountId, Mount>;

export const mountsList = Object.values(database.mounts) as Mount[];

export const weaponsById = database.weapons as Record<WeaponId, Weapon>;

export const weaponsList = Object.values(database.weapons) as Weapon[];

export const armourById = database.armour as Record<ArmourId, Armour>;

export const armourList = Object.values(database.armour) as Armour[];

export const abilitiesById = database.abilities as Record<AbilityId, Ability>;

export const abilitiesList = Object.values(database.abilities) as Ability[];

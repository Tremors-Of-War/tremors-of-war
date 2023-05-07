import {
  AbilityId,
  ArmourId,
  FactionId,
  Mount,
  MountId,
  RuleSetId,
  Unit,
  UnitId,
  WeaponId,
} from "./types";
import database from "./database.json";

export * from "./types";

// TODO: DEFINE TYPES FOR WEAPON, ARMOUR, ABILITY
// TODO: FIX UNITSBYFACTION

export const ruleSets = Object.keys(database.rulesets) as RuleSetId[];

export const factions = Object.keys(database.factions) as FactionId[];

export const unitsById = database.units as Record<UnitId, Unit>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const unitsByFaction = database.factions as Record<FactionId, Unit>;

export const unitsList = Object.values(database.units) as Unit[];

export const mountsById = database.mounts as Record<MountId, Mount>;

export const mountsList = Object.values(database.mounts) as Mount[];

export const weaponsById = database.weapons as Record<WeaponId, object>;

export const weaponsList = Object.values(database.weapons) as object[];

export const armourById = database.armour as Record<ArmourId, object>;

export const armourList = Object.values(database.armour) as object[];

export const abilitiesById = database.abilities as Record<AbilityId, object>;

export const abilitiesList = Object.values(database.abilities) as object[];

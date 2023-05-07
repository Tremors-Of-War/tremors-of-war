import {AbilityId, ArmourId, FactionId, Mount, MountId, RuleSetId, Unit, UnitId, WeaponId} from "./types";
import database from "./database.json";

export * from "./types"

export const getRulesSets = () => Object.keys(database.rulesets) as RuleSetId[];

export const getFactions = () => Object.keys(database.factions) as FactionId[];

export const getUnitById = (id: UnitId) => database.units[id] as Unit;

export const getUnitsByFaction = (factionId: FactionId) =>
  Object.values(database.factions[factionId]) as Unit[];

export const getUnitList = () => Object.values(database.units);

export const getMountById = (id: MountId) => database.mounts[id] as Mount;

export const getMountList = () => Object.values(database.mounts);

export const getWeaponById = (id: WeaponId) => database.weapons[id];

export const getWeaponList = () => Object.values(database.weapons);

export const getArmourById = (id: ArmourId) => database.armour[id];

export const getArmourList = () => Object.values(database.armour);

export const getAbilityById= (id: AbilityId) => database.abilities[id];

export const getAbilityList = () => Object.values(database.abilities);

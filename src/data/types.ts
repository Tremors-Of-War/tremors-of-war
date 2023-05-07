import data from "./database.json";

export type RuleSetId = keyof typeof data.rulesets;
export type FactionId = keyof typeof data.factions;
export type WeaponId = keyof typeof data.weapons;
export type ArmourId = keyof typeof data.armour;
export type MountId = keyof typeof data.mounts;
export type AbilityId = keyof typeof data.abilities;
export type UnitId = keyof typeof data.units;

export interface Unit {
  faction: FactionId;
  name: string;
  id: UnitId;
  m: number;
  ws: number;
  bs: number;
  s: number;
  t: number;
  w: number;
  i: number;
  a: number;
  cl: number;
  int: number;
  cost: number;
  abilities: AbilityId[];
  primaryWeaponry: WeaponId[];
  secondaryWeaponry: WeaponId[];
  rangedWeaponry: WeaponId[];
  armour: ArmourId[];
  helmet: ArmourId[];
  upgrades: AbilityId[];
  mounts: MountId[];
}
export interface Mount {
  name: string;
  m: number;
  ws: number;
  bs: number;
  s: number;
  t: number;
  w: number;
  i: number;
  a: number;
  cl: number;
  int: number;
  cost: number;
  abilities: AbilityId[];
  primaryWeaponry: WeaponId[];
  armour: ArmourId[];
  upgrades: AbilityId[];
}

export interface Model {
  id: string;
  unit: Unit | null;
  cost: number;
  name: string;
  armour?: ArmourId;
  helmet?: ArmourId;
  upgrades: AbilityId[];
  mounts?: MountId;
  mountArmour?: ArmourId;
  mountUpgrade?: AbilityId;
  mountWeapon?: WeaponId;
  primaryWeaponry?: WeaponId;
  secondaryWeaponry?: WeaponId;
  rangedWeapon?: WeaponId;
  active: boolean;
}

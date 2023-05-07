import data from "./data.json";

export type RuleSet = keyof typeof data.rulesets;
export type FantasyFaction = keyof typeof data.rulesets.fantasy.factions;
export type DarkAgesFaction = keyof typeof data.rulesets.dark_ages.factions;
export type Faction = keyof typeof data.factions;

export type Weapons = keyof typeof data.weapons;
export type Armour = keyof typeof data.armour;
export type Mounts = keyof typeof data.mounts;
export type Abilities = keyof typeof data.abilities;

export interface Unit {
  faction: Faction;
  name: string;
  id: string;
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
  abilities: Abilities[];
  primaryWeaponry: Weapons[];
  secondaryWeaponry: Weapons[];
  rangedWeaponry: Weapons[];
  armour: Armour[];
  helmet: Armour[];
  upgrades: [];
  mounts: Mounts[];
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
  abilities: Abilities[];
  primaryWeaponry: Weapons[];
  armour: Armour[];
  upgrades: [];
}

export interface Model {
  id: string;
  unit: Unit | null;
  cost: number;
  name: string;
  armour?: Armour;
  helmet?: Armour;
  upgrades: Abilities[];
  mounts?: Mounts;
  mountArmour?: Armour;
  mountUpgrade?: Abilities;
  mountWeapon?: Weapons;
  primaryWeaponry?: Weapons;
  secondaryWeaponry?: Weapons;
  rangedWeapon?: Weapons;
  active: boolean;
}

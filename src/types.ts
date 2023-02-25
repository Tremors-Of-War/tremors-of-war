import data from "./data.json";

export type RuleSet = keyof typeof data.rulesets;
export type FantasyFaction = keyof typeof data.rulesets.fantasy.factions;
export type DarkAgesFaction = keyof typeof data.rulesets.dark_ages.factions;
export type Faction = FantasyFaction | DarkAgesFaction;

export type Weapons = keyof typeof data.weapons;
export type Armour = keyof typeof data.armour;
export type Mounts = keyof typeof data.mounts;
export type Abilities = keyof typeof data.abilities;

export interface Unit {
  faction: Faction;
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
  points: number;
  abilities: string[];
  weaponry: Weapons[];
  twoHandWeaponry: Weapons[];
  rangedWeaponry: Weapons[];
  armour: Armour[];
  shield: Armour[];
  upgrades: [];
  mounts: Mounts[];
}

export interface Model {
  unit: Unit;
  name: string;
}

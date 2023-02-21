import data from "./data.json";

export type RuleSet = keyof typeof data.rulesets;
export type FantasyFaction = keyof typeof data.rulesets.fantasy.factions;
export type DarkAgesFaction = keyof typeof data.rulesets.dark_ages.factions;
export type Faction = FantasyFaction | DarkAgesFaction;

export type Weapons = keyof typeof data.weapons;
export type Armour = keyof typeof data.armour;
export type Abilities = keyof typeof data.abilities;

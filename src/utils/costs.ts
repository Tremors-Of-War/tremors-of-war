/* eslint-disable import/prefer-default-export */
import data from "../data.json";

import { Model } from "../types";

const sumReducer = (acc: number, curr: number) => acc + curr;

export const calculateUpgradeCosts = (model: Model): number =>
  model.upgrades
    .map((upgradeId) => data.abilities[upgradeId].Cost)
    .reduce(sumReducer, 0);

export const calculateWeaponryCosts = (model: Model): number => {
  const costs = [
    model.secondaryWeaponry ? data.weapons[model.secondaryWeaponry].Cost : 0,
    model.primaryWeaponry ? data.weapons[model.primaryWeaponry].Cost : 0,
    model.rangedWeapon ? data.weapons[model.rangedWeapon].Cost : 0,
  ];
  return costs.reduce(sumReducer, 0);
};

export const calculateArmourCosts = (model: Model): number => {
  const costs = [
    model.armour ? data.armour[model.armour].Cost : 0,
    model.helmet ? data.armour[model.helmet].Cost : 0,
  ];
  return costs.reduce(sumReducer, 0);
};

export const calculateMountCosts = (model: Model): number => {
  const costs = [
    model.mounts ? data.mounts[model.mounts].cost : 0,
    model.mountArmour ? data.armour[model.mountArmour].Cost : 0,
    model.mountUpgrade ? data.abilities[model.mountUpgrade].Cost : 0,
    model.mountWeapon ? data.weapons[model.mountWeapon].Cost : 0,
  ];
  return costs.reduce(sumReducer, 0);
};
export const calculateModelCost = (model: Model): number => {
  const costs: number[] = [
    model.unit?.cost || 0,
    calculateMountCosts(model),
    calculateArmourCosts(model),
    calculateWeaponryCosts(model),
    calculateUpgradeCosts(model),
  ];
  return costs.reduce(sumReducer, 0);
};

export const calculateModelsCosts = (models: Model[]): number =>
  models.map((model) => calculateModelCost(model)).reduce(sumReducer, 0);

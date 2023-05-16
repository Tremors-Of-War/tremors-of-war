/* eslint-disable import/prefer-default-export */

import {
  abilitiesById,
  armourById,
  Model,
  mountsById,
  weaponsById,
} from "../data";

const sumReducer = (acc: number, curr: number) => acc + curr;

export const calculateUpgradeCosts = (model: Model): number =>
  model.upgrades
    .map((upgradeId) => abilitiesById[upgradeId].Cost)
    .reduce(sumReducer, 0);

export const calculateWeaponryCosts = (model: Model): number => {
  const costs = [
    model.secondaryWeaponry ? weaponsById[model.secondaryWeaponry].Cost : 0,
    model.primaryWeaponry ? weaponsById[model.primaryWeaponry].Cost : 0,
    model.rangedWeapon ? weaponsById[model.rangedWeapon].Cost : 0,
  ];
  return costs.reduce(sumReducer, 0);
};

export const calculateArmourCosts = (model: Model): number => {
  const costs = [
    model.armour ? armourById[model.armour].Cost : 0,
    model.helmet ? armourById[model.helmet].Cost : 0,
  ];
  return costs.reduce(sumReducer, 0);
};

export const calculateMountCosts = (model: Model): number => {
  const costs = [
    model.mounts ? mountsById[model.mounts].cost : 0,
    model.mountArmour ? armourById[model.mountArmour].Cost : 0,
    model.mountUpgrade ? abilitiesById[model.mountUpgrade].Cost : 0,
    model.mountWeapon ? weaponsById[model.mountWeapon].Cost : 0,
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

/* eslint-disable import/prefer-default-export */

import { armourById, Model } from "../data";

const sumReducer = (acc: number, curr: number) => acc + curr;

export const calculateArmourEffectOnR = (model: Model): number => {
  const costs = [
    model.armour ? armourById[model.armour]["Armour Effect vs R"] : 0,

    model.helmet ? armourById[model.helmet]["Armour Effect vs R"] : 0,

    model.secondaryWeaponry && model.secondaryWeaponry === "Shield" ? 1 : 0,
  ];
  return 11 - costs.reduce(sumReducer, 0);
};

export const calculateArmourEffectOnCC = (model: Model): number => {
  const costs = [
    model.armour ? armourById[model.armour]["Armour Effect vs CC"] : 0,

    model.helmet ? armourById[model.helmet]["Armour Effect vs CC"] : 0,
  ];
  return 11 - costs.reduce(sumReducer, 0);
};

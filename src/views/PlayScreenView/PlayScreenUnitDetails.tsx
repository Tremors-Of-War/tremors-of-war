import { Grid } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Model } from "../../types";
import PlayScreenUnitDetailsUnit from "./PlayScreenUnitDetailsUnit";
import PlayScreenUnitDetailsArmour from "./PlayScreenUnitDetailsArmour";
import PlayScreenUnitDetailsWeaponry from "./PlayScreenUnitDetailsWeaponry";
import PlayScreenUnitDetailsMount from "./PlayScreenUnitDetailsMount";
import PlayScreenUnitDetailsUpgrades from "./PlayScreenUnitDetailsUpgrades";

interface Props {
  model: Model;
}
const hasArmour = (model: Model) => {
  if (model.armour || model.shield || model.otherArmour || model.helmet) {
    return true;
  }
  return false;
};
const hasWeaponry = (model: Model) => {
  if (model.handWeapon || model.rangedWeapon || model.twoHandedWeapon) {
    return true;
  }
  return false;
};

const PlayScreenUnitDetails: FunctionComponent<Props> = ({ model }) => (
  <Grid container direction="column" gap="16px">
    <PlayScreenUnitDetailsUnit model={model} />
    {hasArmour(model) && (
      <PlayScreenUnitDetailsArmour
        armour={model.armour}
        shield={model.shield}
        otherArmour={model.otherArmour}
        helmet={model.helmet}
      />
    )}
    {hasWeaponry(model) && (
      <PlayScreenUnitDetailsWeaponry
        handWeapon={model.handWeapon}
        rangedWeapon={model.rangedWeapon}
        twoHandedWeapon={model.twoHandedWeapon}
      />
    )}
    {model?.mounts && <PlayScreenUnitDetailsMount mounts={model.mounts} />}
    {model?.upgrades && model.upgrades.length > 0 && (
      <PlayScreenUnitDetailsUpgrades upgrades={model.upgrades} />
    )}
  </Grid>
);
export default PlayScreenUnitDetails;

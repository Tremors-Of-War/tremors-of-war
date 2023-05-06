import { Grid } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Model } from "../../../types";
import PlayScreenUnit from "./PlayScreenUnit/PlayScreenUnit";
import PlayScreenArmour from "./PlayScreenArmour/PlayScreenArmour";
import PlayScreenWeaponry from "./PlayScreenWeaponry/PlayScreenWeaponry";
import PlayScreenMount from "./PlayScreenMount/PlayScreenMount";
import PlayScreenUpgrades from "./PlayScreenUpgrades/PlayScreenUpgrades";

interface Props {
  model: Model;
}
const hasArmour = (model: Model) => {
  if (model.armour || model.helmet) {
    return true;
  }
  return false;
};
const hasWeaponry = (model: Model) => {
  if (model.primaryWeaponry || model.rangedWeapon || model.secondaryWeaponry) {
    return true;
  }
  return false;
};

const PlayScreenModelDetails: FunctionComponent<Props> = ({ model }) => (
  <Grid container direction="column" gap="16px">
    <PlayScreenUnit model={model} />
    {hasArmour(model) && <PlayScreenArmour model={model} />}
    {hasWeaponry(model) && (
      <PlayScreenWeaponry
        primaryWeaponry={model.primaryWeaponry}
        rangedWeapon={model.rangedWeapon}
        secondaryWeaponry={model.secondaryWeaponry}
      />
    )}
    {model?.mounts && <PlayScreenMount model={model} />}
    {model?.upgrades && model.upgrades.length > 0 && (
      <PlayScreenUpgrades upgrades={model.upgrades} />
    )}
  </Grid>
);
export default PlayScreenModelDetails;

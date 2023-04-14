import { Grid } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Model } from "../../types";
import PlayScreenDetailsUnit from "./PlayScreenDetailsUnit";

interface Props {
  model: Model;
}
const hasArmour = (model: Model) => {
  if (model.armour || model.shield || model.otherArmour || model.helmet) {
    return true;
  }
  return false;
};
const PlayScreenUnitDetails: FunctionComponent<Props> = ({ model }) => {
  console.log(model);
  return (
    <Grid container direction="column">
      <PlayScreenDetailsUnit model={model} />
      {hasArmour(model) && <PlayScreenDetailsArmour />}
    </Grid>
  );
};
export default PlayScreenUnitDetails;

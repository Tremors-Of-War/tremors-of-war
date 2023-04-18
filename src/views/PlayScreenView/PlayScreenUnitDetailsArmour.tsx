import { Grid, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Model } from "../../types";
import PlayScreenArmourStats from "./PlayScreenArmourStats";
import ArmourSave from "../../components/ArmourSave";

interface Props {
  model: Model;
}

const PlayScreenUnitDetailsArmour: FunctionComponent<Props> = ({ model }) => (
  <Grid container direction="column">
    <Typography color="primary">ARMOUR</Typography>
    <Grid container direction="column">
      {model.armour && <PlayScreenArmourStats armour={model.armour} />}
      {model.shield && <PlayScreenArmourStats armour={model.shield} />}
      {model.helmet && <PlayScreenArmourStats armour={model.helmet} />}
      {model.otherArmour && (
        <PlayScreenArmourStats armour={model.otherArmour} />
      )}
      <Grid container justifyContent="flex-end">
        <ArmourSave model={model} />
      </Grid>
    </Grid>
  </Grid>
);
export default PlayScreenUnitDetailsArmour;

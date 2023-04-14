import { Grid, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Armour } from "../../types";
import PlayScreenArmourStats from "./PlayScreenArmourStats";

interface Props {
  armour?: Armour;
  shield?: Armour;
  helmet?: Armour;
  otherArmour?: Armour;
}

const PlayScreenUnitDetailsArmour: FunctionComponent<Props> = ({
  armour,
  shield,
  helmet,
  otherArmour
}) => (
  <Grid container direction="column">
    <Typography color="primary">ARMOUR</Typography>
    <Grid container direction="column">
      {armour && <PlayScreenArmourStats armour={armour} />}
      {shield && <PlayScreenArmourStats armour={shield} />}
      {helmet && <PlayScreenArmourStats armour={helmet} />}
      {otherArmour && <PlayScreenArmourStats armour={otherArmour} />}
    </Grid>
  </Grid>
);
export default PlayScreenUnitDetailsArmour;

import { Grid, Tooltip, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Model } from "../data";
import {
  calculateArmourEffectOnCC,
  calculateArmourEffectOnR,
} from "../utils/armourSaveCalculations";

export interface Props {
  model: Model;
}

const ArmourSave: FunctionComponent<Props> = ({ model }) => (
  <Grid
    container
    maxWidth="224px"
    direction="row"
    alignItems="center"
    justifyContent="flex-end"
    gap="16px"
  >
    <Grid color="primary.main" component={Typography}>
      ARMOUR SAVE:
    </Grid>
    <Grid
      container
      width="auto"
      justifyContent="flex-end"
      alignItems="center"
      direction="row"
    >
      <Grid width="40px" alignItems="center" justifyContent="center">
        <Grid component={Tooltip} title="Ranged">
          <Typography color="text.disabled">R</Typography>
        </Grid>
        <Grid component={Typography}>{calculateArmourEffectOnR(model)}+</Grid>
      </Grid>

      <Grid width="40px" justifyContent="center" alignItems="center">
        <Grid component={Tooltip} title="Close Combat">
          <Typography color="text.disabled">CC</Typography>
        </Grid>
        <Grid component={Typography}>{calculateArmourEffectOnCC(model)}+</Grid>
      </Grid>
    </Grid>
  </Grid>
);
export default ArmourSave;

import { Grid, Tooltip, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";

interface Props {
  tabValue: string;
}
const SetUnitFooter: FunctionComponent<Props> = ({ tabValue }) => (
  <Grid
    container
    direction="row"
    alignItems="center"
    minHeight="48px"
    justifyContent={
      tabValue === "mountTab" || tabValue === "upgradesTab"
        ? "flex-end"
        : "space-between"
    }
  >
    {(tabValue === "armourTab" || tabValue === "weaponryTab") && (
      <Grid
        container
        maxWidth="300px"
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        gap="16px"
      >
        <Grid color="text.disabled" component={Typography}>
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
            <Grid component={Typography}>10+</Grid>
          </Grid>

          <Grid width="40px" justifyContent="center" alignItems="center">
            <Grid component={Tooltip} title="Close Combat">
              <Typography color="text.disabled">CC</Typography>
            </Grid>
            <Grid component={Typography}>10+</Grid>
          </Grid>
        </Grid>
      </Grid>
    )}
    {tabValue !== "unitTab" && (
      <Grid container justifyContent="flex-end" maxWidth="300px">
        <Grid component={Typography} color="text.disabled">
          {tabValue.slice(0, -3).toUpperCase()} COST:&nbsp;
        </Grid>
        <Grid component={Typography}>555 POINTS</Grid>
      </Grid>
    )}
  </Grid>
);
export default SetUnitFooter;

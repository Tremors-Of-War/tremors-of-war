import { Grid, Tooltip, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Model } from "../../types";
import { TabOption } from "./tabs/types";
import {
  calculateArmourCosts,
  calculateMountCosts,
  calculateUpgradeCosts,
  calculateWeaponryCosts
} from "../../utils/costs";

interface Props {
  model: Model;
  tabValue: TabOption;
}

const getTabCost = (model: Model, tabValue: TabOption): number | null => {
  switch (tabValue) {
    case "weaponryTab":
      return calculateWeaponryCosts(model);
    case "mountTab":
      return calculateMountCosts(model);
    case "upgradesTab":
      return calculateUpgradeCosts(model);
    case "armourTab":
      return calculateArmourCosts(model);
    default:
      return null;
  }
};

const SetUnitFooter: FunctionComponent<Props> = ({ model, tabValue }) => {
  if (tabValue === "unitTab") return <></>;

  const showArmourSave = tabValue === "armourTab" || tabValue === "weaponryTab";
  const tabCost = getTabCost(model, tabValue);

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      minHeight="48px"
      justifyContent={!showArmourSave ? "flex-end" : "space-between"}
    >
      {showArmourSave && (
        <Tooltip title="Armour Save calculations in development!">
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
        </Tooltip>
      )}
      <Grid container justifyContent="flex-end" maxWidth="300px">
        <Grid component={Typography} color="text.disabled">
          {tabValue.slice(0, -3).toUpperCase()} COST:&nbsp;
        </Grid>
        <Grid component={Typography}>{tabCost} POINTS</Grid>
      </Grid>
    </Grid>
  );
};
export default SetUnitFooter;

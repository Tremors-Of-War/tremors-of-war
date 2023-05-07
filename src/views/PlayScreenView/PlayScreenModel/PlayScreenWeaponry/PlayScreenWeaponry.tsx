import { Grid, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { WeaponId } from "../../../../types";
import PlayScreenWeaponryStats from "./PlayScreenWeaponryStats";

interface Props {
  primaryWeaponry?: WeaponId;
  secondaryWeaponry?: WeaponId;
  rangedWeapon?: WeaponId;
}

const PlayScreenWeaponry: FunctionComponent<Props> = ({
  primaryWeaponry,
  rangedWeapon,
  secondaryWeaponry,
}) => (
  <Grid container direction="column">
    <Typography color="primary">WEAPONRY</Typography>
    <Grid container direction="column">
      {primaryWeaponry && <PlayScreenWeaponryStats weapon={primaryWeaponry} />}
      {rangedWeapon && <PlayScreenWeaponryStats weapon={rangedWeapon} />}
      {secondaryWeaponry && (
        <PlayScreenWeaponryStats weapon={secondaryWeaponry} />
      )}
    </Grid>
  </Grid>
);
export default PlayScreenWeaponry;

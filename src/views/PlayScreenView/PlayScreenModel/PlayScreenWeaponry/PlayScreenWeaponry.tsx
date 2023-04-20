import { Grid, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Weapons } from "../../../../types";
import PlayScreenWeaponryStats from "./PlayScreenWeaponryStats";

interface Props {
  twoHandedWeapon?: Weapons;
  handWeapon?: Weapons;
  rangedWeapon?: Weapons;
}

const PlayScreenWeaponry: FunctionComponent<Props> = ({
  twoHandedWeapon,
  rangedWeapon,
  handWeapon,
}) => (
  <Grid container direction="column">
    <Typography color="primary">WEAPONRY</Typography>
    <Grid container direction="column">
      {handWeapon && <PlayScreenWeaponryStats weapon={handWeapon} />}
      {rangedWeapon && <PlayScreenWeaponryStats weapon={rangedWeapon} />}
      {twoHandedWeapon && <PlayScreenWeaponryStats weapon={twoHandedWeapon} />}
    </Grid>
  </Grid>
);
export default PlayScreenWeaponry;

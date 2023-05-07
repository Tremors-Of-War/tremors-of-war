import { Grid, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Weapons } from "../../../../types";
import data from "../../../../data.json";
import WeaponryStats from "../../../../components/Weaponry/WeaponryStats";
import WeaponryTraits from "../../../../components/Weaponry/WeaponryTraits";

interface Props {
  weapon: Weapons;
}

const PlayScreenWeaponryStats: FunctionComponent<Props> = ({ weapon }) => {
  const weaponStats = data.weapons[weapon];
  return (
    <Grid
      container
      marginBottom="8px"
      padding="0px 16px"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="nowrap"
      gap="8px"
      direction="row"
      sx={{
        gap: "auto",
        minHeight: "56px",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.16) 100%), #121212",
        borderRadius: "4px",
      }}
    >
      <Grid container justifyContent="flex-start" width="152px">
        <Typography variant="body1">{weaponStats.Name}</Typography>
      </Grid>

      <Grid container justifyContent="flex-start" width="408px">
        <WeaponryStats weapon={weapon} />
      </Grid>
      <Grid
        container
        width="180px"
        justifyContent="flex-end"
        alignItems="center"
        direction="row"
        gap="8px"
      >
        <WeaponryTraits weapon={weapon} textSize="body2" />
      </Grid>
    </Grid>
  );
};
export default PlayScreenWeaponryStats;

import { Grid, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import theme from "../../../../app/theme";
import { Model } from "../../../../data";
import WeaponryStats from "../../../../components/Weaponry/WeaponryStats";
import WeaponryTraits from "../../../../components/Weaponry/WeaponryTraits";

interface Props {
  model: Model;
}

const PlayScreenMountWeapon: FunctionComponent<Props> = ({ model }) => (
  <>
    {model.mountWeapon && (
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        flexWrap="nowrap"
        marginBottom="8px"
        padding="8px 16px"
        direction="row"
        gap="24px"
        sx={{
          width: "100%",
          minHeight: theme.spacing(7),
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.16) 100%), #121212",
          borderRadius: "4px",
        }}
      >
        <Grid container direction="column" width="160px">
          <Typography variant="caption" sx={{ color: "text.disabled" }}>
            Weapon
          </Typography>

          <Typography>{model.mountWeapon}</Typography>
        </Grid>
        <Grid container width="400px" justifyContent="flex-start">
          <WeaponryStats weapon={model.mountWeapon} />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          width="116px"
        >
          <WeaponryTraits weapon={model.mountWeapon} textSize="body2" />
        </Grid>
      </Grid>
    )}
  </>
);
export default PlayScreenMountWeapon;

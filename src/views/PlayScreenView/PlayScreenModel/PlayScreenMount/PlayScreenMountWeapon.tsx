import { Grid, Typography, Tooltip } from "@mui/material";
import React, { FunctionComponent } from "react";
import theme from "../../../../app/theme";
import { Model } from "../../../../types";
import SetUnitWeaponryStats from "../../../SetUnitView/SetUnitWeaponry/SetUnitWeaponryStats";
import data from "../../../../data.json";

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
          <SetUnitWeaponryStats weapon={model.mountWeapon} />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          width="116px"
        >
          {data.weapons[model.mountWeapon].Traits.map((trait, i, arr) => (
            <Tooltip key={i} title={data.abilities[trait].Effects}>
              <Typography variant="body1">
                {trait}
                {i !== arr.length - 1 ? "," : ""}&nbsp;
              </Typography>
            </Tooltip>
          ))}
        </Grid>
      </Grid>
    )}
  </>
);
export default PlayScreenMountWeapon;

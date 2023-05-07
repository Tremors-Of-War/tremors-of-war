import { Grid, Tooltip, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import data from "../../data.json";
import { WeaponId } from "../../types";

interface Props {
  weapon: WeaponId;
  textSize: any;
}

const WeaponryStats: FunctionComponent<Props> = ({ weapon, textSize }) => (
  <Grid container direction="row" justifyContent="flex-end">
    {data.weapons[weapon].Traits.map((trait, i, arr) => (
      <Tooltip key={i} title={data.abilities[trait].Effects}>
        <Typography variant={textSize}>
          {trait}
          {i !== arr.length - 1 ? "," : ""}&nbsp;
        </Typography>
      </Tooltip>
    ))}
  </Grid>
);
export default WeaponryStats;

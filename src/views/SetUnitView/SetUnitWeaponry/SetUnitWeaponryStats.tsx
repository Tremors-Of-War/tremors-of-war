import { Grid, Tooltip, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Weapons } from "../../../types";
import data from "../../../data.json";

interface Props {
  weapon: Weapons;
}
const header = [
  { title: "RS", description: "Range Short" },
  { title: "RL", description: "Range Long" },
  { title: "AS", description: "Accuracy Short" },
  { title: "AL", description: "Accuracy Long" },
  { title: "S", description: "S" },
  { title: "AP", description: "AP" },
  { title: "D", description: "D" },
];

const SetUnitWeaponryStats: FunctionComponent<Props> = ({ weapon }) => {
  const { RS, RL, AS, AL, S, AP, D } = data.weapons[weapon];
  const stats = [RS, RL, AS, AL, S, AP, D];
  return (
    <Grid container direction="column">
      <Grid container direction="row" justifyContent="space-between">
        {header.map(({ title, description }) => (
          <Grid container justifyContent="center" width="27px" key={title}>
            <Tooltip title={description}>
              <Typography color="text.disabled" variant="body2">
                {title}
              </Typography>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
      <Grid container direction="row" justifyContent="space-between">
        {stats.map((stat, index) => (
          <Grid container justifyContent="center" width="27px" key={index}>
            {stat !== 0 && <Typography variant="body2">{stat}</Typography>}
            {stat === 0 && (
              <Typography color="text.disabled" variant="body2">
                -
              </Typography>
            )}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
export default SetUnitWeaponryStats;

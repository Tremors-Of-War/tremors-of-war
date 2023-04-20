import { Grid, Tooltip, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Mounts } from "../../../types";
import data from "../../../data.json";

interface Props {
  mounts: Mounts;
}
const header = [
  { title: "M", description: "Movement" },
  { title: "WS", description: "Weapon Skill" },
  { title: "BS", description: "Ballistic Skill" },
  { title: "S", description: "Strength" },
  { title: "T", description: "Toughness" },
  { title: "W", description: "Wounds" },
  { title: "I", description: "Initiative" },
  { title: "A", description: "Attacks" },
  { title: "CL", description: "Cool" },
  { title: "INT", description: "Intelligence" },
];
const SetUnitMountsStats: FunctionComponent<Props> = ({ mounts }) => {
  const { M, WS, BS, S, T, W, I, A, Cl, Int } = data.mounts[mounts];
  const stats = [M, WS, BS, S, T, W, I, A, Cl, Int];
  return (
    <Grid
      container
      justifyContent="flex-start"
      width="512px"
      paddingRight="32px"
    >
      <Grid container direction="column">
        <Grid container direction="row" justifyContent="space-between">
          {header.map(({ title, description }) => (
            <Grid container justifyContent="center" width="27px" key={title}>
              <Tooltip title={description}>
                <Typography color="text.disabled" variant="body1">
                  {title}
                </Typography>
              </Tooltip>
            </Grid>
          ))}
        </Grid>
        <Grid container direction="row" justifyContent="space-between">
          {stats.map((stat, index) => (
            <Grid container justifyContent="center" width="27px" key={index}>
              {stat !== 0 && <Typography variant="body1">{stat}</Typography>}
              {stat === 0 && (
                <Typography color="text.disabled" variant="body2">
                  -
                </Typography>
              )}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default SetUnitMountsStats;

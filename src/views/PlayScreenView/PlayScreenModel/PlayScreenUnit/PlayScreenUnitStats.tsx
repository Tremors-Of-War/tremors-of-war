import { Grid, Tooltip, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Unit } from "../../../../types";

interface Props {
  unit: Unit;
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
const PlayScreenUnitStats: FunctionComponent<Props> = ({ unit }) => {
  const { m, ws, bs, s, t, w, i, a, cl, int } = unit;
  const stats = [m, ws, bs, s, t, w, i, a, cl, int];

  return (
    <Grid
      container
      justifyContent="flex-start"
      width="424px"
      paddingRight="32px"
    >
      <Grid container direction="column">
        <Grid container direction="row" justifyContent="space-between">
          {header.map(({ title, description }) => (
            <Grid container justifyContent="center" width="16px" key={title}>
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
            <Grid container justifyContent="center" width="16px" key={index}>
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
    </Grid>
  );
};
export default PlayScreenUnitStats;

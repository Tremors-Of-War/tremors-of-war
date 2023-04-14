import { Grid, Tooltip, Typography } from "@mui/material";
import React from "react";

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

const SetUnitUnitHeader = () => (
  <Grid
    container
    alignItems="center"
    justifyContent="space-between"
    flexWrap="nowrap"
    padding="8px 16px"
    marginBottom="8px"
    direction="row"
    sx={{
      width: "100%",
      gap: "auto",
      height: "auto",
    }}
  >
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      width="120px"
    >
      <Typography variant="body1">Unit</Typography>
    </Grid>

    <Grid
      container
      direction="row"
      justifyContent="space-between"
      width="410px"
    >
      {header.map(({ title, description }) => (
        <Grid container justifyContent="flex-start" width="27px" key={title}>
          <Tooltip title={description}>
            <Typography variant="body1">{title}</Typography>
          </Tooltip>
        </Grid>
      ))}
    </Grid>

    <Grid
      container
      direction="column"
      justifyContent="flexs-start"
      width="143px"
    >
      <Typography variant="body1">Abilities</Typography>
    </Grid>
  </Grid>
);
export default SetUnitUnitHeader;

import { Grid, Tooltip, Typography } from "@mui/material";
import React from "react";

const SetUnitUnitHeader = () => (
  <Grid
    container
    alignItems="center"
    justifyContent="space-around"
    flexWrap="nowrap"
    padding="8px 16px"
    marginBottom="8px"
    direction="row"
    sx={{
      width: "100%",
      gap: "42px",
      height: "auto"
    }}
  >
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      width="410px"
    >
      <Typography variant="body1">Unit</Typography>
    </Grid>

    <Grid container direction="row" justifyContent="space-between">
      <Tooltip title="M">
        <Typography variant="body1">M</Typography>
      </Tooltip>
      <Tooltip title="M">
        <Typography variant="body1">WS</Typography>
      </Tooltip>
      <Tooltip title="M">
        <Typography variant="body1">BS</Typography>
      </Tooltip>
      <Tooltip title="M">
        <Typography variant="body1">S</Typography>
      </Tooltip>
      <Tooltip title="M">
        <Typography variant="body1">T</Typography>
      </Tooltip>
      <Tooltip title="M">
        <Typography variant="body1">W</Typography>
      </Tooltip>
      <Tooltip title="M">
        <Typography variant="body1">I</Typography>
      </Tooltip>
      <Tooltip title="M">
        <Typography variant="body1">A</Typography>
      </Tooltip>
      <Tooltip title="M">
        <Typography variant="body1">CL</Typography>
      </Tooltip>
      <Tooltip title="M">
        <Typography variant="body1">INT</Typography>
      </Tooltip>
    </Grid>

    <Grid container direction="column" justifyContent="flexs-start" xs={4}>
      <Typography variant="body1">Abilities</Typography>
    </Grid>
  </Grid>
);
export default SetUnitUnitHeader;

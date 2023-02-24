import { Grid, Typography } from "@mui/material";
import React from "react";

const SetUnitUnit = () => (
  <Grid
    container
    marginBottom="16px"
    alignItems="center"
    justifyContent="space-around"
    flexWrap="nowrap"
    padding="8px 16px"
    direction="row"
    sx={(theme) => ({
      width: "100%",
      gap: "auto",
      minHeight: theme.spacing(9),
      background:
        "linear-gradient(180deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.11) 100%), #121212",
      borderRadius: "4px"
    })}
  >
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      width="143px"
    >
      <Typography variant="body1">KNIGHT</Typography>
      <Typography variant="body1" sx={{ color: "text.disabled" }}>
        230 Points
      </Typography>
    </Grid>

    <Grid
      container
      direction="row"
      justifyContent="space-between"
      width="410px"
    >
      <Grid component={Typography} width="27px" variant="body1">
        8
      </Grid>
      <Grid component={Typography} width="27px" variant="body1">
        6
      </Grid>
      <Grid component={Typography} width="27px" variant="body1">
        7
      </Grid>
      <Grid component={Typography} width="27px" variant="body1">
        5
      </Grid>
      <Grid component={Typography} width="27px" variant="body1">
        3
      </Grid>
      <Grid component={Typography} width="27px" variant="body1">
        0
      </Grid>
      <Grid component={Typography} width="27px" variant="body1">
        9
      </Grid>
      <Grid component={Typography} width="27px" variant="body1">
        9
      </Grid>
      <Grid component={Typography} width="27px" variant="body1">
        1
      </Grid>
      <Grid component={Typography} width="27px" variant="body1">
        1
      </Grid>
    </Grid>

    <Grid
      container
      direction="column"
      justifyContent="flexs-start"
      width="143px"
    >
      {/* MAP FUNCTION */}
      <Typography variant="caption">&#8226; Hit and Run Specialist</Typography>
      <Typography variant="caption">&#8226; Strength in Numbers</Typography>
    </Grid>
  </Grid>
);
export default SetUnitUnit;

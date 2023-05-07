import { Grid, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import theme from "../../../../app/theme";
import { AbilityId } from "../../../../types";
import data from "../../../../data.json";

interface Props {
  upgrades: AbilityId[];
}

const PlayScreenUpgrades: FunctionComponent<Props> = ({ upgrades }) => (
  <Grid container direction="column">
    <Typography color="primary">UPGRADES</Typography>
    {upgrades.map((upgrade) => (
      <Grid
        container
        marginBottom="8px"
        padding="8px 16px"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="nowrap"
        direction="row"
        key={upgrade}
        sx={{
          gap: "auto",
          minHeight: theme.spacing(7),
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.16) 100%), #121212",
          borderRadius: "4px",
        }}
      >
        <Grid container direction="column" maxWidth="196px">
          <Typography variant="body1">{upgrade}</Typography>
        </Grid>
        <Grid container justifyContent="flex-start" width="488px">
          <Grid component={Typography} variant="caption">
            {" "}
            {data.abilities[upgrade].Effects}
          </Grid>
        </Grid>
      </Grid>
    ))}
  </Grid>
);
export default PlayScreenUpgrades;

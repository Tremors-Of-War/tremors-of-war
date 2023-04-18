import { Grid, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import theme from "../../../../app/theme";
import { Mounts } from "../../../../types";
import PlayScreenMountStats from "./PlayScreenMountStats";

interface Props {
  mounts: Mounts;
}

const PlayScreenMount: FunctionComponent<Props> = ({ mounts }) => (
  <Grid container direction="column">
    <Typography color="primary">MOUNT</Typography>
    <Grid
      container
      marginBottom="8px"
      padding="0px 16px"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="nowrap"
      direction="row"
      sx={{
        gap: "auto",
        minHeight: theme.spacing(7),
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.16) 100%), #121212",
        borderRadius: "4px"
      }}
    >
      <Grid container direction="column" maxWidth="196px">
        <Typography variant="body1">{mounts}</Typography>
      </Grid>

      <PlayScreenMountStats mounts={mounts} />
    </Grid>
  </Grid>
);
export default PlayScreenMount;

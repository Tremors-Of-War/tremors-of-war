import { Grid, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import theme from "../../app/theme";
import { Model } from "../../types";
import PlayScreenUnitStats from "./PlayScreenUnitStats";

interface Props {
  model: Model;
}

const PlayScreenUnitDetailsUnit: FunctionComponent<Props> = ({ model }) => (
  <Grid container direction="column">
    <Typography color="primary">UNIT</Typography>
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
      <Grid container direction="column" maxWidth="250px">
        {model.unit?.name && (
          <Typography variant="body1">{model.unit.name}</Typography>
        )}
      </Grid>

      {model?.unit && <PlayScreenUnitStats unit={model.unit} />}
    </Grid>
  </Grid>
);
export default PlayScreenUnitDetailsUnit;

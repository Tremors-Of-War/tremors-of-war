import { Grid, Tooltip, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import theme from "../../app/theme";
import { Model } from "../../types";
import PlayScreenUnitStats from "./PlayScreenUnitStats";
import data from "../../data.json";

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
        gap: "8px",
        minHeight: theme.spacing(7),
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.16) 100%), #121212",
        borderRadius: "4px"
      }}
    >
      <Grid container direction="column" maxWidth="150px">
        {model.unit?.name && (
          <Typography variant="body1">{model.unit.name}</Typography>
        )}
      </Grid>

      {model?.unit && (
        <>
          <PlayScreenUnitStats unit={model.unit} />
          <Grid
            container
            direction="column"
            justifyContent="flexs-start"
            width="143px"
            margin="8px 0px"
          >
            {model.unit.abilities.map((ability) => (
              <Tooltip key={ability} title={data.abilities[ability].Effects}>
                <Typography variant="caption">&#8226; {ability}</Typography>
              </Tooltip>
            ))}
          </Grid>
        </>
      )}
    </Grid>
  </Grid>
);
export default PlayScreenUnitDetailsUnit;

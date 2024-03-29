import { Grid, Tooltip, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import theme from "../../../../app/theme";
import { abilitiesById, Model } from "../../../../data";
import MountUnitStats from "../../../../components/MountUnitStats";

interface Props {
  model: Model;
}

const PlayScreenUnit: FunctionComponent<Props> = ({ model }) => (
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
        borderRadius: "4px",
      }}
    >
      <Grid container direction="column" maxWidth="160px">
        {model.unit?.name && (
          <Typography variant="body1">{model.unit.name}</Typography>
        )}
      </Grid>

      {model?.unit && (
        <>
          <MountUnitStats data={model.unit} textSize="body2" />
          <Grid
            container
            direction="column"
            justifyContent="flexs-start"
            width="156px"
            margin="8px 0px"
          >
            {model.unit.abilities.map((ability) => (
              <Tooltip key={ability} title={abilitiesById[ability].Effects}>
                <Typography variant="caption">&#8226; {ability}</Typography>
              </Tooltip>
            ))}
          </Grid>
        </>
      )}
    </Grid>
  </Grid>
);
export default PlayScreenUnit;

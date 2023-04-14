import { Grid, Tooltip, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import theme from "../../app/theme";
import { Unit } from "../../types";
import data from "../../data.json";

interface Props {
  unit: Unit;
  handleClick: () => void;
  isSelected: boolean;
}

const SetUnitUnit: FunctionComponent<Props> = ({
  unit,
  handleClick,
  isSelected
}) => {
  const defaultBackground =
    "linear-gradient(180deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.11) 100%), #121212";
  const selectedBackground = theme.palette.primary.main;
  const { m, ws, bs, s, t, w, i, a, cl, int } = unit;
  const stats = [m, ws, bs, s, t, w, i, a, cl, int];
  return (
    <Grid
      onClick={handleClick}
      container
      marginBottom="16px"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="nowrap"
      padding="8px 16px"
      direction="row"
      sx={{
        width: "100%",
        gap: "auto",
        minHeight: theme.spacing(9),
        background: isSelected ? selectedBackground : defaultBackground,
        borderRadius: "4px"
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        wrap="wrap"
        width="125px"
      >
        <Typography variant="body1">{unit.name}</Typography>
        <Typography variant="body1" sx={{ color: "text.disabled" }}>
          {unit.points} Points
        </Typography>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="space-between"
        width="410px"
      >
        {stats.map((statValue, index) => (
          <Grid key={index} component={Typography} width="27px" variant="body1">
            {statValue}
          </Grid>
        ))}
      </Grid>

      <Grid
        container
        direction="column"
        justifyContent="flexs-start"
        width="143px"
      >
        {unit.abilities.map((ability) => (
          <Tooltip key={ability} title={data.abilities[ability].Effects}>
            <Typography variant="caption">&#8226; {ability}</Typography>
          </Tooltip>
        ))}
      </Grid>
    </Grid>
  );
};
export default SetUnitUnit;

import { Grid, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import theme from "../../app/theme";
import { Model } from "../../types";

interface Props {
  model: Model;
}

const AddUnitUnit: FunctionComponent<Props> = ({ model }) => {
  // const defaultBackground =
  //   "linear-gradient(180deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.11) 100%), #121212";
  // const selectedBackground = theme.palette.primary.main;
  // const { m, ws, bs, s, t, w, i, a, cl, int } = unit;
  // const stats = [m, ws, bs, s, t, w, i, a, cl, int];

  console.log(model);
  return (
    <Grid
      // onClick={handleClick}
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
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.11) 100%), #121212",
        // background: isSelected ? selectedBackground : defaultBackground,
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
        {model.name && <Typography variant="body1">{model.name}</Typography>}
        {model?.unit?.name && (
          <Typography variant="body1">{model.unit.name}</Typography>
        )}
        {model.cost && <Typography variant="body1">{model.cost}</Typography>}
      </Grid>
    </Grid>
  );
};
export default AddUnitUnit;

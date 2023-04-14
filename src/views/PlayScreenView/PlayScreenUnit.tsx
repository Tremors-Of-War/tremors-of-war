import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Button,
  Typography
} from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import theme from "../../app/theme";
import { Model } from "../../types";
import PlayScreenUnitDetails from "./PlayScreenUnitDetails";

interface Props {
  model: Model;
}
const defaultBackground =
  "linear-gradient(180deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.11) 100%), #121212";
const selectedBackground =
  "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.5) 100%)";

const PlayScreenUnit: FunctionComponent<Props> = ({ model }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <Grid
      component={Accordion}
      container
      onChange={(e, expanded) => {
        setIsExpanded(expanded);
      }}
      marginTop="8px"
      marginBottom="8px"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="nowrap"
      direction="column"
      sx={{
        gap: "auto",
        minHeight: theme.spacing(9),
        background: isExpanded ? selectedBackground : defaultBackground,
        borderRadius: "4px",
        ".MuiCollapse-root": { width: "100%" }
      }}
    >
      <Grid
        component={AccordionSummary}
        expandIcon={<ExpandMoreIcon />}
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid container direction="column" width="250px">
          {model.name && (
            <Typography color="primary" variant="body1">
              {model.name}
            </Typography>
          )}
          {model?.unit?.name && (
            <Typography color="text.disabled" variant="body1">
              {model.unit.name}
            </Typography>
          )}
        </Grid>
      </Grid>
      <Grid component={AccordionDetails} marginBottom="16px">
        <PlayScreenUnitDetails model={model} />
      </Grid>
      <Grid container justifyContent="flex-end">
        <Button sx={{margin:"16px 16px"}} variant="contained">
          kill
        </Button>
      </Grid>
    </Grid>
  );
};
export default PlayScreenUnit;

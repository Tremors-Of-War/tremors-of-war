import React, { FunctionComponent } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Faction, Model } from "../types";
import { calculateModelsCosts } from "../utils/costs";

interface Props {
  faction: Faction;
  warbandTotal: number;
  onClickAdd: () => void;
  models: Model[];
}

const AddUnitViewHeader: FunctionComponent<Props> = ({
  onClickAdd,
  faction,
  warbandTotal,
  models,
}) => {
  const modelCosts = calculateModelsCosts(models);
  const pointsRemaining = warbandTotal - modelCosts;
  return (
    <Grid container direction="column" justifyContent="flex-start">
      <Grid container justifyContent="space-between" gap="8px">
        <Box>
          <Typography variant="h3">{faction}</Typography>
        </Box>
        <Grid
          container
          gap="8px"
          direction="column"
          alignItems="flex-end"
          justifyContent="flex-end"
        >
          <Box>
            <Button
              startIcon={<AddIcon />}
              variant="contained"
              size="large"
              onClick={onClickAdd}
            >
              ADD UNIT
            </Button>
          </Box>
          <Grid
            container
            direction="column"
            alignItems="flex-end"
            justifyContent="flex-end"
          >
            <Tooltip title="Current Unit Cost">
              <Typography color="secondary" variant="subtitle1">
                Total Cost: {modelCosts}/{warbandTotal}
              </Typography>
            </Tooltip>
            <Tooltip title="Remaining Warband Points">
              <Typography
                sx={{
                  color: "text.disabled",
                }}
                variant="subtitle2"
              >
                {pointsRemaining} Points Remaining
              </Typography>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddUnitViewHeader;

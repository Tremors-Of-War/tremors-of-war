import React, { FunctionComponent } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { FactionId, Model } from "../../../types";
import { calculateModelsCosts } from "../../../utils/costs";

interface Props {
  faction: FactionId;
  warbandTotal: number;
  onClickAdd: () => void;
  models: Model[];
}

const AddUnitsViewHeader: FunctionComponent<Props> = ({
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
          <Typography variant="h3">{faction.replace(/_/g, " ")}</Typography>
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
            <Grid container direction="row" alignItems="flex-end">
              <Grid
                component={Typography}
                color="secondary"
                variant="subtitle1"
              >
                Total Cost: {modelCosts.toLocaleString("en-US")}
              </Grid>
              <Grid
                component={Typography}
                color="text.disabled"
                variant="subtitle1"
              >
                &nbsp;/{warbandTotal.toLocaleString("en-US")}
              </Grid>
            </Grid>

            <Tooltip title="Remaining Warband Points">
              <Typography
                sx={(theme) => ({
                  color:
                    pointsRemaining < 0
                      ? theme.palette.error.main
                      : "text.disabled",
                })}
                variant="subtitle2"
              >
                {pointsRemaining.toLocaleString("en-US")} Points Remaining
              </Typography>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddUnitsViewHeader;

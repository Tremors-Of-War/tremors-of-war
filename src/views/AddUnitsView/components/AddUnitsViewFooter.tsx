import React, { FunctionComponent } from "react";
import { Button, Grid } from "@mui/material";

interface Props {
  onClickBack?: () => void;
  onClickRestart?: () => void;
  onClickEditWarbandTotal: () => void;
  onClickPlay?: () => void;
}

const AddUnitsViewFooter: FunctionComponent<Props> = ({
  onClickBack,
  onClickRestart,
  onClickEditWarbandTotal,
  onClickPlay,
}) => (
  <Grid
    container
    alignItems="center"
    justifyContent="space-between"
    wrap="nowrap"
  >
    {onClickBack && (
      <Button variant="outlined" onClick={onClickBack}>
        BACK
      </Button>
    )}
    {onClickRestart && (
      <Button variant="outlined" onClick={onClickRestart}>
        RESTART
      </Button>
    )}
    <Grid container direction="row" justifyContent="flex-end" gap="10px">
      <Button onClick={onClickEditWarbandTotal} variant="outlined">
        EDIT WARBAND TOTAL
      </Button>
      {onClickPlay && (
        <Button variant="contained" onClick={onClickPlay}>
          PLAY
        </Button>
      )}
    </Grid>
  </Grid>
);

export default AddUnitsViewFooter;

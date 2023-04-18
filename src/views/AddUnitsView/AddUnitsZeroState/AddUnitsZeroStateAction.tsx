import { Button, Grid, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import AddIcon from "@mui/icons-material/Add";

export interface Props {
  onClickAdd: () => void;
}

const AddUnitsZeroStateAction: FunctionComponent<Props> = ({ onClickAdd }) => (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap="10px"
      paddingBottom="112px"
      sx={{ height: "100%", width: "100%" }}
    >
      <Typography>You do not have any units.</Typography>
      <Button
        size="large"
        startIcon={<AddIcon />}
        onClick={onClickAdd}
        variant="contained"
      >
        Add Unit
      </Button>
    </Grid>
  );

export default AddUnitsZeroStateAction;

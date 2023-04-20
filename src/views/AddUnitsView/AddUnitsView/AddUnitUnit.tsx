import { Grid, IconButton, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import theme from "../../../app/theme";
import { Model } from "../../../types";

interface Props {
  model: Model;
  onDelete: (modelId: string) => void;
  onEdit: (modelId: string) => void;
}

const AddUnitUnit: FunctionComponent<Props> = ({ model, onDelete, onEdit }) => (
  <Grid
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
        "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.16) 100%), #121212",

      borderRadius: "4px",
    }}
  >
    <Grid
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

      <Grid
        container
        direction="row"
        width="204px"
        justifyContent="flex-end"
        gap="8px"
      >
        {model.cost && (
          <Grid
            container
            alignItems="center"
            justifyContent="flex-end"
            width="100px"
          >
            <Grid component={Typography} variant="body1">
              {model.cost} Points
            </Grid>
          </Grid>
        )}
        <IconButton onClick={() => onEdit(model.id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(model.id)}>
          <DeleteIcon color="secondary" />
        </IconButton>
      </Grid>
    </Grid>
  </Grid>
);
export default AddUnitUnit;

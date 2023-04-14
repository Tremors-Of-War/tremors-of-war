import React, { FunctionComponent } from "react";
import {
  Button,
  Typography,
  Box,
  Tooltip,
  List,
  Collapse
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import AddIcon from "@mui/icons-material/Add";
import { TransitionGroup } from "react-transition-group";
import ContentContainer from "../../components/ContentContainer";
import ChooseWarBandTotalDialog from "../../components/ChooseWarBandTotalDialog";
import { Faction } from "../../types";
import AddUnitUnit from "./AddUnitUnit";
import RestartConfirmationDialog from "../../components/RestartConfirmationDialog";

interface Props {
  faction: Faction;
  warbandTotal: number;
  onClickRestart: () => void;
  onClickPlay: () => void;
  onClickAdd: () => void;
  onDelete: (modelId: string) => void;
  models: models;
  onEdit: (modelId: string) => void;
  setWarbandTotal: (warbandTotal: number) => void;
}

const AddUnitsView: FunctionComponent<Props> = ({
  faction,
  warbandTotal,
  setWarbandTotal,
  onClickRestart,
  onClickAdd,
  onDelete,
  onClickPlay,
  onEdit,
  models
}) => {
  const [open, setOpen] = React.useState(true);
  const [openRestartAlert, setOpenRestartAlert] =
    React.useState<boolean>(false);

  const handleClose = (value: number) => {
    setOpen(!open);
    setWarbandTotal(value);
  };

  const modelArr = Object.entries(models);

  return (
    <>
      <ContentContainer>
        <Grid
          container
          flexWrap="nowrap"
          direction="column"
          justifyContent="space-between"
          height="100%"
        >
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
                      Total Cost: {warbandTotal}
                    </Typography>
                  </Tooltip>
                  <Tooltip title="Remaining Warband Points">
                    <Typography
                      sx={{
                        color: "text.disabled"
                      }}
                      variant="subtitle2"
                    >
                      100 Points Remaining
                    </Typography>
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              container
              marginTop="16px"
              justifyContent="flex-start"
              maxWidth="6200px"
              maxHeight="496px"
              sx={{
                overflowX: "hidden",
                overflowY: "scroll",
                "::-webkit-scrollbar": {
                  display: "none"
                }
              }}
            >
              <List sx={{ width: "100%" }}>
                <TransitionGroup>
                  {modelArr.map((model) => (
                    <Collapse key={model[0]}>
                      <AddUnitUnit
                        model={model[1]}
                        onEdit={onEdit}
                        onDelete={onDelete}
                      />
                    </Collapse>
                  ))}
                </TransitionGroup>
              </List>
            </Grid>
          </Grid>
          <Grid container alignItems="center" justifyContent="space-between">
            <Button
              variant="outlined"
              onClick={() => {
                setOpenRestartAlert(true);
              }}
            >
              RESTART
            </Button>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              gap="10px"
            >
              <Button onClick={() => setOpen(!open)} variant="outlined">
                EDIT WARBAND TOTAL
              </Button>
              <Button variant="contained" onClick={onClickPlay}>
                PLAY
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </ContentContainer>
      <ChooseWarBandTotalDialog
        open={!open}
        warbandTotal={warbandTotal}
        onClose={handleClose}
      />
      <RestartConfirmationDialog
        open={openRestartAlert}
        onClickRestart={onClickRestart}
        onClose={() => setOpenRestartAlert(false)}
      />
    </>
  );
};

export default AddUnitsView;

import React, { FunctionComponent } from "react";
import { Button, Typography, Box, Tooltip } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import AddIcon from "@mui/icons-material/Add";
import ContentContainer from "../../components/ContentContainer";
import ChooseWarBandTotalDialog from "../../components/ChooseWarBandTotalDialog";
import { Faction } from "../../types";
import AddUnitUnit from "./AddUnitUnit";

interface Props {
  faction: Faction;
  warbandTotal: number;
  onClickBack: () => void;
  onClickPlay: () => void;
  onClickAdd: () => void;
  models: models;
  tempFunc: () => void;
  setWarbandTotal: (warbandTotal: number) => void;
}

const AddUnitsView: FunctionComponent<Props> = ({
  faction,
  warbandTotal,
  setWarbandTotal,
  onClickBack,
  onClickAdd,
  onClickPlay,
  tempFunc,
  models
}) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = (value: number) => {
    setOpen(!open);
    setWarbandTotal(value);
  };

  const modelArr = Object.entries(models);
  console.log(modelArr);
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
          <Grid
            container
            justifyContent="space-between"
            gap="8px"
            sx={{ marginTop: 2 }}
          >
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
              <Box>
                <Tooltip title="Warband Total">
                  <Grid
                    container
                    width="100%"
                    justifyContent="flex-end"
                    direction="row"
                  >
                    <Typography variant="h5">0&nbsp;</Typography>
                    <Typography variant="h5" sx={{ color: "text.disabled" }}>
                      {"/ "}
                      {warbandTotal.toLocaleString("en-US")}
                    </Typography>
                  </Grid>
                </Tooltip>
              </Box>
            </Grid>
          </Grid>

          <Grid container maxHeight="524px">
            {modelArr.map((model: Model) => (
              <AddUnitUnit model={model[1]} />
            ))}

            <Button onClick={tempFunc}>button</Button>
          </Grid>

          <Grid container alignItems="center" justifyContent="space-between">
            <Button variant="outlined" onClick={onClickBack}>
              BACK
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
    </>
  );
};

export default AddUnitsView;

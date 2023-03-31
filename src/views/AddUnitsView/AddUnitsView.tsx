import React, { FunctionComponent } from "react";
import { Button, Typography, Box, Tooltip } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import AddIcon from "@mui/icons-material/Add";
import ContentContainer from "../../components/ContentContainer";
import ChooseWarBandTotalDialog from "../../components/ChooseWarBandTotalDialog";
import { Faction } from "../../types";

interface Props {
  faction: Faction;
  warbandTotal: number;
  onClickBack: () => void;
  onClickPlay: () => void;
  setWarbandTotal: (warbandTotal: number) => void;
}

const AddUnitsView: FunctionComponent<Props> = ({
  faction,
  warbandTotal,
  setWarbandTotal,
  onClickBack,
  onClickPlay,
}) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = (value: number) => {
    setOpen(!open);
    setWarbandTotal(value);
  };

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
              <Typography variant="h5">UNITS:</Typography>
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
                    <Typography variant="h5">unitsCost &nbsp;</Typography>
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
            <Typography>middle</Typography>
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

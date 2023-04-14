import React, { FunctionComponent } from "react";
import {
  Box,
  Button,
  Collapse,
  Grid,
  List,
  Typography,
  LinearProgress
} from "@mui/material";
import { TransitionGroup } from "react-transition-group";
import {} from "@material-ui/core";
import ContentContainer from "../../components/ContentContainer";
import { Faction } from "../../types";
import PlayScreenUnit from "./PlayScreenUnit";

interface Props {
  models: models;
  onClickBack: () => void;
  onClickRules: () => void;
  faction: Faction | null;
}
const PlayScreenView: FunctionComponent<Props> = ({
  models,
  faction,
  onClickRules,
  onClickBack
}) => {
  const modelArr = Object.entries(models);

  return (
    <ContentContainer>
      <Grid container direction="column">
        <Grid container direction="column" justifyContent="flex-start">
          <Grid container justifyContent="space-between" gap="8px">
            <Box>
              <Typography variant="h3">{faction}</Typography>
            </Box>
          </Grid>

          <Grid container direction="column" justifyContent="flex-end">
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Typography variant="h5">10</Typography>
              <Typography variant="body1" color="text.disabled">
                &nbsp;UNITS REMAINING
              </Typography>
            </Grid>
            <LinearProgress variant="determinate" value={36} />
          </Grid>
        </Grid>

        <Grid
          container
          marginTop="8px"
          justifyContent="flex-start"
          maxWidth="6200px"
          maxHeight="512px"
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
                  <PlayScreenUnit model={model[1]} />
                </Collapse>
              ))}
            </TransitionGroup>
          </List>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justifyContent="space-between">
        <Button onClick={onClickBack} variant="outlined">
          BACK
        </Button>

        <Button onClick={onClickRules} variant="contained">
          RULES
        </Button>
      </Grid>
    </ContentContainer>
  );
};

export default PlayScreenView;

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
import ContentContainer from "../../components/ContentContainer";
import { Faction, Model } from "../../types";
import PlayScreenUnit from "./PlayScreenUnit";

interface Props {
  models: Model[];
  onClickBack: () => void;
  onClickRules: () => void;
  faction: Faction | null;
  onActiveChange: (modelId: Model) => void;
}
const PlayScreenView: FunctionComponent<Props> = ({
  models,
  faction,
  onClickRules,
  onClickBack,
  onActiveChange
}) => {
  const modelArr = Object.entries(models);

  const unitsRemaining =
    Object.keys(models).length -
    Object.values(models).filter((model) => !model.active).length;

  return (
    <ContentContainer>
      <Grid container direction="column">
        <Grid container direction="column" justifyContent="flex-start">
          <Grid container direction="column" justifyContent="flex-end">
            <Grid container justifyContent="space-between">
              <Box paddingBottom="8px">
                <Typography variant="h3">
                  {faction?.replace(/_/g, " ")}
                </Typography>
              </Box>
              <Grid
                container
                maxWidth="300px"
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Typography variant="h5">{unitsRemaining}</Typography>
                <Typography variant="body1" color="text.disabled">
                  &nbsp;UNIT{unitsRemaining !== 1 && "S"} REMAINING
                </Typography>
              </Grid>
            </Grid>
            <LinearProgress
              variant="determinate"
              value={
                (Object.values(models).filter((model) => model.active).length /
                  Object.keys(models).length) *
                100
              }
            />
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
              {modelArr
                .sort((item) => (item[1].active === false ? 1 : -1))
                .map((model) => (
                  <Collapse key={model[0]}>
                    <PlayScreenUnit
                      model={model[1]}
                      onActiveChange={onActiveChange}
                    />
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

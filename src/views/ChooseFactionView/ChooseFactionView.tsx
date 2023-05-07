import React, { FunctionComponent } from "react";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ContentContainer from "../../components/ContentContainer";
import ChooseFactionButton from "./ChooseFactionButton";
import Factions from "./factionsList";
import { FactionId, RuleSetId } from "../../types";

interface Props {
  ruleSet: RuleSetId;
  onClickBack: () => void;
  setFaction: (faction: FactionId) => void;
}

const ChooseFactionView: FunctionComponent<Props> = ({
  ruleSet,
  onClickBack,
  setFaction,
}) => (
  <ContentContainer>
    <Grid>
      <Typography variant="h3">FACTION</Typography>

      <Grid
        container
        spacing={2}
        marginTop="16px"
        maxHeight="530px"
        sx={{
          overflowX: "hidden",
          overflowY: "scroll",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {Factions[ruleSet].map((faction) => (
          <Grid
            key={faction.name}
            xs={6}
            sx={(theme) => ({
              height: theme.spacing(13),
            })}
          >
            <ChooseFactionButton
              onClick={() => setFaction(faction.id)}
              {...faction}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
    <Grid container alignItems="center" justifyContent="flex-start" gap="10px">
      <Button variant="outlined" onClick={onClickBack}>
        BACK
      </Button>
    </Grid>
  </ContentContainer>
);
export default ChooseFactionView;

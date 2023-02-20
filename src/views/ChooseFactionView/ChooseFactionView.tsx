import React, { FunctionComponent } from "react";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/system";
import ContentContainer from "../../components/ContentContainer";
import ChooseFactionButton from "./ChooseFactionButton";
import Factions from "./factionsList";
import { Faction, RuleSet } from "../../types";

interface Props {
  ruleSet: RuleSet;
  onClickBack: () => void;
  setFaction: (faction: Faction) => void;
}

const ChooseFactionView: FunctionComponent<Props> = ({
  ruleSet,
  onClickBack,
  setFaction,
}) => (
  <ContentContainer>
    <Box sx={{ marginTop: 2 }}>
      <Typography variant="h3">FACTION</Typography>

      <Grid container spacing={2} marginTop="2px">
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
    </Box>
    <Grid container alignItems="center" justifyContent="flex-start" gap="10px">
      <Button variant="outlined" onClick={onClickBack}>
        BACK
      </Button>
    </Grid>
  </ContentContainer>
);
export default ChooseFactionView;

import React, { FunctionComponent } from "react";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ContentContainer from "../../components/ContentContainer";
import ChooseRuleSetButton from "./ChooseRuleSetButton";
import fantasyIMG from "../../assets/rulesets/fantasy.jpg";
import darkAgesIMG from "../../assets/rulesets/dark_ages.jpg";
import { RuleSet } from "../../types";

interface Props {
  onClickBack: () => void;
  setRuleSet: (ruleSet: RuleSet) => void;
}

const ChooseRuleSetView: FunctionComponent<Props> = ({
  onClickBack,
  setRuleSet
}) => (
  <ContentContainer>
    <Grid>
      <Typography variant="h3">RULE SET</Typography>
    </Grid>
    <Grid
      container
      alignItems="center"
      justifyContent="space-around"
      direction="row"
      gap={2}
      height="547px"
    >
      <Grid xs height="100%">
        <ChooseRuleSetButton
          image={fantasyIMG}
          ruleSetName="FANTASY"
          onClick={() => setRuleSet("fantasy")}
        />
      </Grid>
      <Grid xs height="100%">
        <ChooseRuleSetButton
          image={darkAgesIMG}
          ruleSetName="DARK AGES"
          onClick={() => setRuleSet("dark_ages")}
        />
      </Grid>
    </Grid>
    <Grid
      container
      marginTop="8px"
      alignItems="center"
      justifyContent="flex-start"
      gap="10px"
    >
      <Button variant="outlined" onClick={onClickBack}>
        BACK
      </Button>
    </Grid>
  </ContentContainer>
);

export default ChooseRuleSetView;

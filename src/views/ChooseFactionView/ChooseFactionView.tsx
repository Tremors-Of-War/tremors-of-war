import React, { FunctionComponent } from "react";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/system";
import ContentContainer from "../../components/ContentContainer";
import ChooseFactionButton from "./ChooseFactionButton";
import Factions from "./ChooseFactionList";

const ChooseFactionView: FunctionComponent = () => {
  // TODO: GET VALUES FROM STATE
  const ruleSet = "DarkAgesFactions";

  return (
    <ContentContainer>
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h3">FACTION</Typography>

        <Grid container spacing={2} marginTop="2px">
          {Factions[ruleSet].map((faction) => (
            <Grid
              xs={6}
              sx={(theme) => ({
                height: theme.spacing(13),
              })}
            >
              <ChooseFactionButton
                image={faction.img}
                factionName={faction.name}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Grid
        container
        alignItems="center"
        justifyContent="flex-start"
        gap="10px"
      >
        <Button variant="outlined">BACK</Button>
      </Grid>
    </ContentContainer>
  );
};
export default ChooseFactionView;

import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import ContentContainer from '../../components/ContentContainer';
import ChooseRuleSetButton from './ChooseRuleSetButton';
import fantasyIMG from '../../assets/rulesets/fantasy.jpg';
import darkAgesIMG from '../../assets/rulesets/dark_ages.jpg';

const ChooseRuleSetView = () => (
  <ContentContainer>
    <Box sx={{ marginTop: 2 }}>
      <Typography variant="h3">RULE SET</Typography>
    </Box>
    <Grid
      container
      alignItems="center"
      justifyContent="space-around"
      direction="row"
      gap={2}
      height="547px"
    >
      <Grid xs height="100%">
        <ChooseRuleSetButton image={fantasyIMG} ruleSetName="FANTASY" />
      </Grid>
      <Grid xs height="100%">
        <ChooseRuleSetButton image={darkAgesIMG} ruleSetName="DARK AGES" />
      </Grid>
    </Grid>
    <Grid
      container
      alignItems="center"
      justifyContent="flex-start"
      gap="10px"
      position="absolute"
      bottom="32px"
      left="32px"
      marginTop="2px"
    >
      <Button variant="outlined">BACK</Button>
    </Grid>
  </ContentContainer>
);

export default ChooseRuleSetView;

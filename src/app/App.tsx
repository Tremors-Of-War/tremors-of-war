import { Grid } from '@mui/material';
import * as React from 'react';
import BackgroundIMG from '../assets/backgrounds/default.jpg';
import ChooseRuleSetView from '../views/ChooseRuleSetView/ChooseRuleSetView';
import AppProvider from './AppProvider';

function App() {
  return (
    <AppProvider>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          background: `url(${BackgroundIMG})`,
          height: '100vh',
          backgroundSize: 'cover',
        }}
      >
        <ChooseRuleSetView />
      </Grid>
    </AppProvider>
  );
}

export default App;

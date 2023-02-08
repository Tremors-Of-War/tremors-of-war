import { Grid } from '@mui/material';
import * as React from 'react';
import BackgroundIMG from '../assets/backgrounds/default.jpg';
import ChooseFactionView from '../views/ChooseFactionView/ChooseFactionView';
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
        <ChooseFactionView />
      </Grid>
    </AppProvider>
  );
}

export default App;

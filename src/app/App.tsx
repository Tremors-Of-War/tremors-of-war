import { Grid } from '@mui/material';
import * as React from 'react';
import ContentContainer from '../components/ContentContainer';
import StartScreenView from '../views/StartScreenView/StartScreenView';
import BackgroundIMG from '../assets/backgrounds/default.jpg';

function App() {
  return (
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
      <ContentContainer>
        <StartScreenView />
      </ContentContainer>
    </Grid>
  );
}

export default App;
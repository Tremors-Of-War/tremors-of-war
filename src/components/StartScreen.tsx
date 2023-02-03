import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Button } from '@mui/material';
import StartLogo from '../assets/images/start_logo.png';

const StartScreen = () => (
  <>
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={(theme) => ({
        height: theme.spacing(21),
        width: theme.spacing(88),
        background: `url(${StartLogo})`,
        backgroundRepeat: 'no-repeat',
      })}
    />
    <Grid
      container
      alignItems="center"
      justifyContent="flex-end"
      gap="10px"
      position="absolute"
      bottom="32px"
      right="32px"
    >
      <Button variant="outlined">IMPORT LIST</Button>
      <Button variant="contained">NEW LIST</Button>
    </Grid>
  </>
);

export default StartScreen;

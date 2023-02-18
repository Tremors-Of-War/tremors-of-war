import { Grid } from '@mui/material';
import * as React from 'react';
import { RouterProvider } from "react-router-dom";
import BackgroundIMG from '../assets/backgrounds/default.jpg';
import AppProvider from './AppProvider';
import router from "./router";

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
          <RouterProvider router={router} />
      </Grid>
    </AppProvider>
  );
}

export default App;

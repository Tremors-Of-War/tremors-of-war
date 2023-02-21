import { Grid } from "@mui/material";
import * as React from "react";
import BackgroundIMG from "../assets/backgrounds/default.jpg";
import AppProvider from "./AppProvider";
import AppView from "../views/AppView/AppView";

function App() {
  return (
    <AppProvider>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          background: `url(${BackgroundIMG})`,
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <AppView />
      </Grid>
    </AppProvider>
  );
}

export default App;

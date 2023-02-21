import React, { FunctionComponent } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../../app/theme";

const withThemeDecorator = (Story: FunctionComponent) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);

export default withThemeDecorator;

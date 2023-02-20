import React, { ReactElement } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";

interface AppProviderProps {
  children: ReactElement[] | ReactElement;
}

const AppProvider: React.FC<AppProviderProps> = function ({ children }) {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default AppProvider;

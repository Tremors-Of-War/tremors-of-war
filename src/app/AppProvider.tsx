import React, { ReactElement } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import { initialState, StateContext } from "./state";

interface AppProviderProps {
  children: ReactElement[] | ReactElement;
}

const AppProvider: React.FC<AppProviderProps> = function ({ children }) {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StateContext.Provider value={initialState}>
          {children}
        </StateContext.Provider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default AppProvider;

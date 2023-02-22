import { createTheme } from "@mui/material";
import AntiqueRoman from "../assets/fonts/AntiqueRoman.ttf";

const theme = createTheme({
  typography: {
    h3: {
      fontFamily: "AntiqueRoman sans-serif"
    }
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#FF8A3C"
    },
    secondary: {
      main: "#F3F4F6"
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'AntiqueRoman';
        src: url(${AntiqueRoman}) format("truetype")
    }
      `
    }
  }
});

export default theme;

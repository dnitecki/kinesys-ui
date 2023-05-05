import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#212121",
    },
    background: {
      default: "#ededed",
    },
    text: {
      primary: "#212121",
      secondary: "#212121",
      disabled: "#bbbbbb",
    },
    error: {
      main: "#ea3737",
    },
    warning: {
      main: "#d86800",
    },
    success: {
      main: "#30bf58",
    },
    divider: "#212121",
  },
  typography: {
    h1: {
      fontSize: 48,
      fontWeight: 700,
    },
    h2: {
      fontSize: 39,
      fontWeight: 700,
    },
    h3: {
      fontSize: 32,
      fontWeight: 700,
    },
    h4: {
      fontSize: 25,
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
      fontSize: 20,
    },
    h6: {
      fontSize: 16,
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: 12,
    },
    subtitle2: {
      fontSize: 11,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
    button: {
      fontSize: 16,
      fontWeight: 700,
    },
    caption: {
      fontSize: 12,
    },
    overline: {
      fontSize: 8,
    },
  },
});

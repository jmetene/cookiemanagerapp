import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: "#151515",
    },

    secondary: {
      main: "#00a2ff",
    },

    error: {
      main: red.A400,
    },
  },
});

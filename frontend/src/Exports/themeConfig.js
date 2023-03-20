import { createTheme } from "@mui/material/styles";

const customComponents = {
  MuiButton: {
    styleOverrides: {
      root: {},
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {},
    },
  },
  MuiTypography: {
    styleOverrides: {
      root: {},
    },
  },
};

const galaxyTheme = createTheme({
  palette: {
    primary: {
      main: "#0F0C24",
    },
  },
  secondary: {
    light: "#C1436D",
    main: "#A350A3",
  },
  components: customComponents,
});

const earnestTheme = createTheme({
  palette: {
    primary: {
      main: "#1F3044",
    },
  },
  secondary: {
    light: "#646C79",
    main: "#FB9039",
  },
});

const slumberTheme = createTheme({
  palette: {
    primary: {
      main: "#051622",
    },
  },
  secondary: {
    light: "#DEB992",
    main: "#1BA098",
  },
});

const tropicalTheme = createTheme({
  palette: {
    primary: {
      main: "#5AC3B0",
    },
  },
  secondary: {
    light: "#F7CD46",
    main: "#DE5935",
  },
});

export { galaxyTheme, earnestTheme, slumberTheme, tropicalTheme };

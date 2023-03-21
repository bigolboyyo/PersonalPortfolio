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
      root: {
        display: "flex",
      },
      h1: {
        color: "#CEA2D7",
        fontWeight: "bold",
        letterSpacing: "2px",
        WebkitTextStroke: "2px #9F63C4",
      },
      p: {
        color: "#CEA2D7",
        fontSize: "2.5rem",
        WebkitTextStroke: "1px #9F63C4",
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        height: `calc(100vh - 64px)`, // subtracting header height of 64px
        margin: 0,
        padding: "0.25rem",
        backgroundColor: "#9075D8",
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        display: "flex",
        padding: "0.35rem",
        width: "60%",
        backgroundColor: "#A348A6",
      },
    },
  },
};

const galaxyTheme = createTheme({
  palette: {
    primary: {
      main: "#674AB3",
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

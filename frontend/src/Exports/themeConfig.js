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
        color: "#EBB9EA",
        fontWeight: "bold",
        letterSpacing: "2px",
        WebkitTextStroke: "2px #000",
        fontFamily: "Freckle Face",
      },
      p: {
        color: "#EBB9EA",
        fontSize: "clamp(1rem, 5vmax, 3rem)",
        WebkitTextStroke: "2.5px #000",
        fontFamily: "Freckle Face",
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        height: `300%`, // subtracting header height of 64px
        margin: 0,
        padding: "0.35rem",
        backgroundColor: "#000",
        width: "100%",
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        display: "flex",
        padding: "0.35rem",
        backgroundColor: "#000",
        maxWidth: "100%",
        maxHeight: "65%",
        margin: "0.75rem auto",
      },
    },
  },
  MuiMediaCard: {
    styleOverrides: {
      root: {
        display: "flex",
      },
    },
  },
  MuiList: {
    styleOverrides: {
      root: {
        display: "flex",
        flexDirection: "column",
        width: "25vmax",
      },
    },
  },
};

const galaxyTheme = createTheme({
  palette: {
    primary: {
      main: "#40AAFE",
    },
  },
  secondary: {
    light: "#EBB9EA",
    main: "#40AAFE",
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

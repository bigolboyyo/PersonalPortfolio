import { createTheme } from "@mui/material/styles";
import publicImage from "./publicImage";

const backgroundImage = `url(${publicImage("clousd.jpg")})`;

const customComponents = {
  MuiButton: {
    styleOverrides: {
      root: {},
      toolbar: {
        fontSize: "clamp(0.75rem, 1.5vw, 4rem)",
        color: "#40AAFE",
      },
      code: {
        background: "transparent",
        backdropFilter: "blur(7px) contrast(0.6)",
        width: "max-content",
        alignSelf: "center",
        color: "#40AAFE",
        fontSize: "clamp(0.75rem, 1.5vw, 4rem)",
      },
    },
    variants: [
      {
        props: { variant: "toolbar" },
      },
      {
        props: { variant: "code" },
      },
    ],
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        fontSize: "clamp(0.75rem, 1.5vw, 4rem)",
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        fontSize: "clamp(0.75rem, 1.5vw, 4rem)",
        color: "#40AAFE",
      },
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
        fontFamily: "Freckle Face",
      },
      h1: {
        color: "#EBB9EA",
        fontWeight: "bold",
        letterSpacing: "2px",
        WebkitTextStroke: "2px #000",
        fontFamily: "Freckle Face",
        fontSize: "clamp(2.5rem, 3.7vmax, 4.2rem)",
      },
      p: {
        color: "#EBB9EA",
        fontSize: "clamp(2rem, 2.7vmax, 4rem)",
        WebkitTextStroke: "2px #000",
        fontFamily: "Freckle Face",
        textShadow: "2px 4px black",
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        margin: 0,
        padding: "0.35rem",
        backgroundColor: "#000",
        width: "100%",
        backgroundImage,
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        display: "flex",
        padding: "0.35rem",
        backgroundColor: "#000",
        maxHeight: "65%",
        margin: "0.75rem auto",
      },
    },
  },
  MuiMediaCard: {
    styleOverrides: {
      root: {
        display: "flex",
        width: "55%",
        maxWidth: "56%",
      },
    },
  },
  MuiList: {
    styleOverrides: {
      root: {
        display: "flex",
        flexDirection: "column",
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: "white",
        fontFamily: "Freckle Face",
        letterSpacing: "0.15rem",
        textShadow: "2px 4px black",
      },
    },
  },
  MuiSnackbar: {
    styleOverrides: {
      root: {
        right: null,
        left: null,
        bottom: null,
        "@media (min-width: 600px)": {
          left: "0 !important",
          right: "0 !important",
        },
        "@media (max-width: 599.95px)": {
          left: "0 !important",
          right: "0 !important",
        },
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: "0 !important",
      },
    },
  },
};

const mainTheme = createTheme({
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

export { mainTheme };

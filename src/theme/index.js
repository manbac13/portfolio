import { createTheme } from "@mui/material";
import Typography from "./typography";
import { FONTFAMILY } from "config";

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
    },
    typography: {
      ...Typography(FONTFAMILY),
      allVariants: {
        letterSpacing: "-0.1px",
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: 700,
            borderRadius: 10,
            transition: "all 0.3s ease",
            paddingInline: 12,
          },
          contained: {
            backgroundColor: mode === "light" ? "#000" : "#fff",
            color: mode === "light" ? "#fff" : "#000",
            "&:hover": {
              backgroundColor: mode === "light" ? "#111" : "#f0f0f0",
              boxShadow: mode === "light" ? lightShadow : darkShadow,
            },
            boxShadow: mode === "light" ? lightShadow : darkShadow,
          },

          outlined: {
            color: mode === "light" ? "#141414" : "#fff",
            border:
              mode === "light" ? "1px solid #e2e2e2" : "1px solid #242424",
            "&:hover": {
              backgroundColor: mode === "light" ? "#f2f2f2" : "#1c1c1c",
              border:
                mode === "light" ? "1px solid #e3e3e3" : "1px solid #292929",
            },
          },
        },
      },
    },
  });

export default getTheme;

const lightShadow =
  "0 40px 24px #0000000f, 0 23px 14px #00000014, 0 10px 10px #0000001f, 0 3px 6px #00000030";

const darkShadow =
  "0 20px 24px #ffffff08,0 15px 14px #ffffff0d,0 6px 10px #ffffff14,0 3px 6px #ffffff1a";

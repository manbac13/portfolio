// ThemeContext.js
import { createContext, useMemo, useState } from "react";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";
import getTheme from "theme";

export const ColorModeContext = createContext();

export function ColorModeProvider({ children }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
  const [page, setPage] = useState("home");

  const effectiveMode =
    mode === "system" ? (prefersDarkMode ? "dark" : "light") : mode;

  const toggleColorMode = (mode) => {
    setMode(() => {
      localStorage.setItem("mode", mode);
      return mode;
    });
  };

  const togglePage = (page) => {
    setPage(page);
  };

  const theme = useMemo(() => getTheme(effectiveMode), [effectiveMode]);

  return (
    <ColorModeContext.Provider
      value={{ mode, toggleColorMode, page, togglePage }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

ColorModeProvider.propTypes = {
  children: PropTypes.node,
};

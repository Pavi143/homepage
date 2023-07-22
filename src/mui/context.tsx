"use client";

import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from "react";
import { muiDarkTheme, muiLightTheme } from "./index";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const ThemeContext = createContext<(() => void) | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);
  const theme = useMemo(() => (dark ? muiDarkTheme : muiLightTheme), [dark]);
  return (
    <ThemeContext.Provider value={() => setDark(prev => !prev)}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeToggler() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Invalid context");
  }
  return context;
}

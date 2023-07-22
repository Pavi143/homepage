"use client";

import { Shadows, createTheme } from "@mui/material/styles";
import { catppuccinColors } from "../catppuccin";
import colorsea from "colorsea";

const primaryLight = catppuccinColors.light.flamingo;
const secondaryLight = catppuccinColors.light.red;

const primaryDark = catppuccinColors.dark.flamingo;
const secondaryDark = catppuccinColors.dark.red;

const commonConfigs = createTheme({
  shadows: new Array(25).fill("none") as Shadows,
  shape: {
    borderRadius: 0
  },
  typography: {
    fontFamily: "Open Sans",
    button: {
      textTransform: "none"
    }
  }
})

export const muiDarkTheme = createTheme({
  ...commonConfigs,
  palette: {
    mode: "dark",
    primary: {
      light: colorsea(primaryDark).lighten(5).hex(),
      main: primaryDark,
      dark: colorsea(primaryDark).darken(5).hex(),
    },
    secondary: {
      light: colorsea(secondaryDark).lighten(5).hex(),
      main: secondaryDark,
      dark: colorsea(secondaryDark).darken(5).hex(),
    },
    background: {
      default: catppuccinColors.dark.crust,
      paper: catppuccinColors.dark.mantle,
    },
    text: {
      primary: catppuccinColors.dark.text,
      secondary: catppuccinColors.dark.subtext0,
    },
  },
});
export const muiLightTheme = createTheme({
  ...commonConfigs,
  palette: {
    mode: "light",
    primary: {
      light: colorsea(primaryLight).lighten(5).hex(),
      main: primaryLight,
      dark: colorsea(primaryLight).darken(5).hex(),
    },
    secondary: {
      light: colorsea(secondaryLight).lighten(5).hex(),
      main: secondaryLight,
      dark: colorsea(secondaryLight).darken(5).hex(),
    },
    background: {
      default: catppuccinColors.light.crust,
      paper: catppuccinColors.light.mantle,
    },
    text: {
      primary: catppuccinColors.light.text,
      secondary: catppuccinColors.light.subtext0,
    },
  },
});

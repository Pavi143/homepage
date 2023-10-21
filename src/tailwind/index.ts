import { Config } from "tailwindcss";
import { catppuccinColors } from "../catppuccin";
import { createThemes } from "tw-colors";
import typography from "@tailwindcss/typography"
import colors from "tailwindcss/colors";

export const tailwindConfig: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: colors
  },
  plugins: [
    createThemes({
      light: catppuccinColors.light,
      dark: catppuccinColors.dark
    }),
    typography
  ],
};

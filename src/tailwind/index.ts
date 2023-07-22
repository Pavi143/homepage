import colors from "tailwindcss/colors";
import { Config } from "tailwindcss";
import { RecursiveKeyValuePair } from "tailwindcss/types/config";

export const tailwindColors = Object.entries(colors).reduce<RecursiveKeyValuePair<string, string>>(
  (_colors, [colorName, colorPalette]) =>
    ["lightBlue", "warmGray", "trueGray", "coolGray", "blueGray"].indexOf(colorName) > 0
      ? _colors
      : {
          ..._colors,
          [colorName.toString()]: colorPalette,
        },
  {}
);

export const tailwindConfig: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: tailwindColors,
  },
  plugins: [],
};

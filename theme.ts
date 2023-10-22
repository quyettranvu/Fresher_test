import { createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "ocean-blue",
  colors: {
    "ocean-blue": [
      "#7AD1DD",
      "#5FCCDB",
      "#44CADC",
      "#2AC9DE",
      "#1AC2D9",
      "#11B7CD",
      "#09ADC3",
      "#0E99AC",
      "#128797",
      "#147885",
    ],
  },

  shadows: {
    md: "0 0 10px rgba(0, 0, 0, 0.5)",
    xl: "0 0 20px rgba(0, 0, 0, 0.5)",
  },
});

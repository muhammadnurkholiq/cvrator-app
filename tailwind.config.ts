import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette
} = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars
  });
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px"
      },
      colors: {
        primary: {
          light: "#FFC1BB",
          main: "#DD1A1A",
          dark: "#790A00",
          contrastText: "#FFFFFF"
        },
        blood: {
          10: "#E9CECC",
          20: "#FFC1BB",
          30: "#CD4F5D",
          40: "#C32839",
          50: "#BD081C",
          60: "#790A00",
          70: "#610800",
          80: "#490600",
          90: "#300400",
          100: "#1D0200"
        },
        grey: {
          0: "#F3F3F3",
          100: "#E7E7E7",
          200: "#D1D1D1",
          300: "#C7C7C7",
          400: "#888888",
          500: "#6D6D6D",
          600: "#5D5D5D",
          700: "#4F4F4F",
          800: "#3D3D3D",
          900: "#28292A",
          A100: "#1F1F1F"
        },
        background: {
          main: "#1F1F1F"
        }
      }
    }
  },
  plugins: [addVariablesForColors]
};
export default config;

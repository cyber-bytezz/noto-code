const defaultTheme = require("tailwindcss/defaultTheme");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./utils/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      borderRadius: {
        xl: "1rem", // Oval cut borders
      },
      fontFamily: {
        body: ["Inter", "Sans Serif"],
        title: ["Inter", "Sans Serif"]
      },
      fontSize: {
        body: [
          "1rem",
          {
            lineHeight: "1.5rem"
          }
        ],
        h1: [
          "3.5rem",
          {
            lineHeight: "3.75rem"
          }
        ],
        h2: [
          "2.25rem",
          {
            lineHeight: "2.625rem"
          }
        ],
        h3: [
          "1.875rem",
          {
            lineHeight: "2.25rem"
          }
        ],
        h4: [
          "1.5rem",
          {
            lineHeight: "2rem"
          }
        ],
        h5: [
          "1.25rem",
          {
            lineHeight: "1.75rem"
          }
        ],
        h6: [
          "1.125rem",
          {
            lineHeight: "1.5rem"
          }
        ],
        mini: [
          "0.75rem",
          {
            lineHeight: "1.5rem"
          }
        ]
      },
      colors: {
        black: {
          DEFAULT: "#000000",
          50: "#E6E6E6",
          100: "#CCCCCC",
          200: "#999999",
          300: "#666666",
          400: "#333333",
          500: "#000000",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000"
        },
        white: {
          DEFAULT: "#FFFFFF",
          50: "#FFFFFF",
          100: "#FCFCFC",
          200: "#FCFCFC",
          300: "#FAFAFA",
          400: "#FAFAFA",
          500: "#F7F7F7",
          600: "#C7C7C7",
          700: "#949494",
          800: "#636363",
          900: "#303030"
        },
        primary: {
          50: "#FCFCFC",
          100: "#FCFCFC",
          200: "#FCFCFC",
          300: "#FCFCFC",
          400: "#FAFAFA",
          500: "#FAFAFA",
          600: "#E3E3E3",
          700: "#C7C7C7",
          800: "#A6A6A6",
          900: "#787878",
          950: "#595959"
        },
        secondary: {
          50: "#FFF9F0",
          100: "#FFF5E5",
          200: "#FFEBCC",
          300: "#FFDEAD",
          400: "#FFD494",
          500: "#FFC56E",
          600: "#FFA929",
          700: "#EB8D00",
          800: "#C77700",
          900: "#8A5300",
          950: "#663D00"
        },
        badge: "#F1F5F9",
        badgeText: "#475569"
      },
      animation: {
        scroll: "scroll 10s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
    }
  },
  plugins: [addVariablesForColors],
};
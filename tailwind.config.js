/* eslint-disable import/no-anonymous-default-export */
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      //Apple
      blue: "#2997FF",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
      //Apple
      // colors: {
      //   secondary: {
      //     DEFAULT: colors.neutral[200],
      //     hover: colors.neutral[300],
      //     border: colors.neutral[400],
      //     text: colors.neutral[500],
      //     dark: colors.neutral[800],
      //     "dark-hover": colors.neutral[900],
      //   },
      //   "gray-20": "#F8F4EB",
      //   "gray-50": "#EFE6E6",
      //   "gray-100": "#DFCCCC",
      //   "gray-500": "#5E0000",
      //   "primary-100": "#FFE1E0",
      //   "primary-300": "#FFA6A3",
      //   "primary-500": "#FF6B66",
      //   "secondary-400": "#FFCD5B",
      //   "secondary-500": "#FFC132",
      // },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./src/Fitness/assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      // content: {
      //   evolvetext: {evolvetext:"url('./src/assets/EvolveText.png')"},
      //   abstractwaves: {abstractwaves:"url('./src/assets/AbstractWaves.png')"},
      //   sparkles: {sparkles:"url('./src/assets/Sparkles.png')"},
      //   circles: {circles:"url('./src/assets/Circles.png')"},
      // },
    },
    screens:{
      xs:"480px",
      sm:"768px",
      md:"1060px",
    }
  },
  plugins: [],
};

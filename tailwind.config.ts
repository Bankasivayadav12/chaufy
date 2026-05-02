import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#CCFF66",
          black: "#000000",
          grey: "#F3F3F3",
          bgGrey: "#AAAAAA",
        },
      },
    },
  },
  plugins: [],
};

export default config;
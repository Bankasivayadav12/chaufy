/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    extend: {
      // ✅ Fonts
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        noto: ["var(--font-noto)", "sans-serif"],
        pondar: ["var(--font-pondar)", "sans-serif"],
      },

      // ✅ Your Brand Colors
      colors: {
        brand: {
          primary: "#CCFF66",   // main green
          black: "#000000",
          grey: "#F3F3F3",
          bgGrey: "#AAAAAA",
        },
      },

      // ✅ Shadows (optional but useful)
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.05)",
      },

      // ✅ Border radius
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },

  plugins: [],
};
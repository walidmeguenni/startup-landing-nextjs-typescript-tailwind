/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        trappedDarkness: "#0F2137",
        nightBlue: "#02073E",
        blueChaos: "#3183ff",
        joustBlue: "#52ACFF",
        secondary: "#56BBD0",
        gray: "#9ba8c6",
        "gray-1": "#fbfbfc",
        sectionbackground: "#F9FBFD",
        featurecolor: "#343D48",
        bulesky: "#3183FF",
        bordergray: "#EDEEF0",
        "bordergray-1": "#EDF0F4",
        orangeDelight: "#ffc059",
        aircraftWhit: "#ecf2f7",
        newSteel: "#738295",
        alpineGoat:"#f9fafc",
      },
      fontFamily: {
        arvo: ["Arvo"],
        dmSans: ["DM Sans"],
      },
      boxShadow: {
        custom: "0px 20px 50px rgba(59, 90, 136, 0.05)",
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
        svg: "arrow 0.5s linear",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        svg: {
          "0%": { opacity: 0, transform: "translateX(-9px)" },
          "100%": { opacity: 1 },
        },
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        3.5: "450px 1fr 20px",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
  variants: {
    animation: ["motion-safe"],
  },
};

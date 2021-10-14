module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textColor: (theme) => ({
      ...theme("colors"),
      main: "#CFCFCF",
      secondary: "#42428A",
      analog: "#52C3CA",
      faded: "#BEBEBE",
      button: "white",
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "theme-main": "#F0F2F5",
      "theme-analog": "#FFFFFF",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

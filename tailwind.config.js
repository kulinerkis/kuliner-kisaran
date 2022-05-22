module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#0a7dfa",
        main: "#fdfdfd",
      },
      backgroundImage: {
        mentorBg: "url('~/static/bg-mentor.jpg')",
      },
      fontSize: {
        8: "8px",
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        24: "24px",
        26: "26px",
        32: "32px",
        40: "40px",
        52: "52px",
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          paddingLeft: "24px",
          paddingRight: "24px",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen sm": {
            width: "600px",
            paddingLeft: "0px",
            paddingRight: "0px",
          },
          "@screen md": {
            width: "700px",
            paddingLeft: "0px",
            paddingRight: "0px",
          },
          "@screen lg": {
            width: "900px",
            paddingLeft: "0px",
            paddingRight: "0px",
          },
          "@screen xl": {
            width: "1120px",
            paddingLeft: "0px",
            paddingRight: "0px",
          },
        },
      });
    },
  ],
};

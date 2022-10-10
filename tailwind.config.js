module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  daisyui: {
    themes: [
      {
        light: {
          primary: "#1b2857fb",
          secondary: "#FFC000",
          accent: "#FFEDD5",
          neutral: "#F3F4F6",
          "base-100": "#FFFFFF",
<<<<<<< HEAD
          info: "#98A8DD",
          success: "#1BBB70",
          warning: "#DF7E07",
          error: "#FA5C5C",
          login: "#6358DC",
        },
        fontFamily: {
          roboto: ["Roboto", "sans-serif"],
          poppins: ["Poppins", "sans-serif"],
=======
          "info": "#98A8DD",
          "success": "#1BBB70",
          "warning": "#DF7E07",
          "error": "#FA5C5C",
          "login":"#6358DC",
          "profile":"#858A89"
>>>>>>> fe77bcbb2bfae6525ee6364c93703d53417b4497
        },
      },
      "light",
    ],
  },
  plugins: [require("daisyui")],
};

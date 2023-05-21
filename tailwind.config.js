/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      height: {
        cover: "87vh",
      },
      colors: {
        black: "#111111",
        cyan: "#00DBD9",
        orange: "#FFA500",
        "jet-black": "#1A1A1A",
        success: "#55C991",
        "light-grey": "#333F3F",
      },
      backgroundImage: {
        "button-gradient":
          "linear-gradient(90deg, #00DBD9 -3.87%, #FFA500 192.83%)",
        "button-hover":
          "linear-gradient(90deg, #09BFBE -177.99%, #CB8910 128.53%)",
        "heading-gradient":
          "linear-gradient(90deg, #00DBD9 -167.89%, #FFA500 76.46%)",
      },
      opacity: {
        35: ".35",
      },
    },
  },
  plugins: [require("tailwindcss"), require("tailwindcss-animated")],
};

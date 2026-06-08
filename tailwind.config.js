/** @type {import('tailwindcss').Config} */
export default {
  content: {
    relative: true,
    files: ["./index.html", "./src/**/*.{js,jsx}"],
  },
  theme: {
    extend: {
      colors: {
        blush: "#ff8fb7",
        petal: "#ffd3e2",
        cream: "#fff6ea",
        lavender: "#c9b7ff",
        plum: "#251125",
        wine: "#5a1938",
        roseGold: "#f6b37f",
        mintGlow: "#9ee9d8",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
        display: ["Playfair Display", "Georgia", "serif"],
        script: ["Dancing Script", "cursive"],
      },
      boxShadow: {
        romantic: "0 30px 90px rgba(255, 143, 183, 0.28)",
        glow: "0 0 40px rgba(246, 179, 127, 0.42)",
      },
      backgroundImage: {
        "romantic-depth":
          "radial-gradient(circle at 18% 18%, rgba(255,143,183,.32), transparent 30%), radial-gradient(circle at 80% 10%, rgba(158,233,216,.16), transparent 26%), linear-gradient(135deg, #251125 0%, #4b173b 48%, #160f25 100%)",
      },
    },
  },
  plugins: [],
};

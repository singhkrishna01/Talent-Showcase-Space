/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    layers: ["base", "components", "utilities"],
  },
  theme: {
    extend: {
      screens: {
        desktop: "1130px",
      },

      colors: {
        "primary-color": "#a855f7",
        "light-purple": "rgba(168, 85, 247, 0.5)",
        "dark-purple": "#9333ea",
        "light-gray": "#AEAEAE",
      },
    },
  },
  plugins: [],
};

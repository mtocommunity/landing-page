/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        mto_gray: "#101B37",
        mto_gray_light: "#37415B",
        mto_red: "#E41476",
        mto_red_light: "#EC458D",
        mto_red_dark: "#A31357",
        mto_blue: "#02C8ED",
        mto_blue_light: "#4BD5F1",
        mto_blue_dark: "#2094AA",
        mto_dark_gray: "#05090C",
        discord_blurple: "#5865F2",
      },
      fontFamily: {
        main_sans: ["Lemon Milk", "sans"],
        secondary_sans: ["Arial", "sans"],
        main_mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

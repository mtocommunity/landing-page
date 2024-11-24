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
        mto_grey: "#CDCDCD",
        mto_purple: "#6620B9",
        mto_purple_light: "#5865F2",
        mto_purple_dark: "#0D0A2C",
        discord_blurple: "#5865F2",
        card_simple: "#0A0909",
      },
      fontFamily: {
        main_sans: ["Lemon Milk", "sans"],
        secondary_sans: ["Arial", "sans"],
        main_mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        'custom-cyan': '4px 4px 6px -2px rgba(75, 213, 241, 0.5), -4px -4px 6px -2px rgba(75, 213, 241, 0.25)',
      },
      borderColor: {
        'gradient': 'linear-gradient(to right, #EC458D, #4BD5F1)',
      },
    },
  },
  plugins: [],
};

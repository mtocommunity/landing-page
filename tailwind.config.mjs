/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        mto_gray: "#101B37",
        mto_red: "#E41476",
        mto_blue: "#02C8ED",
        mto_dark_gray: "#05090C",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "rich-black": "#051014",
        "jet-gray": "#2E2F2F",
        "light-purple": "#A599B5",
        "gray-blue": "#CDDDDD",
        "ash-gray": "#ACBDBA",
      },
    },
  },
  plugins: [],
};

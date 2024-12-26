/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "#0a4169d5",
        bluemedium: "#0196AD",
        lightblue: "#018598",
        gray: "#6A7B7A",
        darkorange: "#FD8C25",
        lightorange: "#FCD2AA"
      }
    },
  },
  plugins: [],
}


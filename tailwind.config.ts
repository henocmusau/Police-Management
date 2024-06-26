import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary': 'hsla(240, 12%, 10%, 1)',
        'secondary': 'hsla(245, 18%, 24%, 1)',
        'third': '#38bdf8',
        // 'third': '#0ea5e9',
        'fourth': 'hsla(250, 47%, 90%, 1)',
      },
      fontSize: {
        'xxs': '0.6rem'
      }
    },
  },
  plugins: [],
};
export default config;

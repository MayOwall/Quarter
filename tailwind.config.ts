import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "light-01": "#FFFFFF",
      "light-02": "#E2E2E2",
      "light-03": "#707070",
      "light-04": "#202020",
      "dark-01": "#202020",
      "dark-02": "#707070",
      "dark-03": "#E2E2E2",
      "dark-04": "#FFFFFF",
      red: "#FF7171",
      blue: "#7ABFFF",
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;

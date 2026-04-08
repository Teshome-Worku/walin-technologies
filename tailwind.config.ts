import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/sections/**/*.{js,ts,jsx,tsx}",

    ],
    theme: {
        extend: {
            colors: {
                primary: "#047857",
                secondary: "#7C3AED",
                dark: "#2E324D",
                light: "#F5F7FA",
            },
        },
    },
    plugins: [],
};

export default config;
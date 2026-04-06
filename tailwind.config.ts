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
                primary: "#2563EB",
                secondary: "#7C3AED",
                dark: "#1F2937",
                light: "#F8FAFC",
            },
        },
    },
    plugins: [],
};

export default config;
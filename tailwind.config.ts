import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/feature/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {},
        },
        screens: {
            smMobile: "300px", // Small Mobile (Landscape)
            smTablet: "601px", // Small Tablets (Portrait)
            smDesktop: "1025px", // Small Desktops & Laptops
        },
    },
    plugins: [],
};
export default config;

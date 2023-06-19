/** @type {import('tailwindcss').Config} */
export default {
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#31859D",
                    secondary: "#DBFD50",
                    accent: "#1dcdbc",
                    neutral: "#F4F7FE",
                    "base-100": "#ffffff",
                    info: "#3abff8",
                    success: "#36d399",
                    warning: "#fbbd23",
                    error: "#f87272",
                    "neutral-content": "#A3AED0",
                },
            },
        ],
    },
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.jsx",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
};

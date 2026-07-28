import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ink: "#16233A",
                "ink-soft": "#4B5A70",
                paper: "#F3F5F1",
                panel: "#FFFFFF",
                line: "#DCDFD6",
                brass: "#A9782F",
                brick: "#B23A2E",
                sage: "#5C6F5C",
            },

            fontFamily: {
                display: ["Fraunces", "Georgia", "serif"],
                body: ["Inter", "sans-serif"],
                mono: ["IBM Plex Mono", "monospace"],
            },

            borderRadius: {
                card: "10px",
            },

            keyframes: {
                "porchlight-scroll": {
                    "0%": {
                        transform: "translateX(0)",
                    },
                    "100%": {
                        transform: "translateX(-50%)",
                    },
                },
            },

            animation: {
                "porchlight-scroll":
                    "porchlight-scroll 36s linear infinite",
            },
        },
    },
    plugins: [],
};

export default config;
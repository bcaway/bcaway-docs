import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2563EB",
          hover: "#1D4ED8",
          subtle: "#EFF6FF",
          mark: "#4A86E8",
          light: "#EEF4FE",
        },
        absent: {
          DEFAULT: "#DC2626",
          bg: "#FEF2F2",
          border: "#FECACA",
          text: "#B91C1C",
        },
        present: {
          DEFAULT: "#16A34A",
          bg: "#F0FDF4",
          border: "#BBF7D0",
          text: "#15803D",
        },
        dark: {
          canvas: "#0B0D0E",
          surface: "#151718",
          hover: "#202425",
          border: "#26292B",
          text: "#ECEEED",
          secondary: "#9BA1A6",
          muted: "#687076",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Text"',
          '"SF Pro Display"',
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
      maxWidth: {
        content: "780px",
      },
      borderRadius: {
        DEFAULT: "6px",
        md: "8px",
        lg: "10px",
        xl: "12px",
        "2xl": "16px",
      },
    },
  },
  plugins: [],
};

export default config;

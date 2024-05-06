import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#33CC99",
          medium: "#02B87B",
          dark: "#009966",
          deep: "#00764F",
        },
        accent: {
          light: "#7FFFDF",
          medium: "#33FFCC",
          dark: "#27EBBA",
          deep: "#17BF95",
        },
        neutral: {
          light: "#BDBDBD",
          medium: "#161616",
          dark: "#0F0F0F",
          deep: "#0A0A0A",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "0rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
          "3xl": "1600px",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1600px",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        '2xl': ['1.563rem', {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],
        '3xl': ['1.953rem', {
          lineHeight: '2.25rem',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        }],
        '4xl': ['2.441rem', {
          lineHeight: '2.5rem',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        }],
        '5xl': ['3.052rem', {
          lineHeight: '1',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        }],
      },
      fontFamily: {
        inter: "var(--font-inter)",
        roboto: "var(--font-roboto)",
        sourceCodePro: "var(--font-source-code-pro)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 2s ease 1000ms",
      },
    },
  },
  plugins: [],
};
export default config;

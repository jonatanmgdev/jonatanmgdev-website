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
          dark: "#00B377",
          deep: "#00764F",
        },
        neutral: {
          light: "#3C3C3C",
          medium: "#2D2D2D",
          dark: "#222222",
          deep: "#121212",
        },
        textcolor: {
          primary: "#E0E0E0",
          secondary: "#B3B3B3",
          heading: "#F5F5F5",
          accent: "#00B377",
        },
      },
      container: {
        screens: {
          xs: "460px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px",
          "3xl": "1600px",
          "4xl": "1920px",
        },
        padding: {
          DEFAULT: "1rem",
          xs: "1rem",
          sm: "2rem",
          md: "3rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
          "3xl": "8rem",
          "4xl": "10rem", 
        },
        center: true,
      },
      fontSize: {
        sm: [
          "0.8rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        xl: "1.25rem",
        "2xl": [
          "1.563rem",
          {
            lineHeight: "2rem",
            letterSpacing: "-0.01em",
            fontWeight: "700",
          },
        ],
        "3xl": [
          "1.953rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "4xl": [
          "2.441rem",
          {
            lineHeight: "2.5rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "5xl": [
          "3.052rem",
          {
            lineHeight: "1",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
      },
      fontFamily: {
        inter: "var(--font-inter)",
        roboto: "var(--font-roboto)",
        sourceCodePro: "var(--font-source-code-pro)",
      },
      backgroundImage: {
        "welcome-section-background":
          "url('/assets/images/welcome-section-background.webp')",
        "aboutme-section-background":
          "url('/assets/images/aboutme-section-bg.webp')",
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

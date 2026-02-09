/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7C3AED",
          dark: "#5B21B6",
          light: "#A78BFA",
        },
        dark: {
          DEFAULT: "#0F0A1E",
          secondary: "#1A1333",
          tertiary: "#2A1F4D",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        glow: "radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(124, 58, 237, 0.5)",
        "glow-lg": "0 0 40px rgba(124, 58, 237, 0.6)",
      },
    },
  },
  plugins: [],
  include: ["src/**/*", "src/**/*.d.ts"],
};

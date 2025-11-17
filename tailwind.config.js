export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
        lora: ["Lora", "serif"],
      },
      colors: {
        "floria-red": "#8B0000",
        "floria-dark": "#5C0000",
        "floria-light": "#A52A2A",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        glow: "glow 2s ease-in-out infinite alternate",
        shimmer: "shimmer 3s linear infinite",
        sparkle: "sparkle 2s ease-in-out infinite",
        "gentle-pulse": "gentle-pulse 4s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "fade-in": "fade-in 0.8s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        butterfly: "butterfly 8s ease-in-out infinite",
        "flower-float": "flower-float 6s ease-in-out infinite",
        "particle-float": "particle-float linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        glow: {
          "0%": {
            boxShadow:
              "0 0 20px rgba(255, 255, 255, 0.2), 0 0 40px rgba(255, 182, 193, 0.1)",
          },
          "100%": {
            boxShadow:
              "0 0 40px rgba(255, 255, 255, 0.4), 0 0 60px rgba(255, 182, 193, 0.3), 0 0 80px rgba(255, 105, 180, 0.2)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1) rotate(0deg)" },
          "50%": { opacity: "1", transform: "scale(1.2) rotate(180deg)" },
        },
        "gentle-pulse": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        butterfly: {
          "0%, 100%": { transform: "translateY(0) translateX(0) rotate(0deg)" },
          "25%": {
            transform: "translateY(-30px) translateX(20px) rotate(5deg)",
          },
          "50%": {
            transform: "translateY(-50px) translateX(-10px) rotate(-5deg)",
          },
          "75%": {
            transform: "translateY(-20px) translateX(15px) rotate(3deg)",
          },
        },
        "flower-float": {
          "0%, 100%": {
            transform: "translateY(0) translateX(0) rotate(0deg) scale(1)",
          },
          "25%": {
            transform:
              "translateY(-25px) translateX(10px) rotate(5deg) scale(1.05)",
          },
          "50%": {
            transform:
              "translateY(-40px) translateX(-5px) rotate(-5deg) scale(1.1)",
          },
          "75%": {
            transform:
              "translateY(-15px) translateX(8px) rotate(3deg) scale(1.02)",
          },
        },
        "particle-float": {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "0.3" },
          "50%": { opacity: "1" },
          "100%": {
            transform: "translateY(-100vh) translateX(20px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};

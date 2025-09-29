import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-deep": "#6B46C1",
        "purple-vibrant": "#8B5CF6",
        "pink-hot": "#EC4899",
        "pink-light": "#F472B6",
        "gray-soft": "#F8FAFC",
        "gray-medium": "#64748B",
        "gray-dark": "#1E293B",
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
      },
      borderRadius: {
        xl: "12px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config;

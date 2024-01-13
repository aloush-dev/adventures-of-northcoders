import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      minHeight: {
        "screen-act": `calc(100vh - 128px)`,
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fromDownToUp: {
          from: {
            transform: 'translate3d(0, 0, 0)'
          },
          to: {
            transform: 'translate3d(0, -50px, 0)'
          }
        },
        fromUpToDown: {
          from: {
            opacity: '1',
            transform: 'translate3d(0, -50px, 0)'
          },
          to: {
             opacity: '0',
            transform: 'translate3d(0, 0px, 0)'
          }
        }
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        fromDownToUp: "fromDownToUp 0.72s alternate",
        fromUpToDown: "fromUpToDown 0.72s forwards"
      },
      fontFamily: {
        poppins: 'var(--font-poppins)'
      }
    },
  },
  plugins: [],
} satisfies Config;

// tailwind.config.js
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Maison Neue"', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
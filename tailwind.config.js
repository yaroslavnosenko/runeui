import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'
import themes from 'daisyui/src/theming/themes'
import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...themes['light'],
          'base-content': '#121416',
          accent: colors.teal[500],
          'accent-content': '#fbfdff',
        },
      },
      {
        dark: {
          ...themes['dark'],
          'base-content': '#fbfdff',
          accent: colors.teal[200],
        },
      },
    ],
  },
}

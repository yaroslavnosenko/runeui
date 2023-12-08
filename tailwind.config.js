import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'
import themes from 'daisyui/src/theming/themes'

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
          'base-content': '#000204',
          'base-100': '#fbfdff',
          'base-200': '#f1f2f3',
        },
      },
      {
        dark: {
          ...themes['dark'],
          'base-content': '#fbfdff',
          'base-100': '#000204',
          'base-200': '#141618',
        },
      },
    ],
  },
}

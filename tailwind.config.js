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
          'base-content': '#030405',
          'base-100': '#fbfdff',
          'base-200': '#eef0f2',
          'base-300': '#e2e4e6',
        },
      },
      {
        dark: {
          ...themes['dark'],
          'base-content': '#fbfdff',
          'base-300': '#181f25',
          'base-200': '#0d1215',
          'base-100': '#030405',
        },
      },
    ],
  },
}

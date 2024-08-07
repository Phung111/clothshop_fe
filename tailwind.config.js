/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        default: '#fff',
        primary: '#f53d2d',
        primary_dark: '#CE451F',
        gray: '#f5f4f4',
        gray2: '#ededed',
        gray3: '#fafafa',
        gray4: '#fbfbfb',
        gray5: '#F5F5F9',
        gray6: '#ABABAB',
        gray7: '#c4c4c4',
        red: '#d0001a',
        red_dark: '#A80014',
        blue: '#4080EE',
        blue_dark: '#3060BB',
        beige: '#febda7',
        beige_dark: '#CD836A',
        beige2: '#ffeee8',
        beige2_dark: '#FFDED2',
      },
    },
  },
  plugins: [],
}

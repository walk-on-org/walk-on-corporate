/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'top-cover-1': "url('/image/top/top-cover-1.jpeg')",
        'top-cover-2': "url('/image/top/top-cover-2.jpeg')",
      },
      colors: {
        primary: '#00acc3',
        secondary: '#bb92e2',
      },
    },
    fontFamily: {
      gothic: ['MS Ｐゴシック', 'MS PGothic', 'sans-serif'],
      ubuntu: ['Ubuntu', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      const newUtilities = {
        '.horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        '.vertical-rl': {
          writingMode: 'vertical-rl',
        },
        '.vertical-lr': {
          writingMode: 'vertical-lr',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};

const colors = {
  blackmatte: '#28282B',
  smoothgray: '#F6F6F6',
  abbeyblack: '#494F55',
  brand: '#ffbd59',
  facebook: '#3B5998',
  google: '#db4a39',
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      opacity: {
        1: '0.04',
      },
    },
  },
  plugins: [],
};
// module.exports = {
//     purge: [],
//     darkMode: false,
//     theme: {
//       extend: {},
//     },
//     variants: {},
//     plugins: [],
//   };
  
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

// module.exports = {
//     purge: [],
//     darkMode: false,
//     theme: {
//       extend: {},
//     },
//     variants: {},
//     plugins: [],
//   };
  
// module.exports = {
//   mode: 'jit',
//   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  // mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // colors: {
      //   "dark-purple": "#081A51",
      //   "light-white": "rgba(255,255,255,0.17)",
      // },
      colors: () => ({
        darkPurple: "#081A51",
        lightWhite: "rgba(255,255,255,0.17)",
        lightPrimary: "#F4F7FE",
        navy: {
          50: "#d0dcfb",
          100: "#aac0fe",
          200: "#a3b9f8",
          300: "#728fea",
          400: "#3652ba",
          500: "#1b3bbb",
          600: "#24388a",
          700: "#1B254B",
          800: "#111c44",
          900: "#0b1437",
        },
        gray: {
          50: "#f8f9fa",
          100: "#edf2f7",
          200: "#e9ecef",
          300: "#cbd5e0",
          400: "#a0aec0",
          500: "#adb5bd",
          600: "#a3aed0",
          700: "#707eae",
          800: "#252f40",
          900: "#1b2559",
        },
      })
    },
  },
  plugins: [],
};

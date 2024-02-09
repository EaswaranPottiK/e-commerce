/** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {
//       purge: [
//         './src/**/*.{js,jsx,ts,tsx}',
//         './public/index.html',
//       ],
//     },
//   },
//   plugins: [],
// }
// tailwind.config.js

export default  {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


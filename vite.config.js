// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// import { defineConfig } from 'vite';
// import reactRefresh from '@vitejs/plugin-react-refresh';

// export default defineConfig({
//   plugins: [reactRefresh()],
//   css: {
//     postcss: {
//       plugins: [
//         require('tailwindcss'),
//         require('autoprefixer'),
//       ],
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";


// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
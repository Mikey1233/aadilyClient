// // import { defineConfig } from 'vite'
// // import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// // // https://vite.dev/config/
// // export default defineConfig({
// //   plugins: [
// //     tailwindcss(),
// //     react({
// //       babel: {
// //         plugins: [['babel-plugin-react-compiler']],
// //       },
// //     }),
// //   ],
// // })


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from 'path' // 1. Import path

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//      tailwindcss(), 
//     react({
//       babel: {
//         plugins: [['babel-plugin-react-compiler']],
//       },
//     }),
//   ],
//   resolve: {
//     alias: {
//       // 3. This makes the "@" symbol work in your code
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' 
import { fileURLToPath } from 'url' // Required for __dirname in ESM

// Fix for __dirname in modern Node/Vite
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    tailwindcss() ,
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  resolve: {
    alias: {
      // This enables the "@" alias
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
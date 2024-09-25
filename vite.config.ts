import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react(),
    svgr({
      svgrOptions: { exportType: 'named', ref: true, svgo: false, titleProp: true, icon: true

       },
      include: '**/*.svg',
    }),
  ],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
    // preprocessorOptions: {
    //   scss: {
    //     additionalData: `@import "@/styles/variables.scss";`,
    //   },
    // },
  },
})

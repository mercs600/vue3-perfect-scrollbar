import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      copyDtsFiles: true,
      exclude: ['src/main.ts'],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'PerfectScrollbar',
      fileName: 'vue3-perfect-scrollbar',
    },
    rollupOptions: {
      external: ['vue', 'perfect-scrollbar'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})

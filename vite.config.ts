import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
    host: true,
    strictPort: true
  },
  base: './',
  plugins: [vue(), vueJsx(), WindiCSS({})],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

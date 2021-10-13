import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    Icons({
      autoInstall: true,
    }),
    WindiCSS({
      config: {
        attributify: true,
      },
    }),
  ],
})

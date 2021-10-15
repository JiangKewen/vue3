import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 3003,
    open: true,
    proxy: {
      '^/mook': {
        target: 'http:jkw.ccc:9999',
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/mook/, '')
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    // assetsDir: '../dist/assets'
  }
})

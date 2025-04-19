import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  /*将@替换为src方便使用*/
  resolve: {
    alias: [{
      find: '@', replacement: '/src'
    }
    ]
  }
})

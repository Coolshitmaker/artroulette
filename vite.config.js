import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'home.html',
        commmission: 'commission.html',
        tos: 'tos.html',
      }
    }
  }
})

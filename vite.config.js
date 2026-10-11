import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),     
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        short_name: 'Reminder',
        name: 'Reminder App',
        description: 'This app is built on React',
        icons: [
          {
            src: '/reminder-128.png',
            sizes: '192x192',
            type: 'icon.png'
          },
          {
            src: '/reminder-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        start_url: '/',
        display: 'standalone',
        theme_color: 'black',
        background_color: 'white'
      }
    }),
  ],
})

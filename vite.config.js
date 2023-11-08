import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
    server: {
        port: 8080,
        https: true
    }, // Not needed for Vite 5+
    plugins: [mkcert()]
})
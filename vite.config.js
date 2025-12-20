import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
    base:'/kbiam-landing/',
    plugins: [
        tailwindcss(),
    ],
})

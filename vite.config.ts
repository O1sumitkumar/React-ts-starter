import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
const base = '/vertical/';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? base : '/',
  build: {
    outDir: 'dist', // Specify the output directory
  },
});

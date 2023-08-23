import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        xo: 'https://xo.alanlai.app/assets/remoteEntry.js',
        pairs: 'https://pairs.alanlai.app/assets/remoteEntry.js',
        hangman: 'https://hangman.alanlai.app/assets/remoteEntry.js',
        spr: 'https://scissors-paper-rock.alanlai.app/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'], 
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  }
})

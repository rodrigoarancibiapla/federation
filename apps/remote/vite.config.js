import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote-app', // Nombre de la aplicación remota
      filename: 'remoteEntry.js', // Nombre del archivo de entrada remoto
      exposes: {
        './Button': './src/components/Button.jsx', // Expone el componente Button
        './DivWithButton': './src/components/DivWithButton.jsx', // Expone el componente Button
        './ButtonTS': './src/components/ButtonTS.tsx',
      },
      shared: ['react', 'react-dom'], // Comparte dependencias
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 3002,
  },
  preview: {
    host: '0.0.0.0',
    port: 3002,
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
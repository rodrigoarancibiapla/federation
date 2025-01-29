import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host-app', // Nombre de la aplicación host
      remotes: {
        // Aquí defines las aplicaciones remotas que quieres consumir
        remoteApp: 'http://localhost:3002/assets/remoteEntry.js', // URL del archivo remoto
      },
      shared: ['react', 'react-dom'], // Dependencias compartidas
    }),
    
  ],
  server: {
    host: '0.0.0.0',
    port: 3001,
  },
  preview: {
    host: '0.0.0.0',
    port: 3001,
  },
  build: {
    modulePreload: false, // Desactiva la precarga de módulos
    target: 'esnext', // Usa el estándar más moderno de JavaScript
    minify: false, // Desactiva la minificación (opcional, útil para desarrollo)
    cssCodeSplit: false, // Desactiva la división de CSS (opcional)
  },
});
#// filepath: /home/rodrigo/code/camp/federation/apps/remote/Dockerfile
FROM node:20-alpine

WORKDIR /app

# Copiamos el package.json y package-lock.json del monorepo
COPY ../../package.json ../../package-lock.json ./

# Instalamos las dependencias del monorepo
RUN npm install

# Copiamos las carpetas de la aplicación remote
COPY . .

# Construimos la aplicación
RUN npm run build --workspace remote

# Instalamos serve para servir la aplicación construida
RUN npm install -g serve

# Exponemos el puerto para el remote
EXPOSE 3002

# Comando para servir la aplicación construida
CMD ["serve", "-s", "apps/remote/dist", "-l", "3002"]
# frontend/Dockerfile.dev
FROM node:20-alpine

WORKDIR /app

# Copiamos los archivos de configuración primero
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del proyecto
COPY . .

# Exponemos el puerto
EXPOSE 4201

# Comando por defecto: correr Angular con ng serve
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0", "--port", "4201"]

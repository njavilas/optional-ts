# Usa la imagen oficial de Node.js
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /workspace

# Copia el archivo package.json y package-lock.json (si está presente)
COPY package*.json ./

# Instala las dependencias de Node.js
RUN npm install

# Copia todo el código fuente al contenedor
COPY . .
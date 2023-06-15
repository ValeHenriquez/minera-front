# Establece la imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de paquete e instalalos
COPY package*.json ./
RUN npm install

# Copia el código fuente de la aplicación
COPY . .

# Compila la aplicación
RUN npm run build

# Instala Python y las dependencias
RUN apt-get update && apt-get install -y python3-venv
COPY requirements.txt .
RUN python3 -m venv /venv
RUN /venv/bin/pip install --upgrade pip
RUN /venv/bin/pip install -r requirements.txt

# Expone el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Inicia la aplicación Next.js
CMD ["/venv/bin/npm", "start"]

FROM node:alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY index.js .
COPY config.json .

RUN npm install
RUN npm start

EXPOSE 9000
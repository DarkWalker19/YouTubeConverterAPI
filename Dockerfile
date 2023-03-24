FROM node:alpine3.12

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY index.js .
COPY config.json .

RUN npm install
CMD ["npm", "start"]

EXPOSE 9000
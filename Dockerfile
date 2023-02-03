FROM node:alpine

WORKDIR /app

ARG node_env=dev
ENV PORT=8080

VOLUME src/
COPY ./package*.json ./
RUN npm install
COPY src/ ./src
COPY public/ ./public

CMD ["npm", "run", "server"]
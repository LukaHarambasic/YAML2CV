FROM node:lts-alpine

LABEL maintainer "Anibal Aguila <aa@stk.ac>"

WORKDIR /app

RUN apk add --no-cache bash

RUN npm install -g pm2

COPY package.json package-lock.json ecosystem.config.js /app/

RUN npm install

COPY . /app/

RUN npm run build


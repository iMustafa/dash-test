FROM node:14
FROM jrottenberg/ffmpeg:3.3

WORKDIR /usr/app
COPY package*.json ./
RUN npm install --quiet

RUN apk add  --no-cache ffmpeg

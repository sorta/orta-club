FROM node:14.16-slim

EXPOSE 4200 7020 7357

RUN npm i -g npm@latest
RUN npm i -g ember-cli@3.20

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --no-optional && npm cache clean --force

COPY . .

# CMD ["ember", "serve"]

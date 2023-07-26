FROM node:20-alpine3.17 as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build
EXPOSE 3000
CMD [ "yarn", "start" ]
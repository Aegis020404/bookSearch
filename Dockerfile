FROM node:12-alpine as builder
WORKDIR /
COPY package.json /package.json
RUN npm install
COPY . /

RUN npm run build
FROM node:12-alpine
WORKDIR /
COPY --from=builder /dist /app
COPY package.json /package.json
RUN npm install --only=prod
EXPOSE 8080
USER node
CMD ["node", "index.js"]

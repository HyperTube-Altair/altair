FROM node:iron-alpine as build

EXPOSE 3000
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm ci

FROM build as dev

COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/package.json /app/package.json

CMD ["npm", "run", "dev"]
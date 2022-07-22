FROM node:16.16.0-slim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json yarn.lock ./

RUN yarn install

COPY src .
COPY tsconfig.json tsconfig.json

RUN yarn build

EXPOSE 8443

CMD [ "node", "dist/index.js" ]
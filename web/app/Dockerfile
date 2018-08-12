FROM node:8

ADD package.json /tmp/package.json
RUN cd /tmp && yarn install
RUN mkdir -p /app && cp -a /tmp/node_modules /app/

WORKDIR /app
COPY . ./
RUN yarn install

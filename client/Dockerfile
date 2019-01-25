FROM node:11-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install --silent


ADD src /usr/src/app/src
ADD public /usr/src/app/public

CMD [ "npm", "start" ]
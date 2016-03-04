FROM node:5.7.1

EXPOSE 5678

RUN mkdir /src
WORKDIR /src

COPY package.json .
RUN npm install

COPY . .

CMD node index.js

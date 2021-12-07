FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
RUN mv flag.txt /etc/flag

EXPOSE 8001

CMD [ "node", "index.js" ]

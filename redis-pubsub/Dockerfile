from node

WORKDIR /var/www/app

RUN apt-get update
RUN npm install express socket.io socket.io-redis

COPY ./server .

CMD node server.js
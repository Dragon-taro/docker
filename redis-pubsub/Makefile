ws/build:
	docker build ./ -t websocket

ws/run:
	docker run -it --rm -d --name websocket --link redis:redis -p 3000:3000 websocket

ws/kill:
	docker kill websocket

ws/exec:
	docker exec -it websocket /bin/bash

start: server/static/js/bundle.js
	docker-compose up -d

server/static/js/bundle.js:
	npm i
	npm run build
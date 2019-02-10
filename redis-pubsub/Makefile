build:
	docker build ./ -t websocket

run:
	docker run -it --rm -d --name websocket --link redis:redis -p 3000:3000 websocket

kill:
	docker kill websocket

exec:
	docker exec -it websocket /bin/bash
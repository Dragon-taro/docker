build:
	ng build
	docker build ./ -t angular

run:
	! docker ps | grep angular || make kill
	docker run -d -it --rm -p 8000:8000 --name angular angular

exec:
	! docker ps | grep angular || docker exec -it angular /bin/bash

kill:
	! docker ps | grep angular || docker kill angular

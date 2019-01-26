build:
	ng build
	docker build ./ -t angular

run:
	docker run -d -it --rm -p 8000:8000 --name angular angular

exec:
	docker exec -it angular /bin/bash

kill:
	docker kill angular


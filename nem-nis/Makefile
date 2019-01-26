docker/build:
	docker build ./ -t nem-nis

docker/start:
	docker run --rm -d -p 7890:7890 --name nis-container nem-nis

docker/exec:
	docker exec -it nis-container /bin/bash

docker/stop:
	docker kill nis-container

docker/rm:
	docker rm nis-container

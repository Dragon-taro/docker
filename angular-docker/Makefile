build: angular/build nginx/build

run:
	make angular/run
	make nginx/run

kill: angular/kill nginx/kill

angular/build:
	ng build
	docker build ./ -t angular

angular/run:
	! docker ps | grep angular || make kill
	docker run -d -it --rm -p 8000:8000 --name angular angular

angular/exec:
	! docker ps | grep angular || docker exec -it angular /bin/bash

angular/kill:
	! docker ps | grep angular || docker kill angular

nginx/build:
	docker build ./nginx/ -t original-nginx

nginx/run:
	! docker ps | grep original-nginx || make nginx/kill
	docker run -d -it --rm -p 8080:80 --link angular:ng --name original-nginx original-nginx /bin/bash

nginx/exec:
	! docker ps | grep original-nginx || docker exec -it original-nginx /bin/bash

nginx/kill:
	! docker ps | grep original-nginx || docker kill original-nginx

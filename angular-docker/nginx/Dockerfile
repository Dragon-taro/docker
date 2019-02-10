FROM nginx

RUN apt-get update && apt-get install curl -y && rm -f /etc/nginx/conf.d/default.conf

COPY ./default.conf /etc/nginx/conf.d/

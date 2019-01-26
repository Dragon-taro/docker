FROM debian

# debianに入っているpackageのupdateとcurlコマンドとwgetとgnpupg?のインストール
RUN apt-get update && apt-get install -my curl wget gnupg procps -y

# node.jsのインストール（参考: https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions）
RUN curl -sL https://deb.nodesource.com/setup_11.x | bash - \
    && apt-get install -y nodejs

# /var/wwwにアプリケーションを設置するために移動
WORKDIR /var/www/app

# buildされたファイルをホストOSからコンテナ内の/var/wwwに持ってくる
COPY ./dist .

# expressをinstallする
RUN npm install express

# コンテナ起動時にserverを起動
CMD node server.js

# AngularDocker

angularをdockderコンテナの中で動かしてみようってやつ。buildしたファイルをコンテナに送って、それをexpressでホスティングしてコンテナ外に8000ポートで接続してる。さらにそれをnginxでプロキシしてる。nginxは8080でlistenして、angularの8000を見に行く仕様。

## 動かし方

```
# angularのbuildとdockerのbuild、nginxのbuild全部やってくれる
$ make build

# 片方だけbuildしたいってときは、
$ make angualar/build

# コンテナ作成
$ make run
```
これでコンテナ内に8000ポートのangularと8080のnginxが立ち上がってそれをコンテナ外に接続できる。コンテナ間の通信もこれでいける。

## Advance

```
# コンテナの中に入ってみる
$ make angular/exec # angular
$ make nginx/exec # nginx

# コンテナの終了（停止と同時に削除の設定にしてある）
$ make kill
```

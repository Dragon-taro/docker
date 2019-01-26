# AngularDocker

angularをdockderコンテナの中で動かしてみようってやつ。buildしたファイルをコンテナに送って、それをexpressでホスティングしてコンテナ外に8000ポートで接続してる。

## 動かし方

```
# angularのbuildとdockerのbuild両方やってくれる
$ make build

# コンテナ作成
$ make run
```
これでコンテナ内に8000ポートのサーバーが立ち上がってそれをコンテナ外に接続できる。

## Advance

```
# コンテナの中に入ってみる
$ make exec

# コンテナの終了（停止と同時に削除の設定にしてある）
$ make kill
```

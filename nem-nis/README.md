# NISノードのdocker container

```
$ make docker/build
$ make docker/run
```

これで動くはず。

## 課題
- docker/runがこれで動くか怪しい
- docker/execとかでコンテナの中に入れるようにする
- 解放するポートの設定
- dbの同期の高速化
- Dockerfileを綺麗に書く（環境変数とかdebianのversionとか）

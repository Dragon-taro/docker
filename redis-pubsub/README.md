# redisのPub/Subを試してみた

## 概要
websocketを実装したnodeのサーバーが3000ポートと3001ポートでlistenするコンテナの中に立ち上がり、それらをPub/Subで繋ぐredisのコンテナも作られます。

異なるコンテナ間でのwsの同期が実現できます。

## サンプル

![](sample.gif)

## 動かし方

```
make start
```

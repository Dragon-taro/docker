# Dockerfile of c-lightning for CentOS

## build

```
$ docker build --t c-lightning ./
```

## run
```
$ docker run -itd -name c-lightning c-lightning
$ docker exec -it c-lightning /bin/bash
[root@e96efd4a0f90 lightning]# ./lightningd/lightningd & ./cli/lightning-cli
```

## note
This image dose'n include bitcoind, so you'll get below error.
```
2019-04-04T05:06:36.590Z lightningd(26003): Creating database
2019-04-04T05:06:36.881Z lightning_hsmd(26012): HSM: created new hsm_secret file
bitcoin-cli not found. Is bitcoin-cli (part of Bitcoin Core) available in your PATH?

Make sure you have bitcoind running and that bitcoin-cli is able to connect to bitcoind.

You can verify that your Bitcoin Core installation is ready for use by running:

    $ bitcoin-cli -testnet echo 'hello world'
```

## Udemy教材演習記録です

### 範囲

####  §３ 環境構築
#### (#28) docker-compose 

  ---

##### コマンドラインから直接コンテナ利用するやり方

```bash
$ docker run -d -p 80:80 --name my-apache-php-app -v ${PWD}:/var/www/html php:7.2-apache
```
このような「長いコマンド」をコンテナを起動するたびに打つのは、かなり面倒なので、docker-compose.ymlファイルに保尊して使いまわすという考え方が生まれた。

##### docker-compose.ymlファイルの書き方手順

1. 公式ドキュメントにアクセスする
    - 「docker compose」で検索し「https://docs.docker.jp/compose
」にアクセスする

1. アクセス先の「Docker Compose 概要」記事の中にdocker-compose.ymlファイルの実例があるのでこれをコピーして作業の雛形として利用する

> docker-compose.yml
> ```yml
> version: "3.9"  # v1.27.0 からはオプション
> services:
>   web:
>     build: .
>     ports:
>       - "8000:5000"
>     volumes:
>       - .:/code
>       - logvolume01:/var/log
>     links:
>       - redis
>   redis:
>     image: redis
> volumes:
>   logvolume01: {}
> ```
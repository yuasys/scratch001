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

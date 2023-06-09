## Udemy教材演習記録です

### 範囲

  §３：(#28) docker-compose 

  ---

### コマンドラインから直接コンテナ利用するやり方

```bash
$ docker run -d -p 80:80 --name my-apache-php-app -v ${PWD}:/var/www/html php:7.2-apache
```

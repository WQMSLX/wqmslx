---
title: 项目环境搭建
index: true
# icon: code
tag: PostgreSQL
star: false
tip: 基础环境docker已安装在这里省略
---
## 安装数据库（PostgreSQL）

详情参考[docker下载并启动PostgreSQL](/study/container/docker/1_docker_postgreSQL.md)

### 1.拉取postgreSQL
如果本地没有，需要从远程仓库中拉去 

```sh
sudo docker pull postgres:latest
```

### 2.设置Docker卷
这里先以mall-admin模块为例
```sh
sudo docker volume create mall-admin
```
### 3.部署容器
```sh
sudo docker run -d --name=mall-admin -p 54321:5432 -v postgres-volume:/var/lib/postgresql/mall—admin/data -e POSTGRES_PASSWORD=123456 postgres
```

## docker拉取mysql
### 1.在idea中配置docker路径
在配置->docker->tool中配置数据库路径

### 2.配置docker-compose
根据网上配置如下:
```yml
version: '3'
services:
  mysql:
    image: mysql:8
    container_name: mysql
    command: mysqld --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: root #设置root帐号密码
    ports:
      - 3306:3306
    volumes:
      - /usr/mysql/data:/var/lib/mysql #数据文件目录挂载
      - /usr/mysql/conf:/etc/mysql/conf.d #配置文件目录挂载
      - /usr/mysql/log:/var/log/mysql #日志文件目录挂载
```




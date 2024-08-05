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
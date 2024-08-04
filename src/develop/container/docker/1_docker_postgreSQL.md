---
title: docker下载并启动PostgreSQL
index: true
# icon: code
tag: docker,PostgreSQL
star: true
---
PostgreSQL是一个开源的对象关系数据库管理系统。它已经存在了 30 多年，并标榜自己是“世界上最先进的开源关系数据库”。

在轻松打包、部署和运行分布式应用程序方面，Docker已成为 IT 行业的标准。Docker 容器让您可以快速启动新应用程序，而不会因依赖项而使您的系统变得混乱。

您可以使用 Docker 在容器中运行 PostgreSQL 数据库，就像它是远程服务器一样。Docker 容器基于开放标准，使容器能够在所有主要Linux 发行版、MacOS 和 Microsoft Windows 上运行。

在 Docker 中运行 PostgreSQL
我们在这里要做的是下载PostgreSQL镜像，检查镜像是否准备好，使用特定参数运行镜像，最后连接到正在运行的PostgreSQL实例。

## 1. 拉取一个 PostgreSQL 服务器 Docker 镜像

首先，我们需要从Docker Hub获取现有的 PostgreSQL 官方镜像。镜像适用于 PostgreSQL 版本 9、10、11、12 和 13。如果您需要特定版本，latest 请将标签更改 为所需版本。

现在让我们拉取图像：

```sh
sudo docker pull postgres:latest
```

使用上述命令将从 Docker Hub 存储库中提取最新可用版本的 PostgreSQL。

## 2. 从 PostgreSQL 服务器 Docker 镜像运行容器

在部署之前，您需要设置一个 Docker 卷或绑定安装来持久化您的数据库。否则，当容器重新启动时，您的数据将丢失。安装应该 /var/lib/postgresql/data 在容器内的目录中。

出于本指南的目的，我们将创建一个 docker 卷并将其附加到您的 PostgreSQL 容器。

以下命令将在您的本地计算机中创建卷，您可以稍后与 PostgreSQL 容器连接：

```sh
sudo docker volume create postgres-volume
```

现在你的机器上有 PostgreSQL 镜像和一个用于保存数据的卷，你可以部署一个容器：

```sh
sudo docker run -d --name=postgres13 -p 5432:5432 -v postgres-volume:/var/lib/postgresql/data -e POSTGRES_PASSWORD=your_password postgres
```

该 docker run 命令将在 Docker 容器中创建一个正在运行的 PostgreSQL 数据库。

让我们分解一下这个语法。以下是该命令中每个参数的含义：

-d 将以分离模式运行此容器，以便它在后台运行。
--name 将名称“postgres13”分配给您的容器实例。
-p会将 PostgreSQL 容器端口 5432 绑定到主机上的相同端口。您将能够localhost:5432 使用psql在您的主机上运行的PostgreSQL 客户端 ( )进行连接 。
-v选项将容器卷 ( /var/lib/postgresql)内的数据文件夹绑定到postgres-volume您在上一步中创建的本地 Docker 卷 ( )。
-e设置环境变量。在这种情况下，PostgreSQL 根密码。
postgres 是我们用来创建容器的图像的名称。
您可以通过列出正在运行的容器来检查容器是否正在运行：

```sh
sudo docker ps
CONTAINER ID   IMAGE   COMMAND   CREATED   STATUS   PORTS   NAMES
6cb3293fe725   postgres   "docker-entrypoint.s…"   19 minutes ago   Up 19 minutes   0.0.0.0:5432->5432/tcp, :::5432->5432/tcp   postgres13
```

恭喜！您的新 PostgreSQL 实例现在正在 Docker 上运行。

此外，您可以使用以下命令检查正在运行的 PostgreSQL 容器的日志文件：

```sh
sudo docker logs postgres13
```

## 3. 连接到PostgreSQL服务器

您可以通过附加到容器并运行psql命令来获得交互式 PostgreSQL shell 。这提供了完整的 PostgreSQL 命令行界面，因此您可以使用所有熟悉的命令和标志。

```sh
sudo docker exec -it postgres13 psql -U postgres
```

psql如果您在主机上预安装了PostgreSQL 客户端，您还可以使用PostgreSQL 客户端连接 PostgreSQL Docker 实例。

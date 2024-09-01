---
title: vcpkg 安装
index: true
# icon: code
tag: C++，vcpkg，env
star: true
---
## 1.安装vcpkg
```bash
git clone https://github.com/microsoft/vcpkg.git
cd vcpkg
./bootstrap-vcpkg.sh
./vcpkg integrate install
```
## 2. 配置环境变量
我路径如下：
```sh
echo "export VCPKG_ROOT=/mnt/e/Develop/vcpkg" >> ~/.bashrc
echo "export PATH=\$PATH:\$VCPKG_ROOT/" >> ~/.bashrc

source ~/.bashrc
```
执行成功后，执行vcpkg命令，检查环境变量是否配置成功
## 3. 在cmakelist.txt 中配置包
TODO

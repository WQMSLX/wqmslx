---
title: vcpkg 安装
index: true
# icon: code
tag: C++，vcpkg，env
star: true
order: 2
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
```bash
echo "export VCPKG_ROOT=/mnt/e/Develop/vcpkg" >> ~/.bashrc
echo "export PATH=\$PATH:\$VCPKG_ROOT/" >> ~/.bashrc

source ~/.bashrc
```
执行成功后，执行vcpkg命令，检查环境变量是否配置成功
## 3. 配置vscode
setting文件中配置如下：

   这里环境变量生效但是获取不到路径`${env:VCPKG_ROOT}/scripts/buildsystems/vcpkg.cmake`，暂时使用绝对路径
```json
{   
"cmake.configureSettings": {
        "CMAKE_TOOLCHAIN_FILE": "/mnt/e/Develop/vcpkg/scripts/buildsystems/vcpkg.cmake",
        "VCPKG_TARGET_TRIPLET": "x64-linux"
    }
}
```
### 4. 安装gdb
```bash
apt install gdb
```

### 5. cmakeList.txt

安装包
vcpkg install --triplet=x64-linux CMakeLists.txt
使用vcpkg的install命令和--triplet选项来指定目标平台（如果需要），并且从CMakeLists.txt中自动检测依赖
以下时学习使用的demo
```txt
cmake_minimum_required(VERSION 3.20)

project(cplusplus)
add_executable(oatpp-test src/main.cpp)
set(CMAKE_CXX_STANDARD 11)

find_package(oatpp CONFIG REQUIRED)

target_link_libraries(oatpp-test PRIVATE oatpp::oatpp oatpp::oatpp-test)

```

```cpp
#include "oatpp/network/Server.hpp"
#include "oatpp/network/tcp/server/ConnectionProvider.hpp"
#include "oatpp/web/server/HttpConnectionHandler.hpp"

class HelloHandler : public oatpp::web::server::HttpRequestHandler
{
public:
    std::shared_ptr<OutgoingResponse>
    handle(const std::shared_ptr<IncomingRequest> &request) override
    {
        OATPP_LOGI("HelloHandler", "this is a request!");
        auto i = request->getHeaders().get("User-Agent")->c_str();
        OATPP_LOGI("HelloHandler", "User-Agent : %s", i);
        return ResponseFactory::createResponse(Status::CODE_200, "Hello World");
    }
};

void run()
{

    /* Create Router for HTTP requests routing */
    auto router = oatpp::web::server::HttpRouter::createShared();

    router->route("GET", "/hello", std::make_shared<HelloHandler>());
    /* Create HTTP connection handler with router */
    auto connectionHandler =
        oatpp::web::server::HttpConnectionHandler::createShared(router);

    /* Create TCP connection provider */
    auto connectionProvider =
        oatpp::network::tcp::server::ConnectionProvider::createShared(
            {"localhost", 8000, oatpp::network::Address::IP_4});

    /* Create server which takes provided TCP connections and passes them to HTTP
     * connection handler */
    oatpp::network::Server server(connectionProvider, connectionHandler);

    /* Print info about server port */
    OATPP_LOGI("MyApp", "Server running on port %s",
               connectionProvider->getProperty("port").getData());
    /* Run server */
    server.run();
}

int main()
{

    /* Init oatpp Environment */
    oatpp::base::Environment::init();

    /* Run App */
    run();

    /* Destroy oatpp Environment */
    oatpp::base::Environment::destroy();

    return 0;
}
```
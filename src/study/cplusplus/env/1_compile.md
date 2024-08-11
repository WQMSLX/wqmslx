---
title: 从程序编译到掌握CMAKE
index: true
# icon: code
tag: C++，CMAKE
star: true
---
[[tol]]

## 1. 可执行程序生成

可执行程序分生成分以下几个步骤：

1. 编写代码  .bss   未初始化的静态变量或全局变量
2. 预处理    .data  初始的 【数据区】
3. 汇编     .rodata 只读数据段【代码区】
4. 连接     .text   代码 【代码区】
5. 加载  虚拟地址空间：
   1. 内核空间：
   2. 栈区
   3. 文件映射
   4. 堆区
   5. BSS区
   6. 数据
   7. 代码
6. 运行

## 2.CMAKE跨平台的构建工具

### 工作流程

1. CMakeLists.txt
2. cmake
3. 生成makefile .sln .proj
4. make 点击编译，运行

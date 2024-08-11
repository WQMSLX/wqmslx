import { arraySidebar, SidebarArrayOptions } from "vuepress-theme-hope";

export const studySidebar: SidebarArrayOptions = arraySidebar([
  {
    text: "java开发",
    collapsible: true,
    link: "java/",
    prefix: "java/",
    children: "structure",
  },
  {
    text: "容器",
    collapsible: true,
    link: "container/",
    prefix:"container/",
    children: [      {
      text: "docker",
      collapsible: true,
      link: "docker/",
      prefix: "docker/",
      children: "structure",
    },],
  },
  // {
  //   text: "设计模式",

  //   collapsible: true,
  //   link: "design/",
  //   prefix: "design/",
  //   children: "structure",
  // },
  // {
  //   text: "前端开发",
  //   collapsible: true,
  //   link: "front/",
  //   prefix: "front/",
  //   children: "structure",
  // },
  {
    text: "C/C++",
    collapsible: true,
    link: "cplusplus/",
    prefix: "cplusplus/",
    children: [
      {
        text: "c++基础",
        collapsible: true,
        link: "base/",
        prefix: "base/",
        children: "structure",
      },
      {
        text: "开发环境",
        collapsible: true,
        link: "env/",
        prefix: "env/",
        children: "structure",
      },
    ],
  },
]);

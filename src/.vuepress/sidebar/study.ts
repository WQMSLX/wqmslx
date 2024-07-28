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
    text: "设计模式",
  
    collapsible: true,
    link: "design/",
    prefix: "design/",
    children: "structure",
  },
  {
    text: "前端开发",
    collapsible: true,
    link: "front/",
    prefix: "front/",
    children: "structure",
  },
]);

import {arraySidebar, SidebarArrayOptions} from "vuepress-theme-hope";

export const studySidebar: SidebarArrayOptions = arraySidebar([
  {
    text: "后端开发",
    icon: "java",
    collapsible: true,
    children: "structure",
  },
  {
    text: "设计模式",
    icon: "design",
    collapsible: true,
    children: "structure",
  },
  {
    text: "前端开发",
    icon: "front",
    collapsible: true,
    children: "structure",
  },
]);
import { arraySidebar, SidebarArrayOptions } from "vuepress-theme-hope";

export const projectSidebar: SidebarArrayOptions = arraySidebar([
  {
    text: "数据库",
    icon: "sql",
    collapsible: true,
    link: "sql/",
    prefix: "sql/",
    children: "structure",
  },
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
]);

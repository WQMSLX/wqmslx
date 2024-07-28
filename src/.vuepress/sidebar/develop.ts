import { arraySidebar, SidebarArrayOptions } from "vuepress-theme-hope";

export const developSidebar: SidebarArrayOptions = arraySidebar([
  {
    text: "数据库",
    collapsible: true,
    link: "sql/",
    prefix:"sql/",
    children: "structure",
  },
  {
    text: "设计模式",
    collapsible: true,
    children: "structure",
  },
]);

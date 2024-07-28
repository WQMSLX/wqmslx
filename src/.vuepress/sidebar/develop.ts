import { arraySidebar, SidebarArrayOptions } from "vuepress-theme-hope";

export const developSidebar: SidebarArrayOptions = arraySidebar([
  {
    text: "数据库",
    icon: "sql",
    collapsible: true,
    link: "sql/",
    prefix:"sql/",
    children: "structure",
  },
  {
    text: "设计模式",
    icon: "design",
    collapsible: true,
    children: "structure",
  },
]);

import { arraySidebar, SidebarArrayOptions } from "vuepress-theme-hope";

export const projectSidebar: SidebarArrayOptions = arraySidebar([
  {
    text: "数据库",
    icon: "database",
    collapsible: true,
    link: "sql/",
    prefix: "sql/",
    children: "structure",
  },
  {
    text: "后端开发",
    icon: "code",
    collapsible: true,
    link: "backend/",
    prefix: "backend/",
    children: "structure",
  },
]);

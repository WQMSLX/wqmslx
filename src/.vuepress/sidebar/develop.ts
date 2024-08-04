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

]);

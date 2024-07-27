import { arraySidebar, SidebarArrayOptions } from "vuepress-theme-hope";

export const developSidebar: SidebarArrayOptions = arraySidebar([
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

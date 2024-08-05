import { arraySidebar, SidebarArrayOptions } from "vuepress-theme-hope";

export const projectSidebar: SidebarArrayOptions = arraySidebar([
  {
    text: "mall",
    icon: "shop",
    collapsible: true,
    link: "mall/",
    prefix: "mall/",
    children: [{
      text: "前期准备",
      collapsible: true,
      link: "pre/",
      prefix: "pre/",
      children: "structure",
    },]
  }
]);

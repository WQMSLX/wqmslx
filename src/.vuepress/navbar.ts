import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "学习笔记", icon: "book", link: "/study/" },
  { text: "开发日记", icon: "code", link: "/develop/" },
  { text: "项目实战", icon: "bars-progress", link: "/project/" },
]);

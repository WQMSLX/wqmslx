import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "纸飞机的博客",
  description: "纸飞机的博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

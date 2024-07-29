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
  head: [
    [ // 百度统计
      'script',
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?d329c480cfe7d4d2af07d72164336050";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `
    ]
  ],
});

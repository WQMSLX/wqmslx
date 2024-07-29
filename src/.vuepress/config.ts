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
          hm.src = "https://hm.baidu.com/hm.js?8faecec8d7cc152efd21efc848faa3fc";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `
    ]
  ],
});

import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import { Sidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://https://github.com/WQMSLX/wqmslx.github.io",

  author: {
    name: "纸飞机",
    url: "https://wqmslx.github.io",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/assets/icon/ms-icon-144.png",

  repo: "WQMSLX/wqmslx.github.io",

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar: Sidebar,

  // 页脚
  footer: "默认页脚",
  displayFooter: true,

  // 博客相关
  blog: {
    description: "一个java开发工程师",
    intro: "/intro.html",
    medias: {
      GitHub: "https://github.com/wqmslx",
      BiliBili: "https://space.bilibili.com/9632192",
    },
  },

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 多语言配置
  metaLocales: {
    //editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,
  contributors: false,
  // 在这里配置主题提供的插件
  plugins: {
    blog: true,
    searchPro: true,
    // 启用之前需安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      // plantuml: true,
      // spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],

      sub: true,
      sup: true,
      tabs: true,
      // tasklist: true,
      vPre: true,
    },
  },
});

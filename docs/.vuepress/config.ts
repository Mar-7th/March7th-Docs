import { defineUserConfig } from "vuepress";
import { redirectPlugin } from "vuepress-plugin-redirect";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "March7th Docs",
      description: "March7th Docs",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "March7th 文档",
      description: "March7th 文档",
    },
  },

  theme,

  plugins: [
    redirectPlugin({
      autoLocale: true,
      switchLocale: "modal",
    }),
    searchProPlugin({
      indexContent: true,
      locales: {
        "/zh/": {
          placeholder: "搜索",
        },

        "/en/": {
          placeholder: "Search",
        },
      },
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});

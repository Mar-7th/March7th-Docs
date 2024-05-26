import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
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

  bundler: viteBundler(),

  // Enable it with pwa
  // shouldPrefetch: false,
});

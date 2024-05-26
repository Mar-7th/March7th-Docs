import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "资源",
      icon: "ph:package",
      prefix: "resource/",
      children: "structure",
    },
    {
      text: "API",
      icon: "ph:link-simple-horizontal",
      prefix: "api/",
      children: "structure",
    },
  ],
});

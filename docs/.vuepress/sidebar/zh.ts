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
  ],
});

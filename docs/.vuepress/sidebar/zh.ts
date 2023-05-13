import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "安装",
      icon: "install",
      prefix: "install/",
      children: "structure",
    },
    {
      text: "指南",
      icon: "read",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "资源",
      icon: "pic",
      prefix: "resource/",
      children: "structure",
    },
  ],
});

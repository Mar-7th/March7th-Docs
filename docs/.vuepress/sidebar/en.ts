import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      text: "Install",
      icon: "install",
      prefix: "install/",
      children: "structure",
    },
    {
      text: "Guide",
      icon: "read",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "Resource",
      icon: "pic",
      prefix: "resource/",
      children: "structure",
    },
  ],
});

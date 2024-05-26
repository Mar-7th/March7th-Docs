import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      text: "Resource",
      icon: "ph:package",
      prefix: "resource/",
      children: "structure",
    },
  ],
});

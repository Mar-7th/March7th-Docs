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
    {
      text: "API",
      icon: "ph:link-simple-horizontal",
      prefix: "api/",
      children: "structure",
    },
  ],
});

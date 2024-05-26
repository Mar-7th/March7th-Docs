---
title: MiHoMo API
icon: ph:link
category:
  - API
---

## MiHoMo API

### Request Method

MiHoMo API 使用 HTTP GET 方式请求，相关参考：[HTTP GET](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET)。

如果在网站或机器人项目中需要频繁请求 MiHoMo API，请在 User-Agent 中添加应用名称信息，以方便 API 服务调试使用。

当前 API 主站: [https://api.mihomo.me](https://api.mihomo.me/docs)

### API 端点

MiHoMo 提供两种查询游戏玩家公开数据的 API。

_原始数据 API_ 返回原始的玩家数据。你可以在 [Enka](https://enka.network/?hsr) 等其他 API 提供方获取系统数据结构的数据。

_解析数据 API_ 返回解析后的带有文本和图片的玩家数据。你可以根据返回数据中的资源路径在仓库 <https://github.com/Mar-7th/StarRailRes> 中获取图片资源。

- [原始数据 API](raw.md)
- [解析数据 API](parsed.md)

### 问题反馈

如在使用中遇到问题，请加入 Discord 讨论：[![discord](https://img.shields.io/badge/MiHoMo-blue?logo=discord&logoColor=white)](https://discord.gg/SxCGCGSjbX)

---
title: MiHoMo API
icon: ph:link
category:
  - API
---

## MiHoMo API

### Request Method

MiHoMo API uses HTTP GET request, reference：[HTTP GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET).

If you are using MiHoMo API in high frequency, please add your app info in `User-Agent` to avoid being blocked.

Current API host: [https://api.mihomo.me](https://api.mihomo.me/docs)

### API Endpoints

MiHoMo provides two game player public data APIs.

_Raw Data API_ returns original player data. You can also obtain format-compatible data elsewhere, such as [Enka](https://enka.network/?hsr).

_Parsed Data API_ returns parsed player data with text description and images. You can get image files by given path in <https://github.com/Mar-7th/StarRailRes>.

- [Raw Data API](raw.md)
- [Parsed Data API](parsed.md)

### Feedback

For API questions and feedback, join Discord: [![discord](https://img.shields.io/badge/MiHoMo-blue?logo=discord&logoColor=white)](https://discord.gg/SxCGCGSjbX)

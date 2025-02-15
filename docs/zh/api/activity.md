---
title: 用户动态 API
icon: ph:link-simple
order: 3
category:
  - Resource
---

<!-- markdownlint-disable MD036 -->

本页面介绍 MiHoMo 用户动态 API 的使用方式。

<!-- more -->

## 用户动态 API

端点: `/sr_activity/{uid}`

**路径参数**

| 字段名 | 数据类型 | 说明         |
| ------ | -------- | ------------ |
| uid    | string   | 查询玩家 UID |

**请求参数**

| 字段名          | 数据类型 | 默认值 | 说明           | 别名    |
| --------------- | -------- | ------ | -------------- | ------- |
| language        | string   | cn     | 语言           | l, lang |
| is_force_update | bool     | false  | 不使用缓存数据 |         |

支持语言列表：

| 代码 | 语言             |
| ---- | ---------------- |
| cn   | 简体中文         |
| chs  | 简体中文         |
| cht  | 繁體中文         |
| de   | Deutsch          |
| en   | English          |
| es   | Español          |
| fr   | Français         |
| id   | Bahasa Indonesia |
| jp   | 日本語           |
| kr   | 한국어           |
| pt   | Português        |
| ru   | Русский          |
| th   | ภาษาไทย          |
| vi   | Tiếng Việt       |

**请求示例**

```http
GET /sr_activity/100000999?l=cn HTTP/1.1
Host: api.mihomo.me
User-Agent: Your-App-Name
```

**响应数据**

参考响应数据：

```json
{
  "uid": "100000999",
  "info": [
    {
      "type": "pure_fiction",
      "text": "完成了「末日幻影•煽动螟蝗·难度04」",
      "timestamp": 1737443137,
      "content": {
        "id": "30064",
        "param": null,
        "icon": "icon/sign/DailyQuestChallengeStoryIcon.png"
      }
    },
    {
      "type": "event",
      "text": "完成了活动「地宫迷踪」",
      "timestamp": 1737751248,
      "content": {
        "id": "50026",
        "param": null,
        "icon": "icon/sign/ActivityIcon.png"
      }
    },
    {
      "type": "apocalyptic_shadow",
      "text": "完成了「虚构叙事•陈腔滥调其四」",
      "timestamp": 1738569859,
      "content": {
        "id": "20124",
        "param": null,
        "icon": "icon/sign/DailyQuestChallengeStoryIcon.png"
      }
    }
  ]
}
```

参考 Python 数据结构：

```python
# uncomment if you are using pydantic
# from pydantic import BaseModel as Model

# uncomment if you are using msgspec
# from msgspec import Struct as Model

from typing import List, Literal, Optional

class ActivityContent(Model):
    id: str
    """
    动态 ID

    - `character` 和 `light_cone` 类型为角色 ID 或光锥 ID
    - `forgotten_hall`、`pure_fiction` 和 `apocalyptic_shadow` 类型为挑战 ID
    - 其他类型为对应的 ID
    """
    param: Optional[int]
    """
    动态参数

    - `divergent_universe_ordinary_extrapolation` 和 `divergent_universe_cyclical_extrapolation` 类型为难度
    - 其他类型为 `null`
    """
    icon: str
    """
    动态图标 URL

    - `character` 和 `light_cone` 类型为角色或光锥图标
    - 其他类型为对应的图标
    """

class ActivityInfo(Model):
    type: str
    """
    动态类型

    - `character`: 解锁新的 5 星角色
    - `light_cone`: 解锁新的 5 星光锥
    - `event`: 完成活动
    - `forgotten_hall`: 完成忘却之庭
    - `pure_fiction`: 完成虚构叙事
    - `apocalyptic_shadow`: 完成末日幻影
    - `simulated_universe`: 完成模拟宇宙
    - `simulated_universe_swarm_disaster`: 完成模拟宇宙：寰宇蝗灾
    - `simulated_universe_gold_and_gears`: 完成模拟宇宙：黄金与机械
    - `divergent_universe_ordinary_extrapolation`: 完成差分宇宙：常规演算，`content.param` 为难度
    - `divergent_universe_cyclical_extrapolation`: 完成差分宇宙：周期演算，`content.param` 为难度
    - `simulated_universe_unknowable_domain`: 完成模拟宇宙：不可知域
    """
    text: str
    """
    动态描述
    """
    timestamp: int
    """
    动态时间戳
    """
    content: ActivityContent
    """
    动态详细信息
    """

class ActivityApiInfo(Model):
    uid: str
    """
    用户 UID
    """
    info: List[ActivityInfo] = []
    """
    动态信息列表
    """
```

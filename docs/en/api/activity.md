---
title: User Activity API
icon: ph:link-simple
order: 3
category:
  - Resource
---

<!-- markdownlint-disable MD036 -->

This page shows usage of MiHoMo User Activity API.

<!-- more -->

## User Activity API

MiHoMo User Activity API returns parsed player activity data.

Endpoint: `/sr_activity/{uid}`

**Path Params**

| Name | Type   | Explanation |
| ---- | ------ | ----------- |
| uid  | string | Player UID  |

**Query Prams**

| Name            | Type   | Default | Explanation                     | Aliases |
| --------------- | ------ | ------- | ------------------------------- | ------- |
| language        | string | cn      | Language                        | l, lang |
| is_force_update | bool   | false   | Refresh cached data immediately |         |

Supported language list:

| Code | Language         |
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

**Example**

```http
GET /sr_activity/100000999?l=en HTTP/1.1
Host: api.mihomo.me
User-Agent: Your-App-Name
```

**Response**

MiHoMo User Activity API response data example:

```json
{
  "uid": "100000999",
  "info": [
    {
      "type": "pure_fiction",
      "text": "27 day(s) ago: Completed Apocalyptic Shadow: Locust's Instigation: Difficulty 4",
      "content": {
        "id": "30064",
        "param": null,
        "icon": "icon/sign/DailyQuestChallengeStoryIcon.png"
      }
    },
    {
      "type": "event",
      "text": "23 day(s) ago: Completed the Hypogeum Enigma Event",
      "content": {
        "id": "50026",
        "param": null,
        "icon": "icon/sign/ActivityIcon.png"
      }
    },
    {
      "type": "apocalyptic_shadow",
      "text": "14 day(s) ago: Completed Pure Fiction: Clichéd Sayings (IV)",
      "content": {
        "id": "20124",
        "param": null,
        "icon": "icon/sign/DailyQuestChallengeStoryIcon.png"
      }
    },
    {
      "type": "forgotten_hall",
      "text": "Today: Completed Forgotten Hall: Strife of Creation (XI)",
      "content": {
        "id": "4011",
        "param": null,
        "icon": "icon/sign/DailyQuestChallengeStoryIcon.png"
      }
    }
  ]
}
```

Reference data model:

```python
# uncomment if you are using pydantic
# from pydantic import BaseModel as Model

# uncomment if you are using msgspec
# from msgspec import Struct as Model

from typing import List, Literal, Optional

class ActivityContent(Model):
    id: str
    """
    Activity ID

    - Character ID or Light Cone ID for `character` and `light_cone` type
    - Challenge ID for `forgotten_hall`, `pure_fiction`, `apocalyptic_shadow`
    - For other types, it is their corresponding ID
    """
    param: Optional[int]
    """
    Activity parameter

    - For `divergent_universe_ordinary_extrapolation` and `divergent_universe_cyclical_extrapolation`, it is the difficulty
    - For other types, it is `null`
    """
    icon: str
    """
    Activity icon URL

    - For `character` and `light_cone`, it is the character or light cone icon
    - For other types, it is their corresponding icon
    """

class ActivityInfo(Model):
    type: str
    """
    Activity type

    - `character`: Unlock a new 5-star character
    - `light_cone`: Unlock a new 5-star light cone
    - `event`: Complete an event
    - `forgotten_hall`: Complete a forgotten hall challenge
    - `pure_fiction`: Complete a pure fiction challenge
    - `apocalyptic_shadow`: Complete an apocalyptic shadow challenge
    - `simulated_universe`: Complete a simulated universe level
    - `simulated_universe_swarm_disaster`: Complete a simulated universe: swarm disaster level
    - `simulated_universe_gold_and_gears`: Complete a simulated universe: gold and gears level
    - `divergent_universe_ordinary_extrapolation`: Complete a divergent universe: ordinary extrapolation level, `content.param` as difficulty
    - `divergent_universe_cyclical_extrapolation`: Complete a divergent universe: cyclical extrapolation level, `content.param` as difficulty
    - `simulated_universe_unknowable_domain`: Complete a simulated universe: unknowable domain level
    """
    text: str
    """
    Activity description in given language
    """
    content: ActivityContent
    """
    Activity detail
    """

class ActivityApiInfo(Model):
    uid: str
    """
    User UID
    """
    info: List[ActivityInfo] = []
    """
    Activity information list
    """
```

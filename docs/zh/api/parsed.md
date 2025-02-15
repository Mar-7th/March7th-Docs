---
title: 解析数据 API
icon: ph:link-simple
order: 2
category:
  - Resource
---

<!-- markdownlint-disable MD036 -->

本页面介绍 MiHoMo 解析数据 API 的使用方式。

<!-- more -->

## 解析数据 API

端点: `/sr_info_parsed/{uid}`

**路径参数**

| 字段名 | 数据类型 | 说明         |
| ------ | -------- | ------------ |
| uid    | string   | 查询玩家 UID |

**请求参数**

| 字段名          | 数据类型 | 默认值 | 说明           | 别名    |
| --------------- | -------- | ------ | -------------- | ------- |
| language        | string   | cn     | 语言           | l, lang |
| version         | string   | v2     | API 版本       | v, ver  |
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
GET /sr_info_parsed/100000999?l=cn HTTP/1.1
Host: api.mihomo.me
User-Agent: Your-App-Name
```

**响应数据**

参考响应数据：

```json
{
  "player": {
    "uid": "100000999",
    "nickname": "NICKNAME",
    "level": 70,
    "world_level": 6,
    "friend_count": 91,
    "avatar": { "id": "201006", "name": "Silver Wolf", "icon": "icon/avatar/1006.png" },
    "signature": "SIGNATURE",
    "is_display": true,
    "space_info": {
      // 回忆总进度 混沌回忆id 混沌回忆进度 混沌回忆星数
      "memory_data": { "level": 21, "chaos_id": 1014, "chaos_level": 11, "chaos_star_count": 33 },
      // 模拟宇宙进度
      "universe_level": 9,
      // 拥有角色数量
      "avatar_count": 41,
      // 拥有光锥数量
      "light_cone_count": 74,
      // 拥有遗器数量
      "relic_count": 1858,
      // 获得成就数量
      "achievement_count": 398,
      // 书籍物品数量
      "book_count": 124,
      // 音乐物品数量
      "music_count": 18
    }
  },
  "characters": [
    {
      "id": "1212",
      "name": "Jingliu",
      "rarity": 5,
      "rank": 0,
      "level": 80,
      "promotion": 6,
      "icon": "icon/character/1212.png",
      "preview": "image/character_preview/1212.png",
      "portrait": "image/character_portrait/1212.png",
      // 星魂等级图标按顺序排列
      "rank_icons": [
        "icon/skill/1212_rank1.png",
        "icon/skill/1212_rank2.png",
        "icon/skill/1212_skill.png",
        "icon/skill/1212_rank4.png",
        "icon/skill/1212_ultimate.png",
        "icon/skill/1212_rank6.png"
      ],
      "path": { "id": "Warrior", "name": "Destruction", "icon": "icon/path/Destruction.png" },
      "element": { "id": "Ice", "name": "Ice", "color": "#47C7FD", "icon": "icon/element/Ice.png" },
      // 技能信息
      "skills": [
        {
          "id": "121201",
          "name": "Lucent Moonglow",
          "level": 5,
          "max_level": 9,
          "element": { "id": "Ice", "name": "Ice", "color": "#47C7FD", "icon": "icon/element/Ice.png" },
          "type": "Normal",
          "type_text": "Basic ATK",
          "effect": "SingleAttack",
          "effect_text": "Single Target",
          "simple_desc": "Deals minor Ice DMG to a single enemy target.",
          "desc": "Deals Ice DMG equal to 90% of Jingliu's ATK to a single enemy.",
          "icon": "icon/skill/1212_basic_atk.png"
        }
        // 其他技能信息
      ],
      // 行迹信息
      "skill_trees": [
        {
          "id": "1212001",
          "level": 5,
          "anchor": "Point01",
          "max_level": 6,
          "icon": "icon/skill/1212_basic_atk.png",
          "parent": null
        },
        // ...,
        {
          "id": "1212210",
          "level": 1,
          "anchor": "Point18",
          "max_level": 1,
          "icon": "icon/property/IconCriticalDamage.png",
          // 前置行迹点
          "parent": "1212208"
        }
      ],
      // 光锥信息
      "light_cone": {
        "id": "23014",
        "name": "I Shall Be My Own Sword",
        "rarity": 5,
        "rank": 1,
        "level": 80,
        "promotion": 6,
        "icon": "icon/light_cone/23014.png",
        "preview": "image/light_cone_preview/23014.png",
        "portrait": "image/light_cone_portrait/23014.png",
        "path": { "id": "Warrior", "name": "Destruction", "icon": "icon/path/Destruction.png" },
        "attributes": [
          {
            "field": "hp",
            "name": "HP",
            "icon": "icon/property/IconMaxHP.png",
            "value": 1164.2399999999998,
            "display": "1164",
            "percent": false
          },
          {
            "field": "atk",
            "name": "ATK",
            "icon": "icon/property/IconAttack.png",
            "value": 582.1199999999999,
            "display": "582",
            "percent": false
          },
          {
            "field": "def",
            "name": "DEF",
            "icon": "icon/property/IconDefence.png",
            "value": 396.9,
            "display": "396",
            "percent": false
          }
        ],
        // 光锥加成
        "properties": [
          {
            "type": "CriticalDamageBase",
            "field": "crit_dmg",
            "name": "CRIT DMG",
            "icon": "icon/property/IconCriticalDamage.png",
            "value": 0.2,
            "display": "20.0%",
            "percent": true
          }
        ]
      },
      // 遗器信息
      "relics": [
        {
          "id": "61041",
          "name": "Hunter's Artaius Hood",
          "type": 1,
          "set_id": "104",
          "set_name": "Hunter of Glacial Forest",
          "rarity": 5,
          "level": 15,
          "icon": "icon/relic/104_0.png",
          "main_affix": {
            "type": "HPDelta",
            "field": "hp",
            "name": "HP",
            "icon": "icon/property/IconMaxHP.png",
            "value": 705.5999999999999,
            "display": "705",
            "percent": false
          },
          "sub_affix": [
            {
              "type": "CriticalChanceBase",
              "field": "crit_rate",
              "name": "CRIT Rate",
              "icon": "icon/property/IconCriticalChance.png",
              "value": 0.058320000399999995,
              "display": "5.8%",
              "percent": true,
              "count": 2,
              "step": 2
            },
            {
              "type": "CriticalDamageBase",
              "field": "crit_dmg",
              "name": "CRIT DMG",
              "icon": "icon/property/IconCriticalDamage.png",
              "value": 0.1101600004,
              "display": "11.0%",
              "percent": true,
              "count": 2,
              "step": 1
            },
            {
              "type": "StatusProbabilityBase",
              "field": "effect_hit",
              "name": "Effect Hit Rate",
              "icon": "icon/property/IconStatusProbability.png",
              "value": 0.1209600072,
              "display": "12.0%",
              "percent": true,
              "count": 3,
              "step": 4
            },
            {
              "type": "StatusResistanceBase",
              "field": "effect_res",
              "name": "Effect RES",
              "icon": "icon/property/IconStatusResistance.png",
              "value": 0.0777600046,
              "display": "7.7%",
              "percent": true,
              "count": 2,
              "step": 2
            }
          ]
        }
        // 其他遗器信息
      ],
      // 遗器套装信息
      "relic_sets": [
        {
          "id": "104",
          "name": "Hunter of Glacial Forest",
          "icon": "icon/relic/104.png",
          "num": 2,
          "desc": "Increases Ice DMG by 10%.",
          "properties": [
            {
              "type": "IceAddedRatio",
              "field": "ice_dmg",
              "name": "Ice DMG Boost",
              "icon": "icon/property/IconIceAddedRatio.png",
              "value": 0.1,
              "display": "10.0%",
              "percent": true
            }
          ]
        }
        // 其他遗器套装信息
      ],
      // 角色的基础属性
      "attributes": [
        {
          "field": "hp",
          "name": "HP",
          "icon": "icon/property/IconMaxHP.png",
          "value": 2600.136,
          "display": "2600",
          "percent": false
        }
        // HP ATK DEF SPD CRIT-RATE CRIT-DMG
      ],
      // 角色属性加成 绝对数值
      "additions": [
        {
          "field": "crit_dmg",
          "name": "CRIT DMG",
          "icon": "icon/property/IconCriticalDamage.png",
          "value": 1.4478000012,
          "display": "144.7%",
          "percent": true
        },
        {
          "field": "spd",
          "name": "SPD",
          "icon": "icon/property/IconSpeed.png",
          "value": 40.032,
          "display": "40",
          "percent": false
        }
        // ...
      ],
      // 角色属性加成 含数值加成和百分比加成 已合并同类加成
      "properties": [
        {
          "type": "CriticalDamageBase",
          "field": "crit_dmg",
          "name": "CRIT DMG",
          "icon": "icon/property/IconCriticalDamage.png",
          "value": 1.4478000012,
          "display": "144.7%",
          "percent": true
        },
        {
          "type": "SpeedDelta",
          "field": "spd",
          "name": "SPD",
          "icon": "icon/property/IconSpeed.png",
          "value": 40.032,
          "display": "40",
          "percent": false
        }
        // ...
      ]
      // 展柜中的位置，从 0 到 7
      "pos": [0, 4]
    }
    // 其他角色信息
  ]
}
```

参考 Python 数据结构：

```python
# 使用 pydantic 时取消注释
# from pydantic import BaseModel as Model

# 使用 msgspec 时取消注释
# from msgspec import Struct as Model

from typing import List, Optional

class LevelInfo(Model):
    id: str
    level: int = 0

class AvatarInfo(Model):
    id: str
    name: str
    icon: str

class PathInfo(Model):
    id: str
    name: str
    icon: str

class ElementInfo(Model):
    id: str
    name: str
    color: str
    icon: str

class SkillInfo(Model):
    id: str
    name: str
    level: int
    max_level: int
    element: Optional[ElementInfo]
    type: str
    type_text: str
    effect: str
    effect_text: str
    simple_desc: str
    desc: str
    icon: str

class SkillTreeInfo(Model):
    id: str
    level: int
    anchor: str
    max_level: int
    icon: str
    parent: Optional[str] = None

class AttributeInfo(Model):
    field: str
    name: str
    icon: str
    value: float
    display: str
    percent: bool

class PropertyInfo(Model):
    type: str
    field: str
    name: str
    icon: str
    value: float
    display: str
    percent: bool

class SubAffixInfo(PropertyInfo):
    count: int
    step: int

class RelicInfo(Model):
    id: str
    name: str
    type: int
    set_id: str
    set_name: str
    rarity: int
    level: int
    icon: str
    main_affix: Optional[PropertyInfo] = None
    sub_affix: List[SubAffixInfo] = []

class RelicSetInfo(Model):
    id: str
    name: str
    icon: str
    num: int
    desc: str = ""
    properties: List[PropertyInfo] = []

class LightConeInfo(Model):
    id: str
    name: str
    rarity: int
    rank: int
    level: int
    promotion: int
    icon: str
    preview: str
    portrait: str
    path: Optional[PathInfo] = None
    attributes: List[AttributeInfo] = []
    properties: List[PropertyInfo] = []

class MemoryInfo(Model):
    level: int = 0
    chaos_id: Optional[int] = None
    chaos_level: Optional[int] = None
    chaos_star_count: Optional[int] = None

class SpaceInfo(Model):
    memory_data: Optional[MemoryInfo] = None
    universe_level: int = 0
    avatar_count: int = 0
    light_cone_count: int = 0
    relic_count: int = 0
    achievement_count: int = 0
    book_count: int = 0
    music_count: int = 0

class PlayerInfo(Model):
    uid: str
    nickname: str
    level: int = 0
    world_level: int = 0
    friend_count: int = 0
    avatar: Optional[AvatarInfo] = None
    signature: str = ""
    is_display: bool = False
    space_info: Optional[SpaceInfo] = None

class CharacterInfo(Model):
    id: str
    name: str
    rarity: int
    rank: int
    level: int
    promotion: int
    icon: str
    preview: str
    portrait: str
    rank_icons: List[str] = []
    path: Optional[PathInfo] = None
    element: Optional[ElementInfo] = None
    skills: List[SkillInfo] = []
    skill_trees: List[SkillTreeInfo] = []
    light_cone: Optional[LightConeInfo] = None
    relics: List[RelicInfo] = []
    relic_sets: List[RelicSetInfo] = []
    attributes: List[AttributeInfo] = []
    additions: List[AttributeInfo] = []
    properties: List[PropertyInfo] = []

class FormattedApiInfo(Model):
    player: PlayerInfo
    characters: List[CharacterInfo] = []
```

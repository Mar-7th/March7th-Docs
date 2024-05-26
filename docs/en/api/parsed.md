---
title: Parsed Data API
icon: ph:link-simple
order: 2
category:
  - Resource
---

This page shows usage of MiHoMo Parsed Data API.

<!-- more -->

## Parsed Data API

MiHoMo Parsed Data API returns parsed player data.

Endpoint: `/sr_info_parsed/{uid}`

**Path Params**

| Name | Type   | Explanation |
| ---- | ------ | ----------- |
| uid  | string | Player UID  |

**Query Prams**

| Name            | Type   | Default | Explanation                     |
| --------------- | ------ | ------- | ------------------------------- |
| lang            | string | cn      | Language                        |
| version         | string | v2      | API version                     |
| is_force_update | bool   | false   | Refresh cached data immediately |

Supported language list:

| Code | Language         |
| ---- | ---------------- |
| cn   | 简体中文         |
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
GET /sr_info_parsed/100000999?lang=en HTTP/1.1
Host: api.mihomo.me
User-Agent: Your-App-Name
```

**Response**

MiHoMo Parsed Data API response data example:

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
      // Memory level, Memory of chaos id, level, star count
      "memory_data": { "level": 21, "chaos_id": 1014, "chaos_level": 11, "chaos_star_count": 33 },
      // Simulation space level
      "universe_level": 9,
      "avatar_count": 41,
      "light_cone_count": 74,
      "relic_count": 1858,
      "achievement_count": 398,
      "book_count": 124,
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
      // Rank icons in order
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
        // Other skills
      ],
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
          "parent": "1212208"
        }
      ],
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
        // Light cone properties
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
      "relics": [
        {
          "id": "61041",
          "name": "Hunter's Artaius Hood",
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
        // Other relics
      ],
      // Enabled relic sets
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
        // Other relic sets
      ],
      // Character basic values
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
      // Character boost values
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
      // Character detailed buff list
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
      // Positions in showcase, 0 to 7
      "pos": [0, 4]
    }
    // Other characters
  ]
}
```

Reference data model:

```python
# uncomment if you are using pydantic
# from pydantic import BaseModel as Model

# uncomment if you are using msgspec
# from msgspec import Struct as Model

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

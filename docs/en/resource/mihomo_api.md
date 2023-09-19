---
title: MiHoMo API
icon: page
order: 5
category:
  - Resource
---

This page shows usage of MiHoMo API.

<!-- more -->

## MiHoMo API Call

### Reqest Method

MiHoMo API uses HTTP GET request, reference：[HTTP GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET).

If you are using MiHoMo API in a bot or web application, it is recommend to add app info in User-Agent to support API service debugging.

Current API host: https://api.mihomo.me

Image resources repo: https://github.com/Mar-7th/StarRailRes

### MiHoMo OriginAPI

MiHoMo OriginAPI returns origin player data.

End point: `/sr_info/{uid}`

**Path Params**

| Name | Type   | Explanation |
| ---- | ------ | ----------- |
| uid  | string | Player UID  |

**Response**

See [MiHoMo OriginAPI Response](#mihomo-originapi-response)

### MiHoMo ParsedAPI

MiHoMo OriginAPI returns parsed player data.

Endpoint: `/sr_info_parsed/{uid}`

**Path Params**

| Name | Type   | Explanation |
| ---- | ------ | ----------- |
| uid  | string | Player UID  |

**Query Prams**

| Name    | Type   | Default | Explanation |
| ------- | ------ | ------- | ----------- |
| lang    | string | cn      | Language    |
| version | string | v2      | API version |

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

**Response**

See [MiHoMo ParsedAPI Response](#mihomo-parsedapi-response)

## MiHoMo API Data Model

### MiHoMo OriginAPI Response

MiHoMo OriginAPI response data:

```json
{
  "detailInfo": {
    "uid": 100114514,
    "nickname": "Tadokoro",
    "level": 34,
    "worldLevel": 2,
    "friendCount": 24,
    "headIcon": 201209,
    "signature": "いいよ、こいよ",
    "platform": "ANDROID",
    "IsDisplayAvatarList": true,
    "recordInfo": {
      // Equals {} when not unlock
      "challengeInfo": {
        "scheduleMaxLevel": 15,
        // Optional
        "scheduleGroupId": 3,
        // Optional
        "noneScheduleMaxLevel": 112
      },
      "maxRogueChallengeScore": 3,
      "equipmentCount": 22,
      "avatarCount": 14,
      "achievementCount": 119
    },
    "assistAvatarDetail": {
      "avatarId": 1209,
      // Character eidolon. Optional
      "rank": 1,
      "level": 50,
      // Character ascension. Optional
      "promotion": 3,
      // Light cone info, equals {} when no light cone
      "equipment": {
        "tid": 21020,
        // Light cone superimposition
        "rank": 2,
        "level": 50,
        // Light cone ascended
        "promotion": 3
      },
      "skillTreeList": [
        {
          "pointId": 1003001,
          "level": 2
        }
        // ...
        // Only unlocked
      ],
      "relicList": [
        {
          "tid": 51071,
          // 1-HEAD 2-HAND 3-BODY 4-FOOT 5-NECK 6-OBJECT
          "type": 1,
          "level": 9,
          "exp": 200,
          "mainAffixId": 1,
          "subAffixList": [
            {
              "affixId": 2,
              // Base value count
              "cnt": 1,
              // Boost value count
              "step": 1
            }
            // ...
          ]
        }
        // ...
      ]
    },
    "avatarDetailList": [
      // ...
      // List item same as assistAvatarDetail
    ]
  }
}
```

Reference data model:

```python
class SpaceChallengeData(BaseModel):
    scheduleMaxLevel: int = 0
    scheduleGroupId: int = 0
    noneScheduleMaxLevel: int = 0

class SpaceData(BaseModel):
    challengeInfo: Optional[SpaceChallengeData] = None
    maxRogueChallengeScore: int = 0
    equipmentCount: int = 0
    avatarCount: int = 0
    achievementCount: int = 0

class EquipmentData(BaseModel):
    tid: Optional[int] = None
    rank: int = 1
    level: int = 1
    promotion: int = 0

class SkillTreeData(BaseModel):
    pointId: int
    level: int = 0

class SubAffixData(BaseModel):
    affixId: int
    cnt: int = 0
    step: int = 0

class RelicData(BaseModel):
    tid: int
    mainAffixId: int
    type: int
    level: int = 0
    exp: int = 0
    subAffixList: List[SubAffixData] = []

class CharacterData(BaseModel):
    avatarId: int
    rank: int = 0
    level: int = 1
    promotion: int = 0
    equipment: Optional[EquipmentData] = None
    skillTreeList: List[SkillTreeData] = []
    relicList: List[RelicData] = []

class PlayerData(BaseModel):
    uid: int
    nickname: str
    level: int = 0
    worldLevel: int = 0
    friendCount: int = 0
    headIcon: int = 200001
    signature: str = ""
    isDisplayAvatar: bool = False
    recordInfo: Optional[SpaceData] = None
    assistAvatarDetail: Optional[CharacterData] = None
    avatarDetailList: List[CharacterData] = []

class MihomoApiData(BaseModel):
    detailInfo: Optional[PlayerData] = None
```

### MiHoMo ParsedAPI Response

MiHoMo ParsedAPI response data:

```json
{
  "player": {
    "uid": "100xxxxxx",
    "nickname": "NAME",
    "level": 34,
    "world_level": 2,
    "friend_count": 6,
    "avatar": { "id": "201209", "name": "彦卿", "icon": "icon/avatar/1209.png" },
    "signature": "",
    "is_display": true,
    "space_info": {
      "challenge_data": { "maze_group_id": 0, "maze_group_index": 6, "pre_maze_group_index": 0 },
      "pass_area_progress": 3,
      "light_cone_count": 22,
      "avatar_count": 14,
      "achievement_count": 119
    }
  },
  "characters": [
    {
      "id": "1201",
      "name": "青雀",
      "rarity": 4,
      "rank": 3,
      "level": 50,
      "promotion": 3,
      "icon": "icon/character/1201.png",
      "preview": "image/character_preview/1201.png",
      "portrait": "image/character_portrait/1201.png",
      "rank_icons": [
        "icon/skill/1201_rank1.png",
        "icon/skill/1201_rank2.png",
        "icon/skill/1201_skill.png",
        "icon/skill/1201_rank4.png",
        "icon/skill/1201_ultimate.png",
        "icon/skill/1201_rank6.png"
      ],
      "path": { "id": "Mage", "name": "智识", "icon": "icon/path/Erudition.png" },
      "element": { "id": "Quantum", "name": "量子", "color": "#1C29BA", "icon": "icon/element/Quantum.png" },
      "skills": [
        {
          "id": "120101",
          "name": "门前清",
          "level": 1,
          "max_level": 9,
          "element": { "id": "Quantum", "name": "量子", "color": "#1C29BA", "icon": "icon/element/Quantum.png" },
          "type": "Normal",
          "type_text": "普攻",
          "effect": "SingleAttack",
          "effect_text": "单攻",
          "simple_desc": "使用1张牌，对敌方单体造成少量量子属性伤害。",
          "desc": "使用1张当前花色最少的琼玉牌，对指定敌方单体造成等同于青雀50%攻击力的量子属性伤害。",
          "icon": "icon/skill/1201_basic_atk.png"
        }
        // Other skills
      ],
      "skill_trees": [
        { "id": "1201001", "level": 1, "icon": "icon/skill/1201_basic_atk.png" },
        { "id": "1201002", "level": 4, "icon": "icon/skill/1201_skill.png" },
        { "id": "1201003", "level": 3, "icon": "icon/skill/1201_ultimate.png" },
        { "id": "1201004", "level": 2, "icon": "icon/skill/1201_talent.png" },
        { "id": "1201007", "level": 1, "icon": "icon/skill/1201_technique.png" },
        { "id": "1201201", "level": 1, "icon": "icon/property/IconAttack.png" }
      ],
      "light_cone": {
        "id": "20020",
        "name": "睿见",
        "rarity": 3,
        "rank": 5,
        "level": 50,
        "promotion": 3,
        "icon": "icon/light_cone/20020.png",
        "preview": "image/light_cone_preview/20020.png",
        "portrait": "image/light_cone_portrait/20020.png",
        "path": { "id": "Mage", "name": "智识", "icon": "icon/path/Erudition.png" },
        "attributes": [
          {
            "field": "hp",
            "name": "生命值",
            "icon": "icon/property/IconMaxHP.png",
            "value": 428.4,
            "display": "428",
            "percent": false
          },
          {
            "field": "atk",
            "name": "攻击力",
            "icon": "icon/property/IconAttack.png",
            "value": 214.2,
            "display": "214",
            "percent": false
          },
          {
            "field": "def",
            "name": "防御力",
            "icon": "icon/property/IconDefence.png",
            "value": 153.0,
            "display": "153",
            "percent": false
          }
        ],
        // Light cone properties
        "properties": []
      },
      "relics": [
        {
          "id": "51021",
          "name": "快枪手的野穗毡帽",
          "set_id": "102",
          "set_name": "野穗伴行的快枪手",
          "rarity": 4,
          "level": 6,
          "icon": "icon/relic/102_0.png",
          "main_affix": {
            "type": "HPDelta",
            "field": "hp",
            "name": "生命值",
            "icon": "icon/property/IconMaxHP.png",
            "value": 279.9820800104644,
            "display": "279",
            "percent": false
          },
          "sub_affix": [
            {
              "type": "AttackDelta",
              "field": "atk",
              "name": "攻击力",
              "icon": "icon/property/IconAttack.png",
              "value": 13.548016000073403,
              "display": "13",
              "percent": false,
              "count": 1,
              "step": 0
            }
            // Other sub affixes
          ]
        }
        // Other relics
      ],
      // Enabled relic sets
      "relic_sets": [
        {
          "id": "102",
          "name": "野穗伴行的快枪手",
          "icon": "icon/relic/102.png",
          "num": 2,
          "desc": "攻击力提高12%。",
          "properties": [
            {
              "type": "AttackAddedRatio",
              "field": "atk",
              "name": "攻击力",
              "icon": "icon/property/IconAttack.png",
              "value": 0.12,
              "display": "12.0%",
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
          "name": "生命值",
          "icon": "icon/property/IconMaxHP.png",
          "value": 1075.6799999999998,
          "display": "1075",
          "percent": false
        }
        // HP ATK DEF SPD CRIT-RATE CRIT-DMG
      ],
      // Character boost values
      "additions": [
        {
          "field": "atk",
          "name": "攻击力",
          "icon": "icon/property/IconAttack.png",
          "value": 515.0632508002462,
          "display": "515",
          "percent": false
        },
        {
          "field": "spd",
          "name": "速度",
          "icon": "icon/property/IconSpeed.png",
          "value": 5.88,
          "display": "5",
          "percent": false
        }
        // ...
      ],
      // Character detailed buff list
      "properties": [
        {
          "type": "AttackAddedRatio",
          "field": "atk",
          "name": "攻击力",
          "icon": "icon/property/IconAttack.png",
          "value": 0.40096000253222797,
          "display": "40.0%",
          "percent": true
        }
        // ...
      ]
    }
  ]
}
```

Reference data model:

```python
class LevelInfo(BaseModel):
    id: str
    level: int = 0

class AvatarInfo(BaseModel):
    id: str
    name: str
    icon: str

class PathInfo(BaseModel):
    id: str
    name: str
    icon: str

class ElementInfo(BaseModel):
    id: str
    name: str
    color: str
    icon: str

class SkillInfo(BaseModel):
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

class PropertyInfo(BaseModel):
    type: str
    field: str
    name: str
    icon: str
    value: float
    display: str
    percent: bool

class AttributeInfo(BaseModel):
    field: str
    name: str
    icon: str
    value: float
    display: str
    percent: bool

class SubAffixInfo(PropertyInfo):
    count: int
    step: int

class RelicInfo(BaseModel):
    id: str
    name: str
    set_id: str
    set_name: str
    rarity: int
    level: int
    icon: str
    main_affix: Optional[PropertyInfo] = None
    sub_affix: List[SubAffixInfo] = []

class RelicSetInfo(BaseModel):
    id: str
    name: str
    num: int
    icon: str
    desc: str = ""
    properties: List[PropertyInfo] = []

class LightConeInfo(BaseModel):
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

class SpaceChallengeInfo(BaseModel):
    maze_group_id: int = 0
    maze_group_index: int = 0
    pre_maze_group_index: int = 0

class SpaceInfo(BaseModel):
    challenge_data: Optional[SpaceChallengeInfo] = None
    pass_area_progress: int = 0
    light_cone_count: int = 0
    avatar_count: int = 0
    achievement_count: int = 0

class PlayerInfo(BaseModel):
    uid: str
    nickname: str
    level: int = 0
    world_level: int = 0
    friend_count: int = 0
    avatar: Optional[AvatarInfo] = None
    signature: str = ""
    is_display: bool = False
    space_info: Optional[SpaceInfo] = None

class CharacterInfo(BaseModel):
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
    light_cone: Optional[LightConeInfo] = None
    relics: List[RelicInfo] = []
    relic_sets: List[RelicSetInfo] = []
    attributes: List[AttributeInfo] = []
    additions: List[AttributeInfo] = []
    properties: List[PropertyInfo] = []

class FormattedApiInfo(BaseModel):
    player: PlayerInfo
    characters: List[CharacterInfo] = []
```

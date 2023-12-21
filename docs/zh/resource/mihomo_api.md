---
title: MiHoMo API
icon: page
order: 5
category:
  - 资源
---

本页面介绍 MiHoMo API 的使用方式。

<!-- more -->

## MiHoMo API 调用说明

### 请求方式

MiHoMo API 使用 HTTP GET 方式请求，相关参考：[HTTP GET](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET)。

如果在网站或机器人项目中使用了 MiHoMo API，推荐在 User-Agent 中添加应用名称信息，以方便 API 服务调试使用。

当前 API 主站 Host: https://api.mihomo.me

图片资源仓库：https://github.com/Mar-7th/StarRailRes

Discord: [![discord](https://img.shields.io/badge/MiHoMo-blue?logo=discord&logoColor=white)](https://discord.gg/SxCGCGSjbX)

### MiHoMo OriginAPI

MiHoMo OriginAPI 返回原始玩家信息。

终结点：`/sr_info/{uid}`

**路径参数**

| 字段名 | 数据类型 | 说明         |
| ------ | -------- | ------------ |
| uid    | string   | 查询玩家 UID |

**响应数据**

见 [MiHoMo OriginAPI 返回字段](#mihomo-originapi-返回字段)

### MiHoMo ParsedAPI

MiHoMo OriginAPI 返回原始玩家信息。

终结点：`/sr_info_parsed/{uid}`

**路径参数**

| 字段名 | 数据类型 | 说明         |
| ------ | -------- | ------------ |
| uid    | string   | 查询玩家 UID |

**请求参数**

| 字段名          | 数据类型 | 默认值 | 说明           |
| --------------- | -------- | ------ | -------------- |
| lang            | string   | cn     | 语言           |
| version         | string   | v2     | API 版本       |
| is_force_update | bool     | false  | 不使用缓存数据 |

支持语言列表：

| 代码 | 语言             |
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

**响应数据**

见 [MiHoMo ParsedAPI 返回字段](#mihomo-parsedapi-返回字段)

## MiHoMo API 字段说明

### MiHoMo OriginAPI 返回字段

MiHoMo OriginAPI 返回值结构如下：

```json
{
  // 玩家详细信息字段
  // 当前返回结果仅包含此字段
  "detailInfo": {
    // 游戏 uid
    "uid": 100114514,
    // 昵称
    "nickname": "田所浩二",
    // 账号等级
    "level": 34,
    // 均衡等级 / 世界等级
    "worldLevel": 2,
    // 当前好友数量
    "friendCount": 24,
    // 使用头像id
    "headIcon": 201209,
    // 签名 若未设置签名 返回结果无此字段
    "signature": "你是一个一个一个",
    // 平台信息
    "platform": "ANDROID",
    // 是否公开显示角色信息
    "IsDisplayAvatarList": true,
    // 数据信息
    "recordInfo": {
      // 忘却之庭进度
      // 不推荐使用此字段，字段名称可能错误
      "challengeInfo": {
        "noneScheduleMaxLevel": 112,
        "scheduleGroupId": 3,
        "scheduleMaxLevel": 15
      },
      // 通过模拟宇宙数量
      "maxRogueChallengeScore": 3,
      // 获得光锥数量
      "equipmentCount": 22,
      // 获得角色数量
      "avatarCount": 14,
      // 获得成就数量
      "achievementCount": 119
    },
    // 支援角色信息
    "assistAvatarDetail": {
      // 角色id
      "avatarId": 1209,
      // 角色星魂数 若未解锁星魂则无此字段
      "rank": 1,
      // 角色等级
      "level": 50,
      // 角色晋阶等级
      "promotion": 3,
      // 光锥信息 若无光锥此项为 {}
      "equipment": {
        // 光锥id
        "tid": 21020,
        // 光锥叠影数
        "rank": 2,
        // 光锥等级
        "level": 50,
        // 光锥晋阶等级
        "promotion": 3
      },
      // 行迹 / 技能树信息
      "skillTreeList": [
        {
          // 行迹id
          "pointId": 1003001,
          // 行迹等级
          "level": 2
        }
        // ...
        // 只包括已经解锁的行迹，目前最多 18 个
      ],
      // 遗器信息
      "relicList": [
        {
          // 遗器id
          "tid": 51071,
          // 遗器类型 1-HEAD 2-HAND 3-BODY 4-FOOT 5-NECK 6-OBJECT
          "type": 1,
          // 遗器等级
          "level": 9,
          // 当前经验
          "exp": 200,
          // 遗器主词条id 需要在遗器主词条组的索引
          "mainAffixId": 1,
          // 副词条
          "subAffixList": [
            {
              // 副词条id
              "affixId": 2,
              // 副词条基础值数量
              "cnt": 1,
              // 副词条步进值数量 可选
              "step": 1
            }
            // ...
            // 其他副词条
          ]
        }
        // ...
        // 其他遗器 一共最多 6 个
      ]
    },
    // 展示角色（星海同行）信息
    // 若未设置则不返回此字段
    "avatarDetailList": [
      // ...
      // 结构同支援角色信息 一共最多 3 个
      // 多了一个pos 字段表示显示位置，1 和 2 对应中间和右侧
    ]
  }
}
```

参考数据结构：

```python
class SpaceChallengeData(BaseModel):
    noneScheduleMaxLevel: int = 0
    scheduleGroupId: int = 0
    scheduleMaxLevel: int = 0

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

### MiHoMo ParsedAPI 返回字段

MiHoMo ParsedAPI 返回值结构如下：

```json
{
  "player": {
    "uid": "100xxxxxx",
    "nickname": "辰",
    "level": 34,
    "world_level": 2,
    "friend_count": 6,
    "avatar": { "id": "201209", "name": "彦卿", "icon": "icon/avatar/1209.png" },
    "signature": "",
    "is_display": true,
    "space_info": {
      // 不推荐使用 memory_data，字段名称可能错误
      "memory_data": { "level": 0, "chaos_id": 0, "chaos_level": 15 },
      "universe_level": 3,
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
      // 星魂等级按顺序排列
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
        // 其他技能信息
      ],
      // 行迹信息
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
        // 光锥加成信息
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
            // 其他副词条
          ]
        }
        // 其他遗器
      ],
      // 遗器套装
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
        // 其他套装
      ],
      // 角色基础属性
      "attributes": [
        {
          "field": "hp",
          "name": "生命值",
          "icon": "icon/property/IconMaxHP.png",
          "value": 1075.6799999999998,
          "display": "1075",
          "percent": false
        }
        // 还有 攻击力 防御力 速度 暴击率 暴击伤害
      ],
      // 角色属性属性
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
        // 省略其他属性
      ],
      // 详细加成列表（汇总的加成信息）
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
        // 省略
      ]
    }
  ]
}
```

参考数据结构：

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

class SkillTreeInfo(BaseModel):
    id: str
    level: int
    anchor: str
    max_level: int
    icon: str
    parent: Optional[str] = None

class AttributeInfo(BaseModel):
    field: str
    name: str
    icon: str
    value: float
    display: str
    percent: bool

class PropertyInfo(BaseModel):
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
    icon: str
    num: int
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

class MemoryInfo(BaseModel):
    level: int = 0
    chaos_id: int = 0
    chaos_level: int = 0

class SpaceInfo(BaseModel):
    memory_data: Optional[MemoryInfo] = None
    universe_level: int = 0
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
    skill_trees: List[SkillTreeInfo] = []
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

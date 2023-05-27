---
title: 角色索引
icon: profile
order: 2
category:
  - 资源
---

本页面介绍角色相关索引文件的结构。

<!-- more -->

## 角色索引文件

在对应语言文件夹（`index_new/[lang]` `index_min/[lang]`）下有以下几个和角色相关的索引文件：

```text
characters.json                 # 角色基本信息，索引为角色id
character_ranks.json            # 角色星魂，索引为星魂id
character_skills.json           # 角色技能，索引为技能id
character_skill_trees.json      # 角色行迹，索引为行迹id
character_promotions.json       # 角色晋阶，索引为角色id
```

## 角色基本信息

以下是 `characters.json` 每一项各个字段的含义：

```json
"1001": {
    // 角色id
    "id": "1001",
    // 角色名
    "name": "三月七",
    // 角色标签
    "tag": "mar7th",
    // 稀有度
    "rarity": 4,
    // 命途id 在 `paths.json` 中查询
    "path": "Knight",
    // 属性id 在 `elements.json` 中查询
    "element": "Ice",
    // 能量上限（施放一次终结技所需能量）
    "max_sp": 120.0,
    // 星魂id列表 在 `character_ranks.json` 中查询
    // 当前满足规则 角色id + 0 + 星魂序号（1-6）
    // 长度为 6 分别表示第 1-6 个星魂
    "ranks": ["100101", "100102", "100103", "100104", "100105", "100106"],
    // 技能id列表 在 `character_skills.json` 中查询
    // 当前满足规则 角色id + 0 + [123467]
    // 长度为 6-8
    // 分别表示 普攻 技能 终结技 天赋 攻击 秘技
    // 长度大于 6 时 xxxx08 和 xxxx09 表示部分技能的可选效果 如单攻/扩散
    "skills": ["100101", "100102", "100103", "100104", "100106", "100107"],
    // 行迹id列表 在 `character_skills.json` 中查询
    // 当前满足规则 角色id + 三位行迹序号
    // 长度为 18
    "skill_trees": ["1001001", "1001002", "1001003", "1001004", "1001007", "1001101", "1001102", "1001103", "1001201", "1001202", "1001203", "1001204", "1001205", "1001206", "1001207", "1001208", "1001209", "1001210"],
    // 角色icon图片路径
    "icon": "icon/character/1001.png",
    // 角色预览图片路径
    "preview": "image/character_preview/1001.png",
    // 角色立绘图片路径
    "portrait": "image/character_portrait/1001.png",
    // 角色攻略图片路径列表
    // 长度>=0
    "guide_overview": ["guide/Nwflower/character_overview/1001.png","guide/OriginMirror/character_overview/1001.png"],
    // 角色材料图片路径列表
    // 长度>=0
    "guide_material": ["guide/Nwflower/character_material/1001.png"],
    // 角色测评列表
    // 每项包含图片路径与详情链接
    // 长度>=0
    "guide_evaluation": [
        {
            "image": "guide/Gamer/character_evaluation/1001.png",
            "link": "https://www.gamer.cn/xqtd/article/19314"
        }
    ]
}
```

以下是 `character_ranks.json` 每一项各个字段的含义：

```json
"110203": {
    // 星魂id 角色id + 0 + 星魂序号（1-6）
    "id": "110203",
    // 星魂序号
    "rank": 3,
    "desc": "",
    // 解锁材料列表 在 `items.json` 中查询
    // 此处长度为1 固定为角色的星魂 数量为1
    "materials": [
        { "id": "11102", "num": 1 }
    ],
    // 升级技能列表 在 `character_skills.json` 中查询
    "level_up_skills": [
        { "id": "110202", "num": 2 },
        { "id": "110204", "num": 2 }
    ],
    // 星魂icon图片路径
    "icon": "icon/skill/1102_skill.png"
}
```

以下是 `character_skills.json` 每一项各个字段的含义：

```json
"100603": {
    // 技能id 角色id + 0 + [123467]
    "id": "100603",
    // 技能名称
    "name": "|账号已封禁|",
    // 技能最大等级
    "max_level": 15,
    // 元素类型id 在 `elements.json` 中查询
    "element": "Quantum",
    // 技能类型
    "type": "Ultra",
    // 技能类型描述
    "type_text": "终结技",
    // 技能效果类型
    "effect": "Impair",
    // 技能效果类型描述
    "effect_text": "妨害",
    // 技能简单描述
    "simple_desc": "对敌方单体造成大量量子属性伤害，大概率施加防御降低效果。",
    // 技能详细描述
    // 包含参数占位符 #{index}[{format}]{percent?}
    // #1[i] 表示第一个参数取整 例如 2.1 -> 2
    // #2[i]% 表示第二个参数取0位小数百分比表示 例如 0.85 -> 85%
    // #3[f1] 表示第三个参数取1位小数 例如 0.4 -> 0.4
    // #4[f2]% 表示第四个参数取2位小数百分比表示 例如 0.0625 -> 6.25%
    "desc": "有#2[i]%的基础概率使受到攻击的敌方目标防御力降低#3[i]%，持续#4[i]回合，同时对指定敌方单体造成等同于银狼#1[i]%攻击力的量子属性伤害。",
    // 技能详细描述参数列表
    // 长度等于 max_level
    // level 1 对应数组下标 0
    "params": [
        [ 2.1, 0.85, 0.4, 3.0 ],
        [ 2.24, 0.865, 0.41, 3.0 ]
        // 以下省略 13 项
    ],
    "icon": "icon/skill/1006_ultimate.png"
}
```

以下是 `character_skill_trees.json` 每一项各个字段的含义：

```json
"1104205": {
    // 行迹id 角色id + 3 位行迹序号
    "id": "1104205",
    // 行迹最大等级
    "max_level": 1,
    "anchor": "Point13",
    // 行迹前置 行迹id 列表
    "pre_points": [
        "1104102"
    ],
    // 行迹提升技能等级列表
    "level_up_skills": [],
    // 行迹等级详细信息列表
    // 长度等于 max_level
    "levels": [
        {
            // 要求的晋阶等级
            "promotion": 4,
            // 属性提升列表 在 `properties.json` 中查询
            "properties": [
                { "type": "IceAddedRatio", "value": 0.048 }
            ],
            // 消耗材料列表 在 `items.json` 中查询
            "materials": [
                { "id": "2", "num": 20000 },
                { "id": "110142", "num": 5 },
                { "id": "112002", "num": 4 }
            ]
        }
    ]
}
```

## 参考数据结构

以下是使用 Python 解析索引文件的参考数据结构。

```python
class CharacterEvaluationType():
    image: str
    link: str

class CharacterType():
    id: str
    name: str
    tag: str
    rarity: int
    path: str
    element: str
    max_sp: float
    ranks: List[str]
    skills: List[str]
    skill_trees: List[str]
    icon: str
    preview: str
    portrait: str
    guide_overview: List[str]
    guide_material: List[str]
    guide_evaluation: List[CharacterEvaluationType]

class CharacterRankType():
    id: str
    rank: int
    desc: str
    materials: List[Quantity]
    level_up_skills: List[Quantity]
    icon: str

class CharacterSkillType():
    id: str
    name: str
    max_level: int
    element: str
    type: str
    type_text: str
    effect: str
    effect_text: str
    simple_desc: str
    desc: str
    params: List[List[float]]
    icon: str

class SkillTreeLevelType():
    promotion: int
    properties: List[Property]
    materials: List[Quantity]

class CharacterSkillTreeType():
    id: str
    max_level: int
    anchor: str
    pre_points: List[str]
    level_up_skills: List[Quantity]
    levels: List[SkillTreeLevelType]

class CharacterPromotionType():
    id: str
    values: List[Dict[str, Promotion]]
    materials: List[List[Quantity]]

# charaters.json
CharacterIndex = Dict[str, CharacterType]
# character_ranks.json
CharacterRankIndex = Dict[str, CharacterRankType]
# character_skills.json
CharacterSkillIndex = Dict[str, CharacterSkillType]
# character_skill_trees.json
CharacterSkillTreeIndex = Dict[str, CharacterSkillTreeType]
# character_promotions.json
CharacterPromotionIndex = Dict[str, CharacterPromotionType]
```

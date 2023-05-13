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

在对应语言文件夹（`index_new/[lang]`）下有以下几个和角色相关的索引文件：

```text
characters.json                 # 角色基本信息，索引为角色id
character_ranks.json            # 角色星魂，索引为星魂id
character_skills.json           # 角色技能，索引为技能id
character_skill_trees.json      # 角色行迹，索引为行迹id
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
    // 长度为 6 分别表示 普攻 技能 终结技 天赋 攻击 秘技
    "skills": ["100101", "100102", "100103", "100104", "100106", "100107"],
    // 行迹id列表 在 `character_skills.json` 中查询
    // 当前满足规则 角色id + 三位行迹序号
    // 长度为 18
    "skill_trees": ["1001001", "1001002", "1001003", "1001004", "1001007", "1001101", "1001102", "1001103", "1001201", "1001202", "1001203", "1001204", "1001205", "1001206", "1001207", "1001208", "1001209", "1001210"],
    // 角色icon
    "icon": "icon/character/1001.png",
    // 角色预览图
    "preview": "image/character_preview/1001.png",
    // 角色立绘图
    "portrait": "image/character_portrait/1001.png",
    // 角色攻略教程列表
    // 长度>=0
    "guide_overview": ["guide/Nwflower/character_overview/1001.png","guide/OriginMirror/character_overview/1001.png"],
    // 角色材料教程列表
    // 长度>=0
    "guide_material": ["guide/Nwflower/character_material/1001.png"]
}
```

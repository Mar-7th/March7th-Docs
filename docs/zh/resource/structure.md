---
title: 目录结构
icon: page
order: 1
category:
  - 资源
---

本页面介绍资源仓库 [Mar-7th/StarRailRes](https://github.com/Mar-7th/StarRailRes) 的目录结构。

<!-- more -->

## 项目结构

项目文件结构如下：

```text
StarRailRes
├─ icon         # 图标素材目录
├─ image        # 图片素材目录
├─ guide        # 教程图片目录
├─ index_new    # 索引目录（之后会转移到index目录）
├─ index_min    # 压缩索引目录（压缩换行以更快下载）
└─ index        # 旧索引目录（不推荐使用）
```

在 `index_new` 或 `index_min` 中有各种语言的索引文件夹，支持的语言列表如下：

```text
CN    简体中文
CHT   繁體中文
DE    Deutsch
EN    English
ES    Español
FR    Français
ID    Bahasa Indonesia
JP    日本語
KR    한국어
PT    Português
RU    Русский
TH    ภาษาไทย
VI    Tiếng Việt
```

语言文件夹名为对应语言缩写的小写字母形式，如 `cn` 文件夹为简体中文索引。

## 索引结构

在具体的语言索引文件中，存在以下文件：

```text
paths.json                      # 命途
elements.json                   # 元素
properties.json                 # 属性
characters.json                 # 角色基本信息
character_ranks.json            # 角色星魂
character_skills.json           # 角色技能
character_skill_trees.json      # 角色行迹
character_promotions.json       # 角色晋阶与等级
light_cones.json                # 光锥基本信息
light_cone_ranks.json           # 光锥叠影
light_cone_promotions.json      # 光锥晋阶与等级
relics.json                     # 遗器基本信息
relic_sets.json                 # 遗器套装信息
relic_main_affixs.json          # 遗器主词条组
relic_sub_affixs.json           # 遗器副词条组
items.json                      # 材料
```

各索引文件的具体结构请在对应页面查看。

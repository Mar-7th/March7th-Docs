---
title: File Structure
icon: ph:bookmarks
order: 1
category:
  - Resource
---

File structure of repo [Mar-7th/StarRailRes](https://github.com/Mar-7th/StarRailRes).

<!-- more -->

## Project

The project file structure is as follows:

```text
StarRailRes
├─ icon         # Icon folder
├─ image        # Image folder
├─ guide        # Tutorial picture folder
├─ index_new    # Index folder (will be transferred to index folder later)
├─ index_min    # Compress index folder (compress newline for faster download)
└─ index        # Old index folder (deprecated)
```

There are index folders for various languages in `index_new` or `index_min`, the list of supported languages is as follows:

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

The language folder name is the lowercase letter of the corresponding language abbreviation, such as the `en` folder is the English index.

## Index

Among the specific language index files, the following files exist:

```text
paths.json                      # Destiny path
elements.json                   # Element
properties.json                 # Property
characters.json                 # Basic character information
character_ranks.json            # Character eidolon
character_skills.json           # Character skill
character_skill_trees.json      # Character skill tree / Trace
character_promotions.json       # Character promotion and level
light_cones.json                # Basic light cone information
light_cone_ranks.json           # Light cone overlay
light_cone_promotions.json      # Light cone promotion and level
relics.json                     # Basic relic information
relic_sets.json                 # Relic set information
relic_main_affixs.json          # Relic main affix groups
relic_sub_affixs.json           # Relic sub affix groups
items.json                      # Material
```

For the specific structure of each index file, please check the corresponding page.

---
title: MihomoAPI解析
icon: page
order: 5
category:
  - 资源
---

本页面介绍通过索引解析 MihomoAPI 的参考实现。

<!-- more -->

## MihomoAPI 字段说明

MihomoAPI 返回值结构如下：

```json
{
    // 角色详细信息字段
    // 当前返回结果仅包含此字段
    "PlayerDetailInfo": {
        // 游戏uid
        "UID": 114514191,
        // 昵称
        "NickName": "xxx",
        // 账号等级
        "Level": 41,
        // 均衡等级 / 世界等级
        "WorldLevel": 3,
        // 当前好友数量
        "CurFriendCount": 11,
        // 使用头像id
        "HeadIconID": 201013,
        // 设置签名
        // 若未设置签名 返回结果无此字段
        "Signature": "",
        // 设置生日
        // 若未设置生日 返回结果无此字段
        "Birthday": 330, 
        // 是否公开显示角色信息
        "IsDisplayAvatarList": true,
        // 账号数据信息
        "PlayerSpaceInfo": {
            // 忘却之庭进度
            // 若未开启此项为空
            "ChallengeData": {
                // 可选
                "MazeGroupID": 0,
                // 可选
                "MazeGroupIndex": 0,
                // 进度
                "PreMazeGroupIndex": 12
            },
            // 通过模拟宇宙数量
            "PassAreaProgress": 6,
            // 获得光锥数量
            "LightConeCount": 45,
            // 获得角色数量
            "AvatarCount": 17,
            // 获得成就数量
            "AchievementCount": 173
        },
        // 支援角色信息
        "AssistAvatar": {
            // 角色id
            "AvatarID": 1003,
            // 角色星魂数
            // 若未解锁星魂则无此字段
            "Rank": 1, 
            // 角色等级
            "Level": 50,
            // 角色晋阶等级
            "Promotion": 3,
            // 光锥信息
            "EquipmentID": {
                // 光锥id
                "ID": 21020,
                // 光锥叠影数
                "Rank": 2,
                // 光锥等级
                "Level": 50,
                // 光锥晋阶等级
                "Promotion": 3
            },
            // 行迹信息
            "BehaviorList": [ 
                {
                    // 行迹id
                    "BehaviorID": 1003001,
                    // 行迹等级
                    "Level": 2
                }
                // ...
                // 只包括已经解锁的行迹，目前最多 18 个
            ],
            // 遗器信息
            "RelicList": [
                {
                    // 遗器id
                    "ID": 51071,
                    // 遗器主词条id 需要在遗器主词条组的索引
                    "MainAffixID": 1,
                    // 遗器类型 1-HEAD 2-HAND 3-BODY 4-FOOT 5-NECK 6-OBJECT
                    "Type": 1,
                    // 遗器等级
                    "Level": 9,
                    // 当前经验
                    "EXP": 200,
                    // 副词条
                    "RelicSubAffix": [ 
                        {
                            // 副词条id
                            "SubAffixID": 2,
                            // 副词条基础值数量
                            "Cnt": 1, 
                            // 副词条步进值数量
                            "Step": 1 
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
        "DisplayAvatarList": [
            // ...
            // 结构同支援角色信息 一共最多 3 个
        ]
    }
}
```

## MihomoAPI 字段解析

以下是使用 StarRailRes 索引解析 MihomoAPI 的参考代码：

```python
import json
import math
from pathlib import Path

# response file path
response_file = Path(Path(__file__).parent / "response.json")

# root of StarRailRes repo
root_dir = Path.cwd()
index_dir = root_dir / "index_min" / "cn"

# index files
index_files = {
    "characters": index_dir / "characters.json",
    "character_ranks": index_dir / "character_ranks.json",
    "character_skills": index_dir / "character_skills.json",
    "character_skill_trees": index_dir / "character_skill_trees.json",
    "character_promotions": index_dir / "character_promotions.json",
    "light_cones": index_dir / "light_cones.json",
    "light_cone_ranks": index_dir / "light_cone_ranks.json",
    "light_cone_promotions": index_dir / "light_cone_promotions.json",
    "relics": index_dir / "relics.json",
    "relic_sets": index_dir / "relic_sets.json",
    "relic_main_affixs": index_dir / "relic_main_affixs.json",
    "relic_sub_affixs": index_dir / "relic_sub_affixs.json",
    "paths": index_dir / "paths.json",
    "elements": index_dir / "elements.json",
    "properties": index_dir / "properties.json",
}

index = {}
result = {}

def load_json_file(path: Path):
    with open(path, "r", encoding="utf-8") as f:
        json_dict = json.loads(f.read())
    return json_dict

def get_level_up_skills_from_character_rank(info):
    level_up_skills = []
    id = str(info["AvatarID"])
    rank = info["Rank"] if "Rank" in info else 0
    rank_list = index["characters"][id]["ranks"][:rank]
    for rank_item in rank_list:
        level_up_skills += index["character_ranks"][rank_item]["level_up_skills"]
    return level_up_skills

def get_skill_info_by_level_up_skills(info, level_up_skills):
    skill_info = []
    id = str(info["AvatarID"])
    skill_list = index["characters"][id]["skills"]
    for skill in skill_list:
        if not str(skill).endswith("6"):
            skill_info.append(
                {"name": index["character_skills"][skill]["name"], "level": 0}
            )
    for skill in level_up_skills:
        for i in skill_info:
            if i["name"] == index["character_skills"][skill["id"]]["name"]:
                skill_info[skill_info.index(i)]["level"] = i["level"] + int(
                    skill["num"]
                )
    return skill_info

def get_level_up_skills_from_character_skill_tree(info):
    level_up_skills = []
    skill_tree_list = info["BehaviorList"]
    for item in skill_tree_list:
        id = str(item["BehaviorID"])
        level = item["Level"]
        skill_list = index["character_skill_trees"][id]["level_up_skills"]
        for skill in skill_list:
            skill["num"] *= level
            level_up_skills.append(skill)
    return level_up_skills

def get_properties_from_character_skill_tree2(info):
    properties = []
    skill_tree_list = info["BehaviorList"]
    for item in skill_tree_list:
        id = str(item["BehaviorID"])
        level = item["Level"]
        skill_properties = index["character_skill_trees"][id]["levels"][level - 1][
            "properties"
        ]
        for property in skill_properties:
            properties.append(property)
    return properties

def get_promotions_from_character(info):
    promotions = {}
    id = str(info["AvatarID"])
    level = info["Level"]
    promotion = info["Promotion"]
    values = index["character_promotions"][id]["values"][promotion]
    for k, v in values.items():
        promotions[k] = v["base"] + v["step"] * (level - 1)
    return promotions

def parse_light_cone(info):
    light_cone_info = {}
    if "EquipmentID" in info:
        info = info["EquipmentID"]
        id = str(info["ID"])
        light_cone_info["name"] = index["light_cones"][id]["name"]
        light_cone_info["rarity"] = index["light_cones"][id]["rarity"]
        light_cone_info["rank"] = info["Rank"]
        light_cone_info["level"] = info["Level"]
    return light_cone_info

def get_properties_from_light_cone_rank(info):
    properties = []
    if "EquipmentID" in info:
        info = info["EquipmentID"]
        id = str(info["ID"])
        rank = info["Rank"]
        properties = index["light_cone_ranks"][id]["properties"][rank - 1]
    return properties

def get_promotions_from_light_cone(info, promotions):
    if "EquipmentID" in info:
        info = info["EquipmentID"]
        id = str(info["ID"])
        level = info["Level"]
        promotion = info["Promotion"]
        values = index["light_cone_promotions"][id]["values"][promotion]
        for k, v in values.items():
            promotions[k] += v["base"] + v["step"] * (level - 1)
    return promotions

def get_relic_info(info):
    relic_info = {}
    if "RelicList" in info:
        infos = info["RelicList"]
        for info in infos:
            id = str(info["ID"])
            type = str(info["Type"])
            level = info["Level"] if "Level" in info else 0
            relic_info[type] = {}
            relic_info[type]["name"] = index["relics"][id]["name"]
            relic_info[type]["rarity"] = index["relics"][id]["rarity"]
            main_affix_group = index["relics"][id]["main_affix_id"]
            main_affix_id = str(info["MainAffixID"])
            main_affix = index["relic_main_affixs"][main_affix_group]["affixs"][
                main_affix_id
            ]
            main_property = {
                "type": main_affix["property"],
                "value": main_affix["base"] + main_affix["step"] * level,
            }
            sub_affix_group = index["relics"][id]["sub_affix_id"]
            sub_affixs = info["RelicSubAffix"]
            sub_property = []
            for sub_affix in sub_affixs:
                sub_affix_id = str(sub_affix["SubAffixID"])
                cnt = sub_affix["Cnt"]
                step = sub_affix["Step"] if "Step" in sub_affix else 0
                sub_affix = index["relic_sub_affixs"][sub_affix_group]["affixs"][
                    sub_affix_id
                ]
                sub_property.append(
                    {
                        "type": sub_affix["property"],
                        "value": sub_affix["base"] * cnt + sub_affix["step"] * step,
                    }
                )
            relic_info[type]["main_property"] = main_property
            relic_info[type]["sub_property"] = sub_property
    return relic_info

def get_properties_from_relic_set(info):
    properties = []
    set_id_map = {}
    if "RelicList" in info:
        infos = info["RelicList"]
        for info in infos:
            id = str(info["ID"])
            set_id = index["relics"][id]["set_id"]
            if set_id not in set_id_map:
                set_id_map[set_id] = 1
            else:
                set_id_map[set_id] += 1
    for k, v in set_id_map.items():
        if v >= 2:
            for i in index["relic_sets"][k]["properties"][0]:
                properties.append(i)
        if v == 4:
            for i in index["relic_sets"][k]["properties"][1]:
                properties.append(i)
    return properties

def parse_property(promotions, properties):
    property_dict = {}
    property_promotions = {}
    for property in properties:
        if property["type"] not in property_dict:
            property_dict[property["type"]] = property["value"]
        else:
            property_dict[property["type"]] += property["value"]
    for k, value in property_dict.items():
        field = index["properties"][k]["field"]
        ratio = index["properties"][k]["ratio"]
        order = index["properties"][k]["order"]
        if field:
            if ratio and field in promotions:
                value = promotions[field] * value
            if field not in property_promotions:
                property_promotions[field] = {}
                property_promotions[field]["order"] = order
                property_promotions[field]["value"] = value
            else:
                if order < property_promotions[field]["order"]:
                    property_promotions[field]["order"] = order
                property_promotions[field]["value"] += value
    property_promotions = sorted(
        property_promotions.items(), key=lambda item: item[1]["order"]
    )
    property_promotions = {k: v["value"] for k, v in property_promotions}
    return property_promotions

def get_properties_from_relic_info(info):
    properties = []
    for v in info.values():
        properties.append(v["main_property"])
        properties += v["sub_property"]
    return properties

def fix_relic_info(info):
    def parse_prop(prop):
        type = prop["type"]
        value = prop["value"]
        name = index["properties"][type]["name"]
        # if "Ratio" in type or "Rate" in type or "Status" in type:
        if value < 1:
            value = format(math.floor(value * 1000) / 10.0, ".1f") + "%"
        else:
            value = str(math.floor(float(value)))
        return name, value

    for k, v in info.items():
        name, value = parse_prop(v["main_property"])
        info[k]["main_property"] = {
            "name": name,
            "value": value,
        }
        sub_property = []
        for vv in v["sub_property"]:
            name, value = parse_prop(vv)
            sub_property.append(
                {
                    "name": name,
                    "value": value,
                }
            )
        info[k]["sub_property"] = sub_property
    return info

def parse_display_list(info):
    info_new = []
    name_mapping = {}
    for v in index["properties"].values():
        if v["field"] and v["field"] not in name_mapping:
            name_mapping[v["field"]] = v["name"]
    for k, v in info.items():
        if k in name_mapping:
            if k in {"hp", "atk", "def", "spd"}:
                value = str(math.floor(float(v)))
            else:
                value = format(math.floor(v * 1000) / 10.0, ".1f") + "%"
            info_new.append(
                {
                    "name": name_mapping[k],
                    "value": value,
                }
            )
    return info_new

def parse_character(info):
    character_info = {}
    id = str(info["AvatarID"])
    character_info["name"] = index["characters"][id]["name"]
    character_info["rarity"] = index["characters"][id]["rarity"]
    character_info["level"] = info["Level"]
    character_info["path"] = index["paths"][index["characters"][id]["path"]]["name"]
    character_info["element"] = index["elements"][index["characters"][id]["element"]][
        "name"
    ]
    level_up_skills = []
    level_up_skills += get_level_up_skills_from_character_rank(info)
    level_up_skills += get_level_up_skills_from_character_skill_tree(info)
    skill_info = get_skill_info_by_level_up_skills(info, level_up_skills)
    character_info["skill"] = skill_info
    promotions = get_promotions_from_character(info)
    promotions = get_promotions_from_light_cone(info, promotions)
    character_info["light_cone"] = parse_light_cone(info)
    properties = []
    properties += get_properties_from_character_skill_tree2(info)
    properties += get_properties_from_light_cone_rank(info)
    relic_info = get_relic_info(info)
    properties += get_properties_from_relic_info(relic_info)
    relic_info_new = fix_relic_info(relic_info)
    character_info["relic"] = relic_info_new
    properties += get_properties_from_relic_set(info)
    properties = parse_property(promotions, properties)
    character_info["promotion"] = parse_display_list(promotions)
    character_info["property"] = parse_display_list(properties)
    return character_info

def parse(response):
    for k, v in index_files.items():
        index[k] = load_json_file(v)
    player_info = response["PlayerDetailInfo"]
    result["uid"] = str(player_info["UID"])
    result["name"] = player_info["NickName"]
    result["level"] = player_info["Level"]
    result["head_icon"] = str(player_info["HeadIconID"])
    result["signature"] = player_info["Signature"] if "Signature" in player_info else ""
    character_list = []
    if "AssistAvatar" in player_info:
        character_list.append(player_info["AssistAvatar"])
    if "DisplayAvatarList" in player_info:
        for i in player_info["DisplayAvatarList"]:
            character_list.append(i)
    result["characters"] = []
    for i in character_list:
        result["characters"].append(parse_character(i))
    return result

if __name__ == "__main__":
    response = load_json_file(response_file)
    res = parse(response)
    with open(Path(__file__).parent / "out.json", "w", encoding="utf-8") as f:
        f.write(json.dumps(res, ensure_ascii=False))
```

返回格式如下：

```json
{
    "uid": "100000000", 
    "name": "dev_test", 
    "level": 43, 
    "head_icon": "201013", 
    "signature": "", 
    "characters": [
        {
            "name": "姬子", 
            "rarity": 5, 
            "level": 60, 
            "path": "智识", 
            "element": "火", 
            "skill": [
                {"name": "武装调律", "level": 2}, 
                {"name": "熔核爆裂", "level": 3}, 
                {"name": "天坠之火", "level": 3}, 
                {"name": "乘胜追击", "level": 3}, 
                {"name": "不完全燃烧", "level": 1}
            ], 
            "light_cone": {"name": "天才们的休憩", "rarity": 4, "rank": 2, "level": 50}, 
            "relic": {
                "1": {
                    "name": "火匠的黑曜目镜", 
                    "rarity": 4, 
                    "main_property": {"name": "生命值", "value": "374"}, 
                    "sub_property": [
                        {"name": "攻击力", "value": "15"}, 
                        {"name": "生命值", "value": "5.8%"}, 
                        {"name": "防御力", "value": "3.8%"}, 
                        {"name": "击破特攻", "value": "4.6%"}
                    ]
                },
                // ...
                "6": {
                    "name": "「黑塔」的漫历轨迹", 
                    "rarity": 3, 
                    "main_property": {"name": "攻击力", "value": "12.8%"}, 
                    "sub_property": [
                        {"name": "生命值", "value": "25"}, 
                        {"name": "生命值", "value": "2.0%"}, 
                        {"name": "效果命中", "value": "2.3%"}, 
                        {"name": "效果抵抗", "value": "2.0%"}
                    ]
                }
            }, 
            "promotion": [
                {"name": "生命值", "value": "1280"}, 
                {"name": "攻击力", "value": "846"}, 
                {"name": "防御力", "value": "559"}, 
                {"name": "速度", "value": "96"}, 
                {"name": "暴击率", "value": "5.0%"}, 
                {"name": "暴击伤害", "value": "50.0%"}
            ], 
            "property": [
                {"name": "击破特攻", "value": "4.6%"}, 
                {"name": "暴击率", "value": "2.3%"}, 
                {"name": "暴击伤害", "value": "12.9%"}, 
                {"name": "效果抵抗", "value": "7.9%"}, 
                {"name": "火属性伤害提高", "value": "13.2%"}, 
                {"name": "生命值", "value": "746"}, 
                {"name": "攻击力", "value": "898"}, 
                {"name": "防御力", "value": "74"}, 
                {"name": "速度", "value": "3"}
            ]
        },
        {
            "name": "希儿",
            // ...
        },
        // ...
    ]
}
```

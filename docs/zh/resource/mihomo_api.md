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
            "ChallengeData": {
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
                            // 副词条次数
                            "Cnt": 1, 
                            // 副词条步进
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
        "DisplayAvatarList": [
            // ...
            // 结构同支援角色信息 一共最多 3 个
        ]
    }
}
```

## MihomoAPI 字段解析

### 角色解析

### 光锥解析

### 遗器解析

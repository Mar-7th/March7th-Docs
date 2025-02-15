---
title: 原始数据 API
icon: ph:link-simple-break
order: 1
category:
  - Resource
---

<!-- markdownlint-disable MD036 -->

本页面介绍 MiHoMo 原始数据 API 的使用方式。

<!-- more -->

## 原始数据 API

端点: `/sr_info/{uid}`

**路径参数**

| 字段名 | 数据类型 | 说明         |
| ------ | -------- | ------------ |
| uid    | string   | 查询玩家 UID |

**请求示例**

```http
GET /sr_info/100000999 HTTP/1.1
Host: api.mihomo.me
User-Agent: Your-App-Name
```

**响应数据**

参考响应数据：

```json
{
  // 玩家详细信息字段
  // 当前返回结果仅包含此字段
  "detailInfo": {
    // 游戏 uid
    "uid": 100000999,
    // 昵称
    "nickname": "NICKNAME",
    // 账号等级
    "level": 34,
    // 均衡等级 / 世界等级
    "worldLevel": 2,
    // 当前好友数量
    "friendCount": 24,
    // 使用头像 id
    "headIcon": 201209,
    // 签名 若未设置签名 返回结果无此字段
    "signature": "SIGNATURE",
    // 是否公开显示角色信息
    "IsDisplayAvatarList": true,
    // 平台信息
    "platform": 2,
    "recordInfo": {
      // 流光忆庭信息
      "challengeInfo": {
        // 回忆关卡总进度
        "noneScheduleMaxLevel": 21,
        // 混沌回忆id
        "scheduleGroupId": 1014,
        // 混沌回忆进度
        "abyssLevel": 11,
        // 混沌回忆获得星数
        "abyssStarCount": 33
      },
      // 拥有角色数量
      "avatarCount": 41,
      // 拥有光锥数量
      "equipmentCount": 74,
      // 拥有遗器数量
      "relicCount": 1842,
      // 获得成就数量
      "achievementCount": 398,
      // 书籍物品数量
      "bookCount": 124,
      // 音乐物品数量
      "musicCount": 18,
      // 模拟宇宙进度
      "maxRogueChallengeScore": 9
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
          // 遗器类型 1-头部 2-手套 ...
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
      // 多出一个 pos 字段表示显示位置，1 和 2 对应中间和右侧
    ]
  }
}
```

参考 Python 数据结构：

```python
# 使用 pydantic 时取消注释
# from pydantic import BaseModel as Model

# 使用 msgspec 时取消注释
# from msgspec import Struct as Model

from typing import List, Optional

class SpaceChallengeData(Model):
    scheduleGroupId: Optional[int] = None
    abyssLevel: int = 0
    abyssStarCount: int = 0
    noneScheduleMaxLevel: int = 0

class SpaceData(Model):
    challengeInfo: Optional[SpaceChallengeData] = None
    maxRogueChallengeScore: int = 0
    avatarCount: int = 0
    equipmentCount: int = 0
    relicCount: int = 0
    achievementCount: int = 0
    bookCount: int = 0
    musicCount: int = 0

class EquipmentData(Model):
    tid: Optional[int] = None
    rank: int = 1
    level: int = 1
    promotion: int = 0

class SkillTreeData(Model):
    pointId: int
    level: int = 0

class SubAffixData(Model):
    affixId: int
    cnt: int = 0
    step: int = 0

class RelicData(Model):
    tid: int
    mainAffixId: int
    type: int
    level: int = 0
    exp: int = 0
    subAffixList: List[SubAffixData] = []

class CharacterData(Model):
    avatarId: int
    pos: int = 0
    rank: int = 0
    level: int = 1
    promotion: int = 0
    equipment: Optional[EquipmentData] = None
    skillTreeList: List[SkillTreeData] = []
    relicList: List[RelicData] = []

class PlayerData(Model):
    uid: int
    nickname: str
    level: int = 0
    worldLevel: int = 0
    friendCount: int = 0
    headIcon: int = 200001
    signature: str = ""
    isDisplayAvatar: bool = False
    recordInfo: Optional[SpaceData] = None
    assistAvatarList: List[CharacterData] = []
    avatarDetailList: List[CharacterData] = []

class MihomoApiData(Model):
    detailInfo: Optional[PlayerData] = None
```

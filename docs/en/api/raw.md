---
title: Raw Data API
icon: ph:link-simple-break
order: 1
category:
  - Resource
---

<!-- markdownlint-disable MD036 -->

This page shows usage of MiHoMo Raw Data API.

<!-- more -->

## Raw Data API

Endpoint: `/sr_info/{uid}`

**Path Params**

| Name | Type   | Explanation |
| ---- | ------ | ----------- |
| uid  | string | Player UID  |

**Example**

```http
GET /sr_info/100000999 HTTP/1.1
Host: api.mihomo.me
User-Agent: Your-App-Name
```

**Response**

Response data example:

```json
{
  "detailInfo": {
    "uid": 100000999,
    "nickname": "NICKNAME",
    "level": 34,
    "worldLevel": 2,
    "friendCount": 24,
    "headIcon": 201209,
    // Optional
    "signature": "SIGNATURE",
    "IsDisplayAvatarList": true,
    "platform": 2,
    "recordInfo": {
      // Memory & Memory of chaos info
      "challengeInfo": {
        // Memory totally cleared level
        "noneScheduleMaxLevel": 21,
        /// Memory of chaos id
        "scheduleGroupId": 1014,
        // Memory of chaos cleared level
        "abyssLevel": 11,
        // Memory of chaos star count
        "abyssStarCount": 33
      },
      "avatarCount": 41,
      "equipmentCount": 74,
      "relicCount": 1842,
      "achievementCount": 398,
      "bookCount": 124,
      "musicCount": 18,
      // Simulated universe cleared level
      "maxRogueChallengeScore": 9
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
          // 1-HEAD 2-HAND ...
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

Reference Python data model:

```python
# uncomment if you are using pydantic
# from pydantic import BaseModel as Model

# uncomment if you are using msgspec
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

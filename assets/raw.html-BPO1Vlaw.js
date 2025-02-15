import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as t,o as e}from"./app-DFt3kMaT.js";const p={};function o(l,n){return e(),a("div",null,n[0]||(n[0]=[t(`<p>本页面介绍 MiHoMo 原始数据 API 的使用方式。</p><h2 id="原始数据-api" tabindex="-1"><a class="header-anchor" href="#原始数据-api"><span>原始数据 API</span></a></h2><p>端点: <code>/sr_info/{uid}</code></p><p><strong>路径参数</strong></p><table><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td>uid</td><td>string</td><td>查询玩家 UID</td></tr></tbody></table><p><strong>请求示例</strong></p><div class="language-http line-numbers-mode" data-ext="http" data-title="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/sr_info/100000999</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span> <span class="token header-value">api.mihomo.me</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">Your-App-Name</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>响应数据</strong></p><p>参考响应数据：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">// 玩家详细信息字段</span>
  <span class="token comment">// 当前返回结果仅包含此字段</span>
  <span class="token property">&quot;detailInfo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 游戏 uid</span>
    <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">100000999</span><span class="token punctuation">,</span>
    <span class="token comment">// 昵称</span>
    <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NICKNAME&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 账号等级</span>
    <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">34</span><span class="token punctuation">,</span>
    <span class="token comment">// 均衡等级 / 世界等级</span>
    <span class="token property">&quot;worldLevel&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 当前好友数量</span>
    <span class="token property">&quot;friendCount&quot;</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
    <span class="token comment">// 使用头像 id</span>
    <span class="token property">&quot;headIcon&quot;</span><span class="token operator">:</span> <span class="token number">201209</span><span class="token punctuation">,</span>
    <span class="token comment">// 签名 若未设置签名 返回结果无此字段</span>
    <span class="token property">&quot;signature&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SIGNATURE&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否公开显示角色信息</span>
    <span class="token property">&quot;IsDisplayAvatarList&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 平台信息</span>
    <span class="token property">&quot;platform&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;recordInfo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 流光忆庭信息</span>
      <span class="token property">&quot;challengeInfo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 回忆关卡总进度</span>
        <span class="token property">&quot;noneScheduleMaxLevel&quot;</span><span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span>
        <span class="token comment">// 混沌回忆id</span>
        <span class="token property">&quot;scheduleGroupId&quot;</span><span class="token operator">:</span> <span class="token number">1014</span><span class="token punctuation">,</span>
        <span class="token comment">// 混沌回忆进度</span>
        <span class="token property">&quot;abyssLevel&quot;</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
        <span class="token comment">// 混沌回忆获得星数</span>
        <span class="token property">&quot;abyssStarCount&quot;</span><span class="token operator">:</span> <span class="token number">33</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 拥有角色数量</span>
      <span class="token property">&quot;avatarCount&quot;</span><span class="token operator">:</span> <span class="token number">41</span><span class="token punctuation">,</span>
      <span class="token comment">// 拥有光锥数量</span>
      <span class="token property">&quot;equipmentCount&quot;</span><span class="token operator">:</span> <span class="token number">74</span><span class="token punctuation">,</span>
      <span class="token comment">// 拥有遗器数量</span>
      <span class="token property">&quot;relicCount&quot;</span><span class="token operator">:</span> <span class="token number">1842</span><span class="token punctuation">,</span>
      <span class="token comment">// 获得成就数量</span>
      <span class="token property">&quot;achievementCount&quot;</span><span class="token operator">:</span> <span class="token number">398</span><span class="token punctuation">,</span>
      <span class="token comment">// 书籍物品数量</span>
      <span class="token property">&quot;bookCount&quot;</span><span class="token operator">:</span> <span class="token number">124</span><span class="token punctuation">,</span>
      <span class="token comment">// 音乐物品数量</span>
      <span class="token property">&quot;musicCount&quot;</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
      <span class="token comment">// 模拟宇宙进度</span>
      <span class="token property">&quot;maxRogueChallengeScore&quot;</span><span class="token operator">:</span> <span class="token number">9</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 支援角色信息</span>
    <span class="token property">&quot;assistAvatarDetail&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 角色id</span>
      <span class="token property">&quot;avatarId&quot;</span><span class="token operator">:</span> <span class="token number">1209</span><span class="token punctuation">,</span>
      <span class="token comment">// 角色星魂数 若未解锁星魂则无此字段</span>
      <span class="token property">&quot;rank&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token comment">// 角色等级</span>
      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
      <span class="token comment">// 角色晋阶等级</span>
      <span class="token property">&quot;promotion&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token comment">// 光锥信息 若无光锥此项为 {}</span>
      <span class="token property">&quot;equipment&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 光锥id</span>
        <span class="token property">&quot;tid&quot;</span><span class="token operator">:</span> <span class="token number">21020</span><span class="token punctuation">,</span>
        <span class="token comment">// 光锥叠影数</span>
        <span class="token property">&quot;rank&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token comment">// 光锥等级</span>
        <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
        <span class="token comment">// 光锥晋阶等级</span>
        <span class="token property">&quot;promotion&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 行迹 / 技能树信息</span>
      <span class="token property">&quot;skillTreeList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token comment">// 行迹id</span>
          <span class="token property">&quot;pointId&quot;</span><span class="token operator">:</span> <span class="token number">1003001</span><span class="token punctuation">,</span>
          <span class="token comment">// 行迹等级</span>
          <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// ...</span>
        <span class="token comment">// 只包括已经解锁的行迹，目前最多 18 个</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// 遗器信息</span>
      <span class="token property">&quot;relicList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token comment">// 遗器id</span>
          <span class="token property">&quot;tid&quot;</span><span class="token operator">:</span> <span class="token number">51071</span><span class="token punctuation">,</span>
          <span class="token comment">// 遗器类型 1-头部 2-手套 ...</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token comment">// 遗器等级</span>
          <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
          <span class="token comment">// 当前经验</span>
          <span class="token property">&quot;exp&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
          <span class="token comment">// 遗器主词条id 需要在遗器主词条组的索引</span>
          <span class="token property">&quot;mainAffixId&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token comment">// 副词条</span>
          <span class="token property">&quot;subAffixList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token comment">// 副词条id</span>
              <span class="token property">&quot;affixId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token comment">// 副词条基础值数量</span>
              <span class="token property">&quot;cnt&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token comment">// 副词条步进值数量 可选</span>
              <span class="token property">&quot;step&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// ...</span>
            <span class="token comment">// 其他副词条</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// ...</span>
        <span class="token comment">// 其他遗器 一共最多 6 个</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 展示角色（星海同行）信息</span>
    <span class="token comment">// 若未设置则不返回此字段</span>
    <span class="token property">&quot;avatarDetailList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// ...</span>
      <span class="token comment">// 结构同支援角色信息 一共最多 3 个</span>
      <span class="token comment">// 多出一个 pos 字段表示显示位置，1 和 2 对应中间和右侧</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考 Python 数据结构：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># 使用 pydantic 时取消注释</span>
<span class="token comment"># from pydantic import BaseModel as Model</span>

<span class="token comment"># 使用 msgspec 时取消注释</span>
<span class="token comment"># from msgspec import Struct as Model</span>

<span class="token keyword">from</span> typing <span class="token keyword">import</span> List<span class="token punctuation">,</span> Optional

<span class="token keyword">class</span> <span class="token class-name">SpaceChallengeData</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    scheduleGroupId<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>
    abyssLevel<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    abyssStarCount<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    noneScheduleMaxLevel<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">class</span> <span class="token class-name">SpaceData</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    challengeInfo<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>SpaceChallengeData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>
    maxRogueChallengeScore<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    avatarCount<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    equipmentCount<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    relicCount<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    achievementCount<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    bookCount<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    musicCount<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">class</span> <span class="token class-name">EquipmentData</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    tid<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>
    rank<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span>
    level<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span>
    promotion<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">class</span> <span class="token class-name">SkillTreeData</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    pointId<span class="token punctuation">:</span> <span class="token builtin">int</span>
    level<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">class</span> <span class="token class-name">SubAffixData</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    affixId<span class="token punctuation">:</span> <span class="token builtin">int</span>
    cnt<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    step<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">class</span> <span class="token class-name">RelicData</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    tid<span class="token punctuation">:</span> <span class="token builtin">int</span>
    mainAffixId<span class="token punctuation">:</span> <span class="token builtin">int</span>
    <span class="token builtin">type</span><span class="token punctuation">:</span> <span class="token builtin">int</span>
    level<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    exp<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    subAffixList<span class="token punctuation">:</span> List<span class="token punctuation">[</span>SubAffixData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">class</span> <span class="token class-name">CharacterData</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    avatarId<span class="token punctuation">:</span> <span class="token builtin">int</span>
    pos<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    rank<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    level<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span>
    promotion<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    equipment<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>EquipmentData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>
    skillTreeList<span class="token punctuation">:</span> List<span class="token punctuation">[</span>SkillTreeData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    relicList<span class="token punctuation">:</span> List<span class="token punctuation">[</span>RelicData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">class</span> <span class="token class-name">PlayerData</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    uid<span class="token punctuation">:</span> <span class="token builtin">int</span>
    nickname<span class="token punctuation">:</span> <span class="token builtin">str</span>
    level<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    worldLevel<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    friendCount<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    headIcon<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">200001</span>
    signature<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    isDisplayAvatar<span class="token punctuation">:</span> <span class="token builtin">bool</span> <span class="token operator">=</span> <span class="token boolean">False</span>
    recordInfo<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>SpaceData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>
    assistAvatarList<span class="token punctuation">:</span> List<span class="token punctuation">[</span>CharacterData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    avatarDetailList<span class="token punctuation">:</span> List<span class="token punctuation">[</span>CharacterData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">class</span> <span class="token class-name">MihomoApiData</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    detailInfo<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>PlayerData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12)]))}const u=s(p,[["render",o],["__file","raw.html.vue"]]),r=JSON.parse('{"path":"/zh/api/raw.html","title":"原始数据 API","lang":"zh-CN","frontmatter":{"title":"原始数据 API","icon":"ph:link-simple-break","order":1,"category":["Resource"],"description":"本页面介绍 MiHoMo 原始数据 API 的使用方式。 原始数据 API 端点: /sr_info/{uid} 路径参数 请求示例 响应数据 参考响应数据： 参考 Python 数据结构：","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://march7th.xyz/en/api/raw.html"}],["meta",{"property":"og:url","content":"https://march7th.xyz/zh/api/raw.html"}],["meta",{"property":"og:site_name","content":"March7th 文档"}],["meta",{"property":"og:title","content":"原始数据 API"}],["meta",{"property":"og:description","content":"本页面介绍 MiHoMo 原始数据 API 的使用方式。 原始数据 API 端点: /sr_info/{uid} 路径参数 请求示例 响应数据 参考响应数据： 参考 Python 数据结构："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-02-15T15:04:10.000Z"}],["meta",{"property":"article:author","content":"Mar-7th"}],["meta",{"property":"article:modified_time","content":"2025-02-15T15:04:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"原始数据 API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-15T15:04:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mar-7th\\",\\"url\\":\\"https://github.com/Mar-7th\\"}]}"]]},"headers":[{"level":2,"title":"原始数据 API","slug":"原始数据-api","link":"#原始数据-api","children":[]}],"git":{"createdTime":1716720786000,"updatedTime":1739631850000,"contributors":[{"name":"mobyw","email":"mobyw66@gmail.com","commits":2}]},"readingTime":{"minutes":2.78,"words":833},"filePathRelative":"zh/api/raw.md","localizedDate":"2024年5月26日","autoDesc":true}');export{u as comp,r as data};

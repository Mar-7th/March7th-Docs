import{_ as p,X as o,Y as e,a2 as l,Z as n,a1 as s,$ as t,a3 as c,E as i}from"./framework-1ef9a219.js";const u={},r=n("p",null,"This page shows usage of MiHoMo API.",-1),k=n("h2",{id:"mihomo-api-call",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mihomo-api-call","aria-hidden":"true"},"#"),s(" MiHoMo API Call")],-1),d=n("h3",{id:"reqest-method",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reqest-method","aria-hidden":"true"},"#"),s(" Reqest Method")],-1),v={href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"If you are using MiHoMo API in a bot or web application, it is recommend to add app info in User-Agent to support API service debugging.",-1),b={href:"https://api.mihomo.me",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/Mar-7th/StarRailRes",target:"_blank",rel:"noopener noreferrer"},y=c(`<h3 id="mihomo-originapi" tabindex="-1"><a class="header-anchor" href="#mihomo-originapi" aria-hidden="true">#</a> MiHoMo OriginAPI</h3><p>MiHoMo OriginAPI returns origin player data.</p><p>End point: <code>/sr_info/{uid}</code></p><p><strong>Path Params</strong></p><table><thead><tr><th>Name</th><th>Type</th><th>Explanation</th></tr></thead><tbody><tr><td>uid</td><td>string</td><td>Player UID</td></tr></tbody></table><p><strong>Response</strong></p><p>See <a href="#mihomo-originapi-response">MiHoMo OriginAPI Response</a></p><h3 id="mihomo-parsedapi" tabindex="-1"><a class="header-anchor" href="#mihomo-parsedapi" aria-hidden="true">#</a> MiHoMo ParsedAPI</h3><p>MiHoMo OriginAPI returns parsed player data.</p><p>Endpoint: <code>/sr_info_parsed/{uid}</code></p><p><strong>Path Params</strong></p><table><thead><tr><th>Name</th><th>Type</th><th>Explanation</th></tr></thead><tbody><tr><td>uid</td><td>string</td><td>Player UID</td></tr></tbody></table><p><strong>Query Prams</strong></p><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Explanation</th></tr></thead><tbody><tr><td>lang</td><td>string</td><td>cn</td><td>Language</td></tr><tr><td>version</td><td>string</td><td>v2</td><td>API version</td></tr></tbody></table><p>Supported language list:</p><table><thead><tr><th>Code</th><th>Language</th></tr></thead><tbody><tr><td>cn</td><td>简体中文</td></tr><tr><td>cht</td><td>繁體中文</td></tr><tr><td>de</td><td>Deutsch</td></tr><tr><td>en</td><td>English</td></tr><tr><td>es</td><td>Español</td></tr><tr><td>fr</td><td>Français</td></tr><tr><td>id</td><td>Bahasa Indonesia</td></tr><tr><td>jp</td><td>日本語</td></tr><tr><td>kr</td><td>한국어</td></tr><tr><td>pt</td><td>Português</td></tr><tr><td>ru</td><td>Русский</td></tr><tr><td>th</td><td>ภาษาไทย</td></tr><tr><td>vi</td><td>Tiếng Việt</td></tr></tbody></table><p><strong>Response</strong></p><p>See <a href="#mihomo-parsedapi-response">MiHoMo ParsedAPI Response</a></p><h2 id="mihomo-api-data-model" tabindex="-1"><a class="header-anchor" href="#mihomo-api-data-model" aria-hidden="true">#</a> MiHoMo API Data Model</h2><h3 id="mihomo-originapi-response" tabindex="-1"><a class="header-anchor" href="#mihomo-originapi-response" aria-hidden="true">#</a> MiHoMo OriginAPI Response</h3><p>MiHoMo OriginAPI response data:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;detailInfo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">100114514</span><span class="token punctuation">,</span>
    <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Tadokoro&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">34</span><span class="token punctuation">,</span>
    <span class="token property">&quot;worldLevel&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;friendCount&quot;</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
    <span class="token property">&quot;headIcon&quot;</span><span class="token operator">:</span> <span class="token number">201209</span><span class="token punctuation">,</span>
    <span class="token property">&quot;signature&quot;</span><span class="token operator">:</span> <span class="token string">&quot;いいよ、こいよ&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;platform&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ANDROID&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;IsDisplayAvatarList&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;recordInfo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// Equals {} when not unlock</span>
      <span class="token property">&quot;challengeInfo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;scheduleMaxLevel&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
        <span class="token comment">// Optional</span>
        <span class="token property">&quot;scheduleGroupId&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token comment">// Optional</span>
        <span class="token property">&quot;noneScheduleMaxLevel&quot;</span><span class="token operator">:</span> <span class="token number">112</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;maxRogueChallengeScore&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;equipmentCount&quot;</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
      <span class="token property">&quot;avatarCount&quot;</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
      <span class="token property">&quot;achievementCount&quot;</span><span class="token operator">:</span> <span class="token number">119</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;assistAvatarDetail&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;avatarId&quot;</span><span class="token operator">:</span> <span class="token number">1209</span><span class="token punctuation">,</span>
      <span class="token comment">// Character eidolon. Optional</span>
      <span class="token property">&quot;rank&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
      <span class="token comment">// Character ascension. Optional</span>
      <span class="token property">&quot;promotion&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token comment">// Light cone info, equals {} when no light cone</span>
      <span class="token property">&quot;equipment&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;tid&quot;</span><span class="token operator">:</span> <span class="token number">21020</span><span class="token punctuation">,</span>
        <span class="token comment">// Light cone superimposition</span>
        <span class="token property">&quot;rank&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
        <span class="token comment">// Light cone ascended</span>
        <span class="token property">&quot;promotion&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;skillTreeList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;pointId&quot;</span><span class="token operator">:</span> <span class="token number">1003001</span><span class="token punctuation">,</span>
          <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// ...</span>
        <span class="token comment">// Only unlocked</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relicList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;tid&quot;</span><span class="token operator">:</span> <span class="token number">51071</span><span class="token punctuation">,</span>
          <span class="token comment">// 1-HEAD 2-HAND 3-BODY 4-FOOT 5-NECK 6-OBJECT</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
          <span class="token property">&quot;exp&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
          <span class="token property">&quot;mainAffixId&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;subAffixList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;affixId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token comment">// Base value count</span>
              <span class="token property">&quot;cnt&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token comment">// Boost value count</span>
              <span class="token property">&quot;step&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// ...</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// ...</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;avatarDetailList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// ...</span>
      <span class="token comment">// List item same as assistAvatarDetail</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Reference data model:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">SpaceChallengeData</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    scheduleMaxLevel<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    scheduleGroupId<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    noneScheduleMaxLevel<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">class</span> <span class="token class-name">SpaceData</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    challengeInfo<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>SpaceChallengeData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>
    maxRogueChallengeScore<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    equipmentCount<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    avatarCount<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    achievementCount<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">class</span> <span class="token class-name">EquipmentData</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    tid<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>
    rank<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span>
    level<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span>
    promotion<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">class</span> <span class="token class-name">SkillTreeData</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    pointId<span class="token punctuation">:</span> <span class="token builtin">int</span>
    level<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">class</span> <span class="token class-name">SubAffixData</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    affixId<span class="token punctuation">:</span> <span class="token builtin">int</span>
    cnt<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    step<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">class</span> <span class="token class-name">RelicData</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    tid<span class="token punctuation">:</span> <span class="token builtin">int</span>
    mainAffixId<span class="token punctuation">:</span> <span class="token builtin">int</span>
    <span class="token builtin">type</span><span class="token punctuation">:</span> <span class="token builtin">int</span>
    level<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    exp<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    subAffixList<span class="token punctuation">:</span> List<span class="token punctuation">[</span>SubAffixData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">class</span> <span class="token class-name">CharacterData</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    avatarId<span class="token punctuation">:</span> <span class="token builtin">int</span>
    rank<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    level<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span>
    promotion<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    equipment<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>EquipmentData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>
    skillTreeList<span class="token punctuation">:</span> List<span class="token punctuation">[</span>SkillTreeData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    relicList<span class="token punctuation">:</span> List<span class="token punctuation">[</span>RelicData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">class</span> <span class="token class-name">PlayerData</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    uid<span class="token punctuation">:</span> <span class="token builtin">int</span>
    nickname<span class="token punctuation">:</span> <span class="token builtin">str</span>
    level<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    worldLevel<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    friendCount<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    headIcon<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">200001</span>
    signature<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    isDisplayAvatar<span class="token punctuation">:</span> <span class="token builtin">bool</span> <span class="token operator">=</span> <span class="token boolean">False</span>
    recordInfo<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>SpaceData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>
    assistAvatarDetail<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>CharacterData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>
    avatarDetailList<span class="token punctuation">:</span> List<span class="token punctuation">[</span>CharacterData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">class</span> <span class="token class-name">MihomoApiData</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    detailInfo<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>PlayerData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mihomo-parsedapi-response" tabindex="-1"><a class="header-anchor" href="#mihomo-parsedapi-response" aria-hidden="true">#</a> MiHoMo ParsedAPI Response</h3><p>MiHoMo ParsedAPI response data:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;player&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100xxxxxx&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NAME&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">34</span><span class="token punctuation">,</span>
    <span class="token property">&quot;world_level&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;friend_count&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
    <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;201209&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;彦卿&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/avatar/1209.png&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;signature&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_display&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;space_info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;challenge_data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;maze_group_id&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token property">&quot;maze_group_index&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token property">&quot;pre_maze_group_index&quot;</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;pass_area_progress&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;light_cone_count&quot;</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
      <span class="token property">&quot;avatar_count&quot;</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
      <span class="token property">&quot;achievement_count&quot;</span><span class="token operator">:</span> <span class="token number">119</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;characters&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1201&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;青雀&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;rarity&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">&quot;rank&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
      <span class="token property">&quot;promotion&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/character/1201.png&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;preview&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/character_preview/1201.png&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;portrait&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/character_portrait/1201.png&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;rank_icons&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;icon/skill/1201_rank1.png&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;icon/skill/1201_rank2.png&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;icon/skill/1201_skill.png&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;icon/skill/1201_rank4.png&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;icon/skill/1201_ultimate.png&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;icon/skill/1201_rank6.png&quot;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Mage&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;智识&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/path/Erudition.png&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;element&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Quantum&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;量子&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#1C29BA&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/element/Quantum.png&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;skills&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;120101&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;门前清&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;max_level&quot;</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
          <span class="token property">&quot;element&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Quantum&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;量子&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#1C29BA&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/element/Quantum.png&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Normal&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type_text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;普攻&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SingleAttack&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;effect_text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;单攻&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;simple_desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;使用1张牌，对敌方单体造成少量量子属性伤害。&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;使用1张当前花色最少的琼玉牌，对指定敌方单体造成等同于青雀50%攻击力的量子属性伤害。&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/skill/1201_basic_atk.png&quot;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// Other skills</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;skill_trees&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1201001&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/skill/1201_basic_atk.png&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1201002&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/skill/1201_skill.png&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1201003&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/skill/1201_ultimate.png&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1201004&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/skill/1201_talent.png&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1201007&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/skill/1201_technique.png&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1201201&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/property/IconAttack.png&quot;</span> <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;light_cone&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20020&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;睿见&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rarity&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rank&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
        <span class="token property">&quot;promotion&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/light_cone/20020.png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;preview&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/light_cone_preview/20020.png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;portrait&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/light_cone_portrait/20020.png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Mage&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;智识&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/path/Erudition.png&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hp&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;生命值&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/property/IconMaxHP.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">428.4</span><span class="token punctuation">,</span>
            <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;428&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;percent&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;atk&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;攻击力&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/property/IconAttack.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">214.2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;214&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;percent&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;def&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;防御力&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/property/IconDefence.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">153.0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;153&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;percent&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// Light cone properties</span>
        <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relics&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;51021&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;快枪手的野穗毡帽&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;set_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;102&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;set_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;野穗伴行的快枪手&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;rarity&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
          <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
          <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/relic/102_0.png&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;main_affix&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HPDelta&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hp&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;生命值&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/property/IconMaxHP.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">279.9820800104644</span><span class="token punctuation">,</span>
            <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;279&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;percent&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;sub_affix&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AttackDelta&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;atk&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;攻击力&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/property/IconAttack.png&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">13.548016000073403</span><span class="token punctuation">,</span>
              <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;13&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;percent&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token property">&quot;step&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// Other sub affixes</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// Other relics</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// Enabled relic sets</span>
      <span class="token property">&quot;relic_sets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;102&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;野穗伴行的快枪手&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/relic/102.png&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;num&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;攻击力提高12%。&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AttackAddedRatio&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;atk&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;攻击力&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/property/IconAttack.png&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">0.12</span><span class="token punctuation">,</span>
              <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12.0%&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;percent&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// Other relic sets</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// Character basic values</span>
      <span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hp&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;生命值&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/property/IconMaxHP.png&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">1075.6799999999998</span><span class="token punctuation">,</span>
          <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1075&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;percent&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// HP ATK DEF SPD CRIT-RATE CRIT-DMG</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// Character boost values</span>
      <span class="token property">&quot;additions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;atk&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;攻击力&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/property/IconAttack.png&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">515.0632508002462</span><span class="token punctuation">,</span>
          <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;515&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;percent&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;spd&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;速度&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/property/IconSpeed.png&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">5.88</span><span class="token punctuation">,</span>
          <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;percent&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// ...</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// Character detailed buff list</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AttackAddedRatio&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;atk&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;攻击力&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/property/IconAttack.png&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">0.40096000253222797</span><span class="token punctuation">,</span>
          <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;40.0%&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;percent&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// ...</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Reference data model:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">LevelInfo</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    level<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">class</span> <span class="token class-name">AvatarInfo</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    name<span class="token punctuation">:</span> <span class="token builtin">str</span>
    icon<span class="token punctuation">:</span> <span class="token builtin">str</span>

<span class="token keyword">class</span> <span class="token class-name">PathInfo</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    name<span class="token punctuation">:</span> <span class="token builtin">str</span>
    icon<span class="token punctuation">:</span> <span class="token builtin">str</span>

<span class="token keyword">class</span> <span class="token class-name">ElementInfo</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    name<span class="token punctuation">:</span> <span class="token builtin">str</span>
    color<span class="token punctuation">:</span> <span class="token builtin">str</span>
    icon<span class="token punctuation">:</span> <span class="token builtin">str</span>

<span class="token keyword">class</span> <span class="token class-name">SkillInfo</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    name<span class="token punctuation">:</span> <span class="token builtin">str</span>
    level<span class="token punctuation">:</span> <span class="token builtin">int</span>
    max_level<span class="token punctuation">:</span> <span class="token builtin">int</span>
    element<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>ElementInfo<span class="token punctuation">]</span>
    <span class="token builtin">type</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    type_text<span class="token punctuation">:</span> <span class="token builtin">str</span>
    effect<span class="token punctuation">:</span> <span class="token builtin">str</span>
    effect_text<span class="token punctuation">:</span> <span class="token builtin">str</span>
    simple_desc<span class="token punctuation">:</span> <span class="token builtin">str</span>
    desc<span class="token punctuation">:</span> <span class="token builtin">str</span>
    icon<span class="token punctuation">:</span> <span class="token builtin">str</span>

<span class="token keyword">class</span> <span class="token class-name">SkillTreeInfo</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    level<span class="token punctuation">:</span> <span class="token builtin">int</span>
    anchor<span class="token punctuation">:</span> <span class="token builtin">str</span>
    max_level<span class="token punctuation">:</span> <span class="token builtin">int</span>
    icon<span class="token punctuation">:</span> <span class="token builtin">str</span>
    parent<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>

<span class="token keyword">class</span> <span class="token class-name">AttributeInfo</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    field<span class="token punctuation">:</span> <span class="token builtin">str</span>
    name<span class="token punctuation">:</span> <span class="token builtin">str</span>
    icon<span class="token punctuation">:</span> <span class="token builtin">str</span>
    value<span class="token punctuation">:</span> <span class="token builtin">float</span>
    display<span class="token punctuation">:</span> <span class="token builtin">str</span>
    percent<span class="token punctuation">:</span> <span class="token builtin">bool</span>

<span class="token keyword">class</span> <span class="token class-name">PropertyInfo</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">type</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    field<span class="token punctuation">:</span> <span class="token builtin">str</span>
    name<span class="token punctuation">:</span> <span class="token builtin">str</span>
    icon<span class="token punctuation">:</span> <span class="token builtin">str</span>
    value<span class="token punctuation">:</span> <span class="token builtin">float</span>
    display<span class="token punctuation">:</span> <span class="token builtin">str</span>
    percent<span class="token punctuation">:</span> <span class="token builtin">bool</span>

<span class="token keyword">class</span> <span class="token class-name">SubAffixInfo</span><span class="token punctuation">(</span>PropertyInfo<span class="token punctuation">)</span><span class="token punctuation">:</span>
    count<span class="token punctuation">:</span> <span class="token builtin">int</span>
    step<span class="token punctuation">:</span> <span class="token builtin">int</span>

<span class="token keyword">class</span> <span class="token class-name">RelicInfo</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    name<span class="token punctuation">:</span> <span class="token builtin">str</span>
    set_id<span class="token punctuation">:</span> <span class="token builtin">str</span>
    set_name<span class="token punctuation">:</span> <span class="token builtin">str</span>
    rarity<span class="token punctuation">:</span> <span class="token builtin">int</span>
    level<span class="token punctuation">:</span> <span class="token builtin">int</span>
    icon<span class="token punctuation">:</span> <span class="token builtin">str</span>
    main_affix<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>PropertyInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>
    sub_affix<span class="token punctuation">:</span> List<span class="token punctuation">[</span>SubAffixInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">class</span> <span class="token class-name">RelicSetInfo</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    name<span class="token punctuation">:</span> <span class="token builtin">str</span>
    icon<span class="token punctuation">:</span> <span class="token builtin">str</span>
    num<span class="token punctuation">:</span> <span class="token builtin">int</span>
    desc<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    properties<span class="token punctuation">:</span> List<span class="token punctuation">[</span>PropertyInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">class</span> <span class="token class-name">LightConeInfo</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    name<span class="token punctuation">:</span> <span class="token builtin">str</span>
    rarity<span class="token punctuation">:</span> <span class="token builtin">int</span>
    rank<span class="token punctuation">:</span> <span class="token builtin">int</span>
    level<span class="token punctuation">:</span> <span class="token builtin">int</span>
    promotion<span class="token punctuation">:</span> <span class="token builtin">int</span>
    icon<span class="token punctuation">:</span> <span class="token builtin">str</span>
    preview<span class="token punctuation">:</span> <span class="token builtin">str</span>
    portrait<span class="token punctuation">:</span> <span class="token builtin">str</span>
    path<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>PathInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>
    attributes<span class="token punctuation">:</span> List<span class="token punctuation">[</span>AttributeInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    properties<span class="token punctuation">:</span> List<span class="token punctuation">[</span>PropertyInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">class</span> <span class="token class-name">SpaceChallengeInfo</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    maze_group_id<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    maze_group_index<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    pre_maze_group_index<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">class</span> <span class="token class-name">SpaceInfo</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    challenge_data<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>SpaceChallengeInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>
    pass_area_progress<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    light_cone_count<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    avatar_count<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    achievement_count<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">class</span> <span class="token class-name">PlayerInfo</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    uid<span class="token punctuation">:</span> <span class="token builtin">str</span>
    nickname<span class="token punctuation">:</span> <span class="token builtin">str</span>
    level<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    world_level<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    friend_count<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    avatar<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>AvatarInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>
    signature<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    is_display<span class="token punctuation">:</span> <span class="token builtin">bool</span> <span class="token operator">=</span> <span class="token boolean">False</span>
    space_info<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>SpaceInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>

<span class="token keyword">class</span> <span class="token class-name">CharacterInfo</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    name<span class="token punctuation">:</span> <span class="token builtin">str</span>
    rarity<span class="token punctuation">:</span> <span class="token builtin">int</span>
    rank<span class="token punctuation">:</span> <span class="token builtin">int</span>
    level<span class="token punctuation">:</span> <span class="token builtin">int</span>
    promotion<span class="token punctuation">:</span> <span class="token builtin">int</span>
    icon<span class="token punctuation">:</span> <span class="token builtin">str</span>
    preview<span class="token punctuation">:</span> <span class="token builtin">str</span>
    portrait<span class="token punctuation">:</span> <span class="token builtin">str</span>
    rank_icons<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    path<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>PathInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>
    element<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>ElementInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>
    skills<span class="token punctuation">:</span> List<span class="token punctuation">[</span>SkillInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    skill_trees<span class="token punctuation">:</span> List<span class="token punctuation">[</span>SkillTreeInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    light_cone<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>LightConeInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>
    relics<span class="token punctuation">:</span> List<span class="token punctuation">[</span>RelicInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    relic_sets<span class="token punctuation">:</span> List<span class="token punctuation">[</span>RelicSetInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    attributes<span class="token punctuation">:</span> List<span class="token punctuation">[</span>AttributeInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    additions<span class="token punctuation">:</span> List<span class="token punctuation">[</span>AttributeInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    properties<span class="token punctuation">:</span> List<span class="token punctuation">[</span>PropertyInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">class</span> <span class="token class-name">FormattedApiInfo</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    player<span class="token punctuation">:</span> PlayerInfo
    characters<span class="token punctuation">:</span> List<span class="token punctuation">[</span>CharacterInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function g(h,f){const a=i("ExternalLinkIcon");return o(),e("div",null,[r,l(" more "),k,d,n("p",null,[s("MiHoMo API uses HTTP GET request, reference："),n("a",v,[s("HTTP GET"),t(a)]),s(".")]),m,n("p",null,[s("Current API host: "),n("a",b,[s("https://api.mihomo.me"),t(a)])]),n("p",null,[s("Image resources repo: "),n("a",q,[s("https://github.com/Mar-7th/StarRailRes"),t(a)])]),y])}const I=p(u,[["render",g],["__file","mihomo_api.html.vue"]]);export{I as default};

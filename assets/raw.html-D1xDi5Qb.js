import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,e as t}from"./app-BYQgWMYB.js";const e={},p=t(`<p>This page shows usage of MiHoMo Raw Data API.</p><h2 id="raw-data-api" tabindex="-1"><a class="header-anchor" href="#raw-data-api"><span>Raw Data API</span></a></h2><p>Endpoint: <code>/sr_info/{uid}</code></p><p><strong>Path Params</strong></p><table><thead><tr><th>Name</th><th>Type</th><th>Explanation</th></tr></thead><tbody><tr><td>uid</td><td>string</td><td>Player UID</td></tr></tbody></table><p><strong>Example</strong></p><div class="language-http line-numbers-mode" data-ext="http" data-title="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/sr_info/100000999</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span> <span class="token header-value">api.mihomo.me</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">Your-App-Name</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Response</strong></p><p>Response data example:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;detailInfo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">100000999</span><span class="token punctuation">,</span>
    <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NICKNAME&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">34</span><span class="token punctuation">,</span>
    <span class="token property">&quot;worldLevel&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;friendCount&quot;</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
    <span class="token property">&quot;headIcon&quot;</span><span class="token operator">:</span> <span class="token number">201209</span><span class="token punctuation">,</span>
    <span class="token comment">// Optional</span>
    <span class="token property">&quot;signature&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SIGNATURE&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;IsDisplayAvatarList&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;platform&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;recordInfo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// Memory &amp; Memory of chaos info</span>
      <span class="token property">&quot;challengeInfo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// Memory totally cleared level</span>
        <span class="token property">&quot;noneScheduleMaxLevel&quot;</span><span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span>
        <span class="token comment">/// Memory of chaos id</span>
        <span class="token property">&quot;scheduleGroupId&quot;</span><span class="token operator">:</span> <span class="token number">1014</span><span class="token punctuation">,</span>
        <span class="token comment">// Memory of chaos cleared level</span>
        <span class="token property">&quot;abyssLevel&quot;</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
        <span class="token comment">// Memory of chaos star count</span>
        <span class="token property">&quot;abyssStarCount&quot;</span><span class="token operator">:</span> <span class="token number">33</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;avatarCount&quot;</span><span class="token operator">:</span> <span class="token number">41</span><span class="token punctuation">,</span>
      <span class="token property">&quot;equipmentCount&quot;</span><span class="token operator">:</span> <span class="token number">74</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relicCount&quot;</span><span class="token operator">:</span> <span class="token number">1842</span><span class="token punctuation">,</span>
      <span class="token property">&quot;achievementCount&quot;</span><span class="token operator">:</span> <span class="token number">398</span><span class="token punctuation">,</span>
      <span class="token property">&quot;bookCount&quot;</span><span class="token operator">:</span> <span class="token number">124</span><span class="token punctuation">,</span>
      <span class="token property">&quot;musicCount&quot;</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
      <span class="token comment">// Simulated universe cleared level</span>
      <span class="token property">&quot;maxRogueChallengeScore&quot;</span><span class="token operator">:</span> <span class="token number">9</span>
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
          <span class="token comment">// 1-HEAD 2-HAND ...</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Reference Python data model:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># uncomment if you are using pydantic</span>
<span class="token comment"># from pydantic import BaseModel as Model</span>

<span class="token comment"># uncomment if you are using msgspec</span>
<span class="token comment"># from msgspec import Struct as Model</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[p];function l(i,c){return a(),s("div",null,o)}const k=n(e,[["render",l],["__file","raw.html.vue"]]),d=JSON.parse('{"path":"/en/api/raw.html","title":"Raw Data API","lang":"en-US","frontmatter":{"title":"Raw Data API","icon":"ph:link-simple-break","order":1,"category":["Resource"],"description":"This page shows usage of MiHoMo Raw Data API. Raw Data API Endpoint: /sr_info/{uid} Path Params Example Response Response data example: Reference Python data model:","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://march7th.xiaohei.moe/zh/api/raw.html"}],["meta",{"property":"og:url","content":"https://march7th.xiaohei.moe/en/api/raw.html"}],["meta",{"property":"og:site_name","content":"March7th Docs"}],["meta",{"property":"og:title","content":"Raw Data API"}],["meta",{"property":"og:description","content":"This page shows usage of MiHoMo Raw Data API. Raw Data API Endpoint: /sr_info/{uid} Path Params Example Response Response data example: Reference Python data model:"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-26T10:53:06.000Z"}],["meta",{"property":"article:author","content":"Mar-7th"}],["meta",{"property":"article:modified_time","content":"2024-05-26T10:53:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Raw Data API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-26T10:53:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mar-7th\\",\\"url\\":\\"https://github.com/Mar-7th\\"}]}"]]},"headers":[{"level":2,"title":"Raw Data API","slug":"raw-data-api","link":"#raw-data-api","children":[]}],"git":{"createdTime":1716720786000,"updatedTime":1716720786000,"contributors":[{"name":"mobyw","email":"mobyw66@gmail.com","commits":1}]},"readingTime":{"minutes":1.42,"words":425},"filePathRelative":"en/api/raw.md","localizedDate":"May 26, 2024","autoDesc":true}');export{k as comp,d as data};

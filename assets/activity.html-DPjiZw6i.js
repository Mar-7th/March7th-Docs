import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,a,o as e}from"./app-ZgGEBg5W.js";const i={};function o(p,n){return e(),t("div",null,n[0]||(n[0]=[a(`<p>This page shows usage of MiHoMo User Activity API.</p><h2 id="user-activity-api" tabindex="-1"><a class="header-anchor" href="#user-activity-api"><span>User Activity API</span></a></h2><p>MiHoMo User Activity API returns parsed player activity data.</p><p>Endpoint: <code>/sr_activity/{uid}</code></p><p><strong>Path Params</strong></p><table><thead><tr><th>Name</th><th>Type</th><th>Explanation</th></tr></thead><tbody><tr><td>uid</td><td>string</td><td>Player UID</td></tr></tbody></table><p><strong>Query Prams</strong></p><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Explanation</th><th>Aliases</th></tr></thead><tbody><tr><td>language</td><td>string</td><td>cn</td><td>Language</td><td>l, lang</td></tr><tr><td>is_force_update</td><td>bool</td><td>false</td><td>Refresh cached data immediately</td><td></td></tr></tbody></table><p>Supported language list:</p><table><thead><tr><th>Code</th><th>Language</th></tr></thead><tbody><tr><td>cn</td><td>简体中文</td></tr><tr><td>chs</td><td>简体中文</td></tr><tr><td>cht</td><td>繁體中文</td></tr><tr><td>de</td><td>Deutsch</td></tr><tr><td>en</td><td>English</td></tr><tr><td>es</td><td>Español</td></tr><tr><td>fr</td><td>Français</td></tr><tr><td>id</td><td>Bahasa Indonesia</td></tr><tr><td>jp</td><td>日本語</td></tr><tr><td>kr</td><td>한국어</td></tr><tr><td>pt</td><td>Português</td></tr><tr><td>ru</td><td>Русский</td></tr><tr><td>th</td><td>ภาษาไทย</td></tr><tr><td>vi</td><td>Tiếng Việt</td></tr></tbody></table><p><strong>Example</strong></p><div class="language-http line-numbers-mode" data-ext="http" data-title="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/sr_activity/100000999?l=en</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span> <span class="token header-value">api.mihomo.me</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">Your-App-Name</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Response</strong></p><p>MiHoMo User Activity API response data example:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100000999&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pure_fiction&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;27 day(s) ago: Completed Apocalyptic Shadow: Locust&#39;s Instigation: Difficulty 4&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;30064&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;param&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/sign/DailyQuestChallengeStoryIcon.png&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;event&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;23 day(s) ago: Completed the Hypogeum Enigma Event&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;50026&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;param&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/sign/ActivityIcon.png&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;apocalyptic_shadow&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;14 day(s) ago: Completed Pure Fiction: Clichéd Sayings (IV)&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20124&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;param&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/sign/DailyQuestChallengeStoryIcon.png&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;forgotten_hall&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Today: Completed Forgotten Hall: Strife of Creation (XI)&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4011&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;param&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/sign/DailyQuestChallengeStoryIcon.png&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Reference data model:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># uncomment if you are using pydantic</span>
<span class="token comment"># from pydantic import BaseModel as Model</span>

<span class="token comment"># uncomment if you are using msgspec</span>
<span class="token comment"># from msgspec import Struct as Model</span>

<span class="token keyword">from</span> typing <span class="token keyword">import</span> List<span class="token punctuation">,</span> Literal<span class="token punctuation">,</span> Optional

<span class="token keyword">class</span> <span class="token class-name">ActivityContent</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Activity ID

    - Character ID or Light Cone ID for \`character\` and \`light_cone\` type
    - Challenge ID for \`forgotten_hall\`, \`pure_fiction\`, \`apocalyptic_shadow\`
    - For other types, it is their corresponding ID
    &quot;&quot;&quot;</span>
    param<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Activity parameter

    - For \`divergent_universe_ordinary_extrapolation\` and \`divergent_universe_cyclical_extrapolation\`, it is the difficulty
    - For other types, it is \`null\`
    &quot;&quot;&quot;</span>
    icon<span class="token punctuation">:</span> <span class="token builtin">str</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Activity icon URL

    - For \`character\` and \`light_cone\`, it is the character or light cone icon
    - For other types, it is their corresponding icon
    &quot;&quot;&quot;</span>

<span class="token keyword">class</span> <span class="token class-name">ActivityInfo</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">type</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Activity type

    - \`character\`: Unlock a new 5-star character
    - \`light_cone\`: Unlock a new 5-star light cone
    - \`event\`: Complete an event
    - \`forgotten_hall\`: Complete a forgotten hall challenge
    - \`pure_fiction\`: Complete a pure fiction challenge
    - \`apocalyptic_shadow\`: Complete an apocalyptic shadow challenge
    - \`simulated_universe\`: Complete a simulated universe level
    - \`simulated_universe_swarm_disaster\`: Complete a simulated universe: swarm disaster level
    - \`simulated_universe_gold_and_gears\`: Complete a simulated universe: gold and gears level
    - \`divergent_universe_ordinary_extrapolation\`: Complete a divergent universe: ordinary extrapolation level, \`content.param\` as difficulty
    - \`divergent_universe_cyclical_extrapolation\`: Complete a divergent universe: cyclical extrapolation level, \`content.param\` as difficulty
    - \`simulated_universe_unknowable_domain\`: Complete a simulated universe: unknowable domain level
    &quot;&quot;&quot;</span>
    text<span class="token punctuation">:</span> <span class="token builtin">str</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Activity description in given language
    &quot;&quot;&quot;</span>
    content<span class="token punctuation">:</span> ActivityContent
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Activity detail
    &quot;&quot;&quot;</span>

<span class="token keyword">class</span> <span class="token class-name">ActivityApiInfo</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    uid<span class="token punctuation">:</span> <span class="token builtin">str</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    User UID
    &quot;&quot;&quot;</span>
    info<span class="token punctuation">:</span> List<span class="token punctuation">[</span>ActivityInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Activity information list
    &quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17)]))}const c=s(i,[["render",o],["__file","activity.html.vue"]]),u=JSON.parse('{"path":"/en/api/activity.html","title":"User Activity API","lang":"en-US","frontmatter":{"title":"User Activity API","icon":"ph:link-simple","order":3,"category":["Resource"],"description":"This page shows usage of MiHoMo User Activity API. User Activity API MiHoMo User Activity API returns parsed player activity data. Endpoint: /sr_activity/{uid} Path Params Query...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://march7th.xyz/zh/api/activity.html"}],["meta",{"property":"og:url","content":"https://march7th.xyz/en/api/activity.html"}],["meta",{"property":"og:site_name","content":"March7th Docs"}],["meta",{"property":"og:title","content":"User Activity API"}],["meta",{"property":"og:description","content":"This page shows usage of MiHoMo User Activity API. User Activity API MiHoMo User Activity API returns parsed player activity data. Endpoint: /sr_activity/{uid} Path Params Query..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-17T17:25:18.000Z"}],["meta",{"property":"article:author","content":"Mar-7th"}],["meta",{"property":"article:modified_time","content":"2025-02-17T17:25:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"User Activity API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-17T17:25:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mar-7th\\",\\"url\\":\\"https://github.com/Mar-7th\\"}]}"]]},"headers":[{"level":2,"title":"User Activity API","slug":"user-activity-api","link":"#user-activity-api","children":[]}],"git":{"createdTime":1739632153000,"updatedTime":1739813118000,"contributors":[{"name":"mobyw","email":"mobyw66@gmail.com","commits":2}]},"readingTime":{"minutes":1.5,"words":451},"filePathRelative":"en/api/activity.md","localizedDate":"February 15, 2025","autoDesc":true}');export{c as comp,u as data};

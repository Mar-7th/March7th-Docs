import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,a,o as e}from"./app-ZgGEBg5W.js";const o={};function i(p,n){return e(),t("div",null,n[0]||(n[0]=[a(`<p>本页面介绍 MiHoMo 用户动态 API 的使用方式。</p><h2 id="用户动态-api" tabindex="-1"><a class="header-anchor" href="#用户动态-api"><span>用户动态 API</span></a></h2><p>端点: <code>/sr_activity/{uid}</code></p><p><strong>路径参数</strong></p><table><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td>uid</td><td>string</td><td>查询玩家 UID</td></tr></tbody></table><p><strong>请求参数</strong></p><table><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th><th>别名</th></tr></thead><tbody><tr><td>language</td><td>string</td><td>cn</td><td>语言</td><td>l, lang</td></tr><tr><td>is_force_update</td><td>bool</td><td>false</td><td>不使用缓存数据</td><td></td></tr></tbody></table><p>支持语言列表：</p><table><thead><tr><th>代码</th><th>语言</th></tr></thead><tbody><tr><td>cn</td><td>简体中文</td></tr><tr><td>chs</td><td>简体中文</td></tr><tr><td>cht</td><td>繁體中文</td></tr><tr><td>de</td><td>Deutsch</td></tr><tr><td>en</td><td>English</td></tr><tr><td>es</td><td>Español</td></tr><tr><td>fr</td><td>Français</td></tr><tr><td>id</td><td>Bahasa Indonesia</td></tr><tr><td>jp</td><td>日本語</td></tr><tr><td>kr</td><td>한국어</td></tr><tr><td>pt</td><td>Português</td></tr><tr><td>ru</td><td>Русский</td></tr><tr><td>th</td><td>ภาษาไทย</td></tr><tr><td>vi</td><td>Tiếng Việt</td></tr></tbody></table><p><strong>请求示例</strong></p><div class="language-http line-numbers-mode" data-ext="http" data-title="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/sr_activity/100000999?l=cn</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span> <span class="token header-value">api.mihomo.me</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">Your-App-Name</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>响应数据</strong></p><p>参考响应数据：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100000999&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pure_fiction&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;27天前完成了「末日幻影•煽动螟蝗·难度04」&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;30064&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;param&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/sign/DailyQuestChallengeStoryIcon.png&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;event&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;23天前完成了活动「地宫迷踪」&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;50026&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;param&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/sign/ActivityIcon.png&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;apocalyptic_shadow&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;14天前完成了「虚构叙事•陈腔滥调其四」&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20124&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;param&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/sign/DailyQuestChallengeStoryIcon.png&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;forgotten_hall&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;今天完成了「忘却之庭•创世纷争其十一」&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4011&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;param&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/sign/DailyQuestChallengeStoryIcon.png&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考 Python 数据结构：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># uncomment if you are using pydantic</span>
<span class="token comment"># from pydantic import BaseModel as Model</span>

<span class="token comment"># uncomment if you are using msgspec</span>
<span class="token comment"># from msgspec import Struct as Model</span>

<span class="token keyword">from</span> typing <span class="token keyword">import</span> List<span class="token punctuation">,</span> Literal<span class="token punctuation">,</span> Optional

<span class="token keyword">class</span> <span class="token class-name">ActivityContent</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    动态 ID

    - \`character\` 和 \`light_cone\` 类型为角色 ID 或光锥 ID
    - \`forgotten_hall\`、\`pure_fiction\` 和 \`apocalyptic_shadow\` 类型为挑战 ID
    - 其他类型为对应的 ID
    &quot;&quot;&quot;</span>
    param<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    动态参数

    - \`divergent_universe_ordinary_extrapolation\` 和 \`divergent_universe_cyclical_extrapolation\` 类型为难度
    - 其他类型为 \`null\`
    &quot;&quot;&quot;</span>
    icon<span class="token punctuation">:</span> <span class="token builtin">str</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    动态图标 URL

    - \`character\` 和 \`light_cone\` 类型为角色或光锥图标
    - 其他类型为对应的图标
    &quot;&quot;&quot;</span>

<span class="token keyword">class</span> <span class="token class-name">ActivityInfo</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">type</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    动态类型

    - \`character\`: 解锁新的 5 星角色
    - \`light_cone\`: 解锁新的 5 星光锥
    - \`event\`: 完成活动
    - \`forgotten_hall\`: 完成忘却之庭
    - \`pure_fiction\`: 完成虚构叙事
    - \`apocalyptic_shadow\`: 完成末日幻影
    - \`simulated_universe\`: 完成模拟宇宙
    - \`simulated_universe_swarm_disaster\`: 完成模拟宇宙：寰宇蝗灾
    - \`simulated_universe_gold_and_gears\`: 完成模拟宇宙：黄金与机械
    - \`divergent_universe_ordinary_extrapolation\`: 完成差分宇宙：常规演算，\`content.param\` 为难度
    - \`divergent_universe_cyclical_extrapolation\`: 完成差分宇宙：周期演算，\`content.param\` 为难度
    - \`simulated_universe_unknowable_domain\`: 完成模拟宇宙：不可知域
    &quot;&quot;&quot;</span>
    text<span class="token punctuation">:</span> <span class="token builtin">str</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    动态描述
    &quot;&quot;&quot;</span>
    content<span class="token punctuation">:</span> ActivityContent
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    动态详细信息
    &quot;&quot;&quot;</span>

<span class="token keyword">class</span> <span class="token class-name">ActivityApiInfo</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    uid<span class="token punctuation">:</span> <span class="token builtin">str</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    用户 UID
    &quot;&quot;&quot;</span>
    info<span class="token punctuation">:</span> List<span class="token punctuation">[</span>ActivityInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    动态信息列表
    &quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16)]))}const r=s(o,[["render",i],["__file","activity.html.vue"]]),u=JSON.parse('{"path":"/zh/api/activity.html","title":"用户动态 API","lang":"zh-CN","frontmatter":{"title":"用户动态 API","icon":"ph:link-simple","order":3,"category":["Resource"],"description":"本页面介绍 MiHoMo 用户动态 API 的使用方式。 用户动态 API 端点: /sr_activity/{uid} 路径参数 请求参数 支持语言列表： 请求示例 响应数据 参考响应数据： 参考 Python 数据结构：","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://march7th.xyz/en/api/activity.html"}],["meta",{"property":"og:url","content":"https://march7th.xyz/zh/api/activity.html"}],["meta",{"property":"og:site_name","content":"March7th 文档"}],["meta",{"property":"og:title","content":"用户动态 API"}],["meta",{"property":"og:description","content":"本页面介绍 MiHoMo 用户动态 API 的使用方式。 用户动态 API 端点: /sr_activity/{uid} 路径参数 请求参数 支持语言列表： 请求示例 响应数据 参考响应数据： 参考 Python 数据结构："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-02-17T17:25:18.000Z"}],["meta",{"property":"article:author","content":"Mar-7th"}],["meta",{"property":"article:modified_time","content":"2025-02-17T17:25:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"用户动态 API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-17T17:25:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mar-7th\\",\\"url\\":\\"https://github.com/Mar-7th\\"}]}"]]},"headers":[{"level":2,"title":"用户动态 API","slug":"用户动态-api","link":"#用户动态-api","children":[]}],"git":{"createdTime":1739632153000,"updatedTime":1739813118000,"contributors":[{"name":"mobyw","email":"mobyw66@gmail.com","commits":2}]},"readingTime":{"minutes":1.88,"words":565},"filePathRelative":"zh/api/activity.md","localizedDate":"2025年2月15日","autoDesc":true}');export{r as comp,u as data};

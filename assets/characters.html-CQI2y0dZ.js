import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,e as t}from"./app-BYQgWMYB.js";const p={},e=t(`<p>本页面介绍角色相关索引文件的结构。</p><h2 id="角色索引文件" tabindex="-1"><a class="header-anchor" href="#角色索引文件"><span>角色索引文件</span></a></h2><p>在对应语言文件夹（<code>index_new/[lang]</code> <code>index_min/[lang]</code>）下有以下几个和角色相关的索引文件：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>characters.json                 # 角色基本信息，索引为角色id
character_ranks.json            # 角色星魂，索引为星魂id
character_skills.json           # 角色技能，索引为技能id
character_skill_trees.json      # 角色行迹，索引为行迹id
character_promotions.json       # 角色晋阶，索引为角色id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="角色基本信息" tabindex="-1"><a class="header-anchor" href="#角色基本信息"><span>角色基本信息</span></a></h2><p>以下是 <code>characters.json</code> 每一项各个字段的含义：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token property">&quot;1001&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 角色id</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1001&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 角色名</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;三月七&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 角色标签</span>
    <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mar7th&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 稀有度</span>
    <span class="token property">&quot;rarity&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token comment">// 命途id 在 \`paths.json\` 中查询</span>
    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Knight&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 属性id 在 \`elements.json\` 中查询</span>
    <span class="token property">&quot;element&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Ice&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 能量上限（施放一次终结技所需能量）</span>
    <span class="token property">&quot;max_sp&quot;</span><span class="token operator">:</span> <span class="token number">120.0</span><span class="token punctuation">,</span>
    <span class="token comment">// 星魂id列表 在 \`character_ranks.json\` 中查询</span>
    <span class="token comment">// 当前满足规则 角色id + 0 + 星魂序号（1-6）</span>
    <span class="token comment">// 长度为 6 分别表示第 1-6 个星魂</span>
    <span class="token property">&quot;ranks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;100101&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100102&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100103&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100104&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100105&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100106&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 技能id列表 在 \`character_skills.json\` 中查询</span>
    <span class="token comment">// 当前满足规则 角色id + 0 + [123467]</span>
    <span class="token comment">// 长度为 6-8</span>
    <span class="token comment">// 分别表示 普攻 技能 终结技 天赋 攻击 秘技</span>
    <span class="token comment">// 长度大于 6 时 xxxx08 和 xxxx09 表示部分技能的可选效果 如单攻/扩散</span>
    <span class="token property">&quot;skills&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;100101&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100102&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100103&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100104&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100106&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100107&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 行迹id列表 在 \`character_skills.json\` 中查询</span>
    <span class="token comment">// 当前满足规则 角色id + 三位行迹序号</span>
    <span class="token comment">// 长度为 18</span>
    <span class="token property">&quot;skill_trees&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;1001001&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1001002&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1001003&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1001004&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1001007&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1001101&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1001102&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1001103&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1001201&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1001202&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1001203&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1001204&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1001205&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1001206&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1001207&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1001208&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1001209&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1001210&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 角色icon图片路径</span>
    <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/character/1001.png&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 角色预览图片路径</span>
    <span class="token property">&quot;preview&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/character_preview/1001.png&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 角色立绘图片路径</span>
    <span class="token property">&quot;portrait&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/character_portrait/1001.png&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 角色攻略图片路径列表</span>
    <span class="token comment">// 长度&gt;=0</span>
    <span class="token property">&quot;guide_overview&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;guide/Nwflower/character_overview/1001.png&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;guide/OriginMirror/character_overview/1001.png&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 角色材料图片路径列表</span>
    <span class="token comment">// 长度&gt;=0</span>
    <span class="token property">&quot;guide_material&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;guide/Nwflower/character_material/1001.png&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 角色测评列表</span>
    <span class="token comment">// 每项包含图片路径与详情链接</span>
    <span class="token comment">// 长度&gt;=0</span>
    <span class="token property">&quot;guide_evaluation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;guide/Gamer/character_evaluation/1001.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;link&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://www.gamer.cn/xqtd/article/19314&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是 <code>character_ranks.json</code> 每一项各个字段的含义：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token property">&quot;110203&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 星魂id 角色id + 0 + 星魂序号（1-6）</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;110203&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 星魂序号</span>
    <span class="token property">&quot;rank&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 解锁材料列表 在 \`items.json\` 中查询</span>
    <span class="token comment">// 此处长度为1 固定为角色的星魂 数量为1</span>
    <span class="token property">&quot;materials&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;11102&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;num&quot;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 升级技能列表 在 \`character_skills.json\` 中查询</span>
    <span class="token property">&quot;level_up_skills&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;110202&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;num&quot;</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;110204&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;num&quot;</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 星魂icon图片路径</span>
    <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/skill/1102_skill.png&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是 <code>character_skills.json</code> 每一项各个字段的含义：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token property">&quot;100603&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 技能id 角色id + 0 + [123467]</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100603&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 技能名称</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;|账号已封禁|&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 技能最大等级</span>
    <span class="token property">&quot;max_level&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token comment">// 元素类型id 在 \`elements.json\` 中查询</span>
    <span class="token property">&quot;element&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Quantum&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 技能类型</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Ultra&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 技能类型描述</span>
    <span class="token property">&quot;type_text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;终结技&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 技能效果类型</span>
    <span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Impair&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 技能效果类型描述</span>
    <span class="token property">&quot;effect_text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;妨害&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 技能简单描述</span>
    <span class="token property">&quot;simple_desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;对敌方单体造成大量量子属性伤害，大概率施加防御降低效果。&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 技能详细描述</span>
    <span class="token comment">// 包含参数占位符 #{index}[{format}]{percent?}</span>
    <span class="token comment">// #1[i] 表示第一个参数取整 例如 2.1 -&gt; 2</span>
    <span class="token comment">// #2[i]% 表示第二个参数取0位小数百分比表示 例如 0.85 -&gt; 85%</span>
    <span class="token comment">// #3[f1] 表示第三个参数取1位小数 例如 0.4 -&gt; 0.4</span>
    <span class="token comment">// #4[f2]% 表示第四个参数取2位小数百分比表示 例如 0.0625 -&gt; 6.25%</span>
    <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;有#2[i]%的基础概率使受到攻击的敌方目标防御力降低#3[i]%，持续#4[i]回合，同时对指定敌方单体造成等同于银狼#1[i]%攻击力的量子属性伤害。&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 技能详细描述参数列表</span>
    <span class="token comment">// 长度等于 max_level</span>
    <span class="token comment">// level 1 对应数组下标 0</span>
    <span class="token property">&quot;params&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span> <span class="token number">2.1</span><span class="token punctuation">,</span> <span class="token number">0.85</span><span class="token punctuation">,</span> <span class="token number">0.4</span><span class="token punctuation">,</span> <span class="token number">3.0</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span> <span class="token number">2.24</span><span class="token punctuation">,</span> <span class="token number">0.865</span><span class="token punctuation">,</span> <span class="token number">0.41</span><span class="token punctuation">,</span> <span class="token number">3.0</span> <span class="token punctuation">]</span>
        <span class="token comment">// 以下省略 13 项</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/skill/1006_ultimate.png&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是 <code>character_skill_trees.json</code> 每一项各个字段的含义：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token property">&quot;1104205&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 行迹id 角色id + 3 位行迹序号</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1104205&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 行迹最大等级</span>
    <span class="token property">&quot;max_level&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;anchor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Point13&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 行迹前置 行迹id 列表</span>
    <span class="token property">&quot;pre_points&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;1104102&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 行迹提升技能等级列表</span>
    <span class="token property">&quot;level_up_skills&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 行迹等级详细信息列表</span>
    <span class="token comment">// 长度等于 max_level</span>
    <span class="token property">&quot;levels&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// 要求的晋阶等级</span>
            <span class="token property">&quot;promotion&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token comment">// 属性提升列表 在 \`properties.json\` 中查询</span>
            <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span> <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;IceAddedRatio&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">0.048</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token comment">// 消耗材料列表 在 \`items.json\` 中查询</span>
            <span class="token property">&quot;materials&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;num&quot;</span><span class="token operator">:</span> <span class="token number">20000</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;110142&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;num&quot;</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;112002&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;num&quot;</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考数据结构" tabindex="-1"><a class="header-anchor" href="#参考数据结构"><span>参考数据结构</span></a></h2><p>以下是使用 Python 解析索引文件的参考数据结构。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">CharacterEvaluationType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    image<span class="token punctuation">:</span> <span class="token builtin">str</span>
    link<span class="token punctuation">:</span> <span class="token builtin">str</span>

<span class="token keyword">class</span> <span class="token class-name">CharacterType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    name<span class="token punctuation">:</span> <span class="token builtin">str</span>
    tag<span class="token punctuation">:</span> <span class="token builtin">str</span>
    rarity<span class="token punctuation">:</span> <span class="token builtin">int</span>
    path<span class="token punctuation">:</span> <span class="token builtin">str</span>
    element<span class="token punctuation">:</span> <span class="token builtin">str</span>
    max_sp<span class="token punctuation">:</span> <span class="token builtin">float</span>
    ranks<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span>
    skills<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span>
    skill_trees<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span>
    icon<span class="token punctuation">:</span> <span class="token builtin">str</span>
    preview<span class="token punctuation">:</span> <span class="token builtin">str</span>
    portrait<span class="token punctuation">:</span> <span class="token builtin">str</span>
    guide_overview<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span>
    guide_material<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span>
    guide_evaluation<span class="token punctuation">:</span> List<span class="token punctuation">[</span>CharacterEvaluationType<span class="token punctuation">]</span>

<span class="token keyword">class</span> <span class="token class-name">CharacterRankType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    rank<span class="token punctuation">:</span> <span class="token builtin">int</span>
    desc<span class="token punctuation">:</span> <span class="token builtin">str</span>
    materials<span class="token punctuation">:</span> List<span class="token punctuation">[</span>Quantity<span class="token punctuation">]</span>
    level_up_skills<span class="token punctuation">:</span> List<span class="token punctuation">[</span>Quantity<span class="token punctuation">]</span>
    icon<span class="token punctuation">:</span> <span class="token builtin">str</span>

<span class="token keyword">class</span> <span class="token class-name">CharacterSkillType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    name<span class="token punctuation">:</span> <span class="token builtin">str</span>
    max_level<span class="token punctuation">:</span> <span class="token builtin">int</span>
    element<span class="token punctuation">:</span> <span class="token builtin">str</span>
    <span class="token builtin">type</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    type_text<span class="token punctuation">:</span> <span class="token builtin">str</span>
    effect<span class="token punctuation">:</span> <span class="token builtin">str</span>
    effect_text<span class="token punctuation">:</span> <span class="token builtin">str</span>
    simple_desc<span class="token punctuation">:</span> <span class="token builtin">str</span>
    desc<span class="token punctuation">:</span> <span class="token builtin">str</span>
    params<span class="token punctuation">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">float</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    icon<span class="token punctuation">:</span> <span class="token builtin">str</span>

<span class="token keyword">class</span> <span class="token class-name">SkillTreeLevelType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    promotion<span class="token punctuation">:</span> <span class="token builtin">int</span>
    properties<span class="token punctuation">:</span> List<span class="token punctuation">[</span>Property<span class="token punctuation">]</span>
    materials<span class="token punctuation">:</span> List<span class="token punctuation">[</span>Quantity<span class="token punctuation">]</span>

<span class="token keyword">class</span> <span class="token class-name">CharacterSkillTreeType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    max_level<span class="token punctuation">:</span> <span class="token builtin">int</span>
    anchor<span class="token punctuation">:</span> <span class="token builtin">str</span>
    pre_points<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span>
    level_up_skills<span class="token punctuation">:</span> List<span class="token punctuation">[</span>Quantity<span class="token punctuation">]</span>
    levels<span class="token punctuation">:</span> List<span class="token punctuation">[</span>SkillTreeLevelType<span class="token punctuation">]</span>

<span class="token keyword">class</span> <span class="token class-name">CharacterPromotionType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    values<span class="token punctuation">:</span> List<span class="token punctuation">[</span>Dict<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span> Promotion<span class="token punctuation">]</span><span class="token punctuation">]</span>
    materials<span class="token punctuation">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span>Quantity<span class="token punctuation">]</span><span class="token punctuation">]</span>

<span class="token comment"># charaters.json</span>
CharacterIndex <span class="token operator">=</span> Dict<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span> CharacterType<span class="token punctuation">]</span>
<span class="token comment"># character_ranks.json</span>
CharacterRankIndex <span class="token operator">=</span> Dict<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span> CharacterRankType<span class="token punctuation">]</span>
<span class="token comment"># character_skills.json</span>
CharacterSkillIndex <span class="token operator">=</span> Dict<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span> CharacterSkillType<span class="token punctuation">]</span>
<span class="token comment"># character_skill_trees.json</span>
CharacterSkillTreeIndex <span class="token operator">=</span> Dict<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span> CharacterSkillTreeType<span class="token punctuation">]</span>
<span class="token comment"># character_promotions.json</span>
CharacterPromotionIndex <span class="token operator">=</span> Dict<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span> CharacterPromotionType<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),o=[e];function c(i,l){return a(),s("div",null,o)}const k=n(p,[["render",c],["__file","characters.html.vue"]]),d=JSON.parse('{"path":"/zh/resource/characters.html","title":"角色索引","lang":"zh-CN","frontmatter":{"title":"角色索引","icon":"ph:person","order":2,"category":["资源"],"description":"本页面介绍角色相关索引文件的结构。 角色索引文件 在对应语言文件夹（index_new/[lang] index_min/[lang]）下有以下几个和角色相关的索引文件： 角色基本信息 以下是 characters.json 每一项各个字段的含义： 以下是 character_ranks.json 每一项各个字段的含义： 以下是 character_s...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://march7th.xiaohei.moe/en/resource/characters.html"}],["meta",{"property":"og:url","content":"https://march7th.xiaohei.moe/zh/resource/characters.html"}],["meta",{"property":"og:site_name","content":"March7th 文档"}],["meta",{"property":"og:title","content":"角色索引"}],["meta",{"property":"og:description","content":"本页面介绍角色相关索引文件的结构。 角色索引文件 在对应语言文件夹（index_new/[lang] index_min/[lang]）下有以下几个和角色相关的索引文件： 角色基本信息 以下是 characters.json 每一项各个字段的含义： 以下是 character_ranks.json 每一项各个字段的含义： 以下是 character_s..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-26T07:37:44.000Z"}],["meta",{"property":"article:author","content":"Mar-7th"}],["meta",{"property":"article:modified_time","content":"2024-05-26T07:37:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"角色索引\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-26T07:37:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mar-7th\\",\\"url\\":\\"https://github.com/Mar-7th\\"}]}"]]},"headers":[{"level":2,"title":"角色索引文件","slug":"角色索引文件","link":"#角色索引文件","children":[]},{"level":2,"title":"角色基本信息","slug":"角色基本信息","link":"#角色基本信息","children":[]},{"level":2,"title":"参考数据结构","slug":"参考数据结构","link":"#参考数据结构","children":[]}],"git":{"createdTime":1683961498000,"updatedTime":1716709064000,"contributors":[{"name":"mobyw","email":"44370805+mobyw@users.noreply.github.com","commits":4},{"name":"mobyw","email":"mobyw66@gmail.com","commits":1}]},"readingTime":{"minutes":4.18,"words":1254},"filePathRelative":"zh/resource/characters.md","localizedDate":"2023年5月13日","autoDesc":true}');export{k as comp,d as data};

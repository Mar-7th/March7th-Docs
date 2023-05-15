import{_ as s,X as a,Y as d,Z as n,a1 as e,$ as l,a2 as r,a3 as c,E as t}from"./framework-1ef9a219.js";const v={},o={href:"https://github.com/Mar-7th/StarRailRes",target:"_blank",rel:"noopener noreferrer"},u=c(`<h2 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构" aria-hidden="true">#</a> 项目结构</h2><p>项目文件结构如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>StarRailRes
├─ icon         # 图标素材目录
├─ image        # 图片素材目录
├─ guide        # 教程图片目录
├─ index_new    # 索引目录（之后会转移到index目录）
├─ index_min    # 压缩索引目录（压缩换行以更快下载）
└─ index        # 旧索引目录（不推荐使用）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>index_new</code> 或 <code>index_min</code> 中有各种语言的索引文件夹，支持的语言列表如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CN    简体中文
CHT   繁體中文
DE    Deutsch
EN    English
ES    Español
FR    Français
ID    Bahasa Indonesia
JP    日本語
KR    한국어
PT    Português
RU    Русский
TH    ภาษาไทย
VI    Tiếng Việt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>语言文件夹名为对应语言缩写的小写字母形式，如 <code>cn</code> 文件夹为简体中文索引。</p><h2 id="索引结构" tabindex="-1"><a class="header-anchor" href="#索引结构" aria-hidden="true">#</a> 索引结构</h2><p>在具体的语言索引文件中，存在以下文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>paths.json                      # 命途
elements.json                   # 元素
properties.json                 # 属性
characters.json                 # 角色基本信息
character_ranks.json            # 角色星魂
character_skills.json           # 角色技能
character_skill_trees.json      # 角色行迹
character_promotions.json       # 角色晋阶与等级
light_cones.json                # 光锥基本信息
light_cone_ranks.json           # 光锥叠影
light_cone_promotions.json      # 光锥晋阶与等级
relics.json                     # 遗器基本信息
relic_sets.json                 # 遗器套装信息
relic_main_affixs.json          # 遗器主词条组
relic_sub_affixs.json           # 遗器副词条组
items.json                      # 材料
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>各索引文件的具体结构请在对应页面查看。</p>`,10);function m(b,_){const i=t("ExternalLinkIcon");return a(),d("div",null,[n("p",null,[e("本页面介绍资源仓库 "),n("a",o,[e("Mar-7th/StarRailRes"),l(i)]),e(" 的目录结构。")]),r(" more "),u])}const p=s(v,[["render",m],["__file","structure.html.vue"]]);export{p as default};

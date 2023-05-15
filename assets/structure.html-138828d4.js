import{_ as s,X as a,Y as r,Z as n,a1 as e,$ as l,a2 as d,a3 as o,E as t}from"./framework-1ef9a219.js";const c={},v={href:"https://github.com/Mar-7th/StarRailRes",target:"_blank",rel:"noopener noreferrer"},u=o(`<h2 id="project" tabindex="-1"><a class="header-anchor" href="#project" aria-hidden="true">#</a> Project</h2><p>The project file structure is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>StarRailRes
├─ icon         # Icon folder
├─ image        # Image folder
├─ guide        # Tutorial picture folder
├─ index_new    # Index folder (will be transferred to index folder later)
├─ index_min    # Compress index folder (compress newline for faster download)
└─ index        # Old index folder (deprecated)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There are index folders for various languages in <code>index_new</code> or <code>index_min</code>, the list of supported languages is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CN    简体中文
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The language folder name is the lowercase letter of the corresponding language abbreviation, such as the <code>en</code> folder is the English index.</p><h2 id="index" tabindex="-1"><a class="header-anchor" href="#index" aria-hidden="true">#</a> Index</h2><p>Among the specific language index files, the following files exist:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>paths.json                      # Destiny path
elements.json                   # Element
properties.json                 # Property
characters.json                 # Basic character information
character_ranks.json            # Character eidolon
character_skills.json           # Character skill
character_skill_trees.json      # Character skill tree / Trace
character_promotions.json       # Character promotion and level
light_cones.json                # Basic light cone information
light_cone_ranks.json           # Light cone overlay
light_cone_promotions.json      # Light cone promotion and level
relics.json                     # Basic relic information
relic_sets.json                 # Relic set information
relic_main_affixs.json          # Relic main affix groups
relic_sub_affixs.json           # Relic sub affix groups
items.json                      # Material
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For the specific structure of each index file, please check the corresponding page.</p>`,10);function m(h,p){const i=t("ExternalLinkIcon");return a(),r("div",null,[n("p",null,[e("File structure of repo "),n("a",v,[e("Mar-7th/StarRailRes"),l(i)]),e(".")]),d(" more "),u])}const f=s(c,[["render",m],["__file","structure.html.vue"]]);export{f as default};

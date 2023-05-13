import{_ as n,X as s,Y as a,a2 as e,Z as p,a3 as t}from"./framework-1ef9a219.js";const o={},l=p("p",null,"本页面介绍通过索引解析 MihomoAPI 的参考实现。",-1),c=t(`<h2 id="mihomoapi-字段说明" tabindex="-1"><a class="header-anchor" href="#mihomoapi-字段说明" aria-hidden="true">#</a> MihomoAPI 字段说明</h2><p>MihomoAPI 返回值结构如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token comment">// 角色详细信息字段</span>
    <span class="token comment">// 当前返回结果仅包含此字段</span>
    <span class="token property">&quot;PlayerDetailInfo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 游戏uid</span>
        <span class="token property">&quot;UID&quot;</span><span class="token operator">:</span> <span class="token number">114514191</span><span class="token punctuation">,</span>
        <span class="token comment">// 昵称</span>
        <span class="token property">&quot;NickName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 账号等级</span>
        <span class="token property">&quot;Level&quot;</span><span class="token operator">:</span> <span class="token number">41</span><span class="token punctuation">,</span>
        <span class="token comment">// 均衡等级 / 世界等级</span>
        <span class="token property">&quot;WorldLevel&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token comment">// 当前好友数量</span>
        <span class="token property">&quot;CurFriendCount&quot;</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
        <span class="token comment">// 使用头像id</span>
        <span class="token property">&quot;HeadIconID&quot;</span><span class="token operator">:</span> <span class="token number">201013</span><span class="token punctuation">,</span>
        <span class="token comment">// 设置签名</span>
        <span class="token comment">// 若未设置签名 返回结果无此字段</span>
        <span class="token property">&quot;Signature&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 设置生日</span>
        <span class="token comment">// 若未设置生日 返回结果无此字段</span>
        <span class="token property">&quot;Birthday&quot;</span><span class="token operator">:</span> <span class="token number">330</span><span class="token punctuation">,</span> 
        <span class="token comment">// 是否公开显示角色信息</span>
        <span class="token property">&quot;IsDisplayAvatarList&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// 账号数据信息</span>
        <span class="token property">&quot;PlayerSpaceInfo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 忘却之庭进度</span>
            <span class="token property">&quot;ChallengeData&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;PreMazeGroupIndex&quot;</span><span class="token operator">:</span> <span class="token number">12</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 通过模拟宇宙数量</span>
            <span class="token property">&quot;PassAreaProgress&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token comment">// 获得光锥数量</span>
            <span class="token property">&quot;LightConeCount&quot;</span><span class="token operator">:</span> <span class="token number">45</span><span class="token punctuation">,</span>
            <span class="token comment">// 获得角色数量</span>
            <span class="token property">&quot;AvatarCount&quot;</span><span class="token operator">:</span> <span class="token number">17</span><span class="token punctuation">,</span>
            <span class="token comment">// 获得成就数量</span>
            <span class="token property">&quot;AchievementCount&quot;</span><span class="token operator">:</span> <span class="token number">173</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 支援角色信息</span>
        <span class="token property">&quot;AssistAvatar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 角色id</span>
            <span class="token property">&quot;AvatarID&quot;</span><span class="token operator">:</span> <span class="token number">1003</span><span class="token punctuation">,</span>
            <span class="token comment">// 角色星魂数</span>
            <span class="token comment">// 若未解锁星魂则无此字段</span>
            <span class="token property">&quot;Rank&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> 
            <span class="token comment">// 角色等级</span>
            <span class="token property">&quot;Level&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
            <span class="token comment">// 角色晋阶等级</span>
            <span class="token property">&quot;Promotion&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token comment">// 光锥信息</span>
            <span class="token property">&quot;EquipmentID&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// 光锥id</span>
                <span class="token property">&quot;ID&quot;</span><span class="token operator">:</span> <span class="token number">21020</span><span class="token punctuation">,</span>
                <span class="token comment">// 光锥叠影数</span>
                <span class="token property">&quot;Rank&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token comment">// 光锥等级</span>
                <span class="token property">&quot;Level&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
                <span class="token comment">// 光锥晋阶等级</span>
                <span class="token property">&quot;Promotion&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 行迹信息</span>
            <span class="token property">&quot;BehaviorList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> 
                <span class="token punctuation">{</span>
                    <span class="token comment">// 行迹id</span>
                    <span class="token property">&quot;BehaviorID&quot;</span><span class="token operator">:</span> <span class="token number">1003001</span><span class="token punctuation">,</span>
                    <span class="token comment">// 行迹等级</span>
                    <span class="token property">&quot;Level&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
                <span class="token punctuation">}</span>
                <span class="token comment">// ...</span>
                <span class="token comment">// 只包括已经解锁的行迹，目前最多 18 个</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token comment">// 遗器信息</span>
            <span class="token property">&quot;RelicList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">// 遗器id</span>
                    <span class="token property">&quot;ID&quot;</span><span class="token operator">:</span> <span class="token number">51071</span><span class="token punctuation">,</span>
                    <span class="token comment">// 遗器主词条id 需要在遗器主词条组的索引</span>
                    <span class="token property">&quot;MainAffixID&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token comment">// 遗器类型 1-HEAD 2-HAND 3-BODY 4-FOOT 5-NECK 6-OBJECT</span>
                    <span class="token property">&quot;Type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token comment">// 遗器等级</span>
                    <span class="token property">&quot;Level&quot;</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
                    <span class="token comment">// 当前经验</span>
                    <span class="token property">&quot;EXP&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
                    <span class="token comment">// 副词条</span>
                    <span class="token property">&quot;RelicSubAffix&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> 
                        <span class="token punctuation">{</span>
                            <span class="token comment">// 副词条id</span>
                            <span class="token property">&quot;SubAffixID&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                            <span class="token comment">// 副词条次数</span>
                            <span class="token property">&quot;Cnt&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> 
                            <span class="token comment">// 副词条步进</span>
                            <span class="token property">&quot;Step&quot;</span><span class="token operator">:</span> <span class="token number">1</span> 
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
        <span class="token property">&quot;DisplayAvatarList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">// ...</span>
            <span class="token comment">// 结构同支援角色信息 一共最多 3 个</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mihomoapi-字段解析" tabindex="-1"><a class="header-anchor" href="#mihomoapi-字段解析" aria-hidden="true">#</a> MihomoAPI 字段解析</h2><h3 id="角色解析" tabindex="-1"><a class="header-anchor" href="#角色解析" aria-hidden="true">#</a> 角色解析</h3><h3 id="光锥解析" tabindex="-1"><a class="header-anchor" href="#光锥解析" aria-hidden="true">#</a> 光锥解析</h3><h3 id="遗器解析" tabindex="-1"><a class="header-anchor" href="#遗器解析" aria-hidden="true">#</a> 遗器解析</h3>`,7);function i(r,u){return s(),a("div",null,[l,e(" more "),c])}const m=n(o,[["render",i],["__file","mihomo_api.html.vue"]]);export{m as default};

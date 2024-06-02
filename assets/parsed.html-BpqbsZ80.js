import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as t}from"./app-au9n5wTj.js";const p={},o=t(`<p>This page shows usage of MiHoMo Parsed Data API.</p><h2 id="parsed-data-api" tabindex="-1"><a class="header-anchor" href="#parsed-data-api"><span>Parsed Data API</span></a></h2><p>MiHoMo Parsed Data API returns parsed player data.</p><p>Endpoint: <code>/sr_info_parsed/{uid}</code></p><p><strong>Path Params</strong></p><table><thead><tr><th>Name</th><th>Type</th><th>Explanation</th></tr></thead><tbody><tr><td>uid</td><td>string</td><td>Player UID</td></tr></tbody></table><p><strong>Query Prams</strong></p><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Explanation</th></tr></thead><tbody><tr><td>lang</td><td>string</td><td>cn</td><td>Language</td></tr><tr><td>version</td><td>string</td><td>v2</td><td>API version</td></tr><tr><td>is_force_update</td><td>bool</td><td>false</td><td>Refresh cached data immediately</td></tr></tbody></table><p>Supported language list:</p><table><thead><tr><th>Code</th><th>Language</th></tr></thead><tbody><tr><td>cn</td><td>简体中文</td></tr><tr><td>cht</td><td>繁體中文</td></tr><tr><td>de</td><td>Deutsch</td></tr><tr><td>en</td><td>English</td></tr><tr><td>es</td><td>Español</td></tr><tr><td>fr</td><td>Français</td></tr><tr><td>id</td><td>Bahasa Indonesia</td></tr><tr><td>jp</td><td>日本語</td></tr><tr><td>kr</td><td>한국어</td></tr><tr><td>pt</td><td>Português</td></tr><tr><td>ru</td><td>Русский</td></tr><tr><td>th</td><td>ภาษาไทย</td></tr><tr><td>vi</td><td>Tiếng Việt</td></tr></tbody></table><p><strong>Example</strong></p><div class="language-http line-numbers-mode" data-ext="http" data-title="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/sr_info_parsed/100000999?lang=en</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span> <span class="token header-value">api.mihomo.me</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">Your-App-Name</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Response</strong></p><p>MiHoMo Parsed Data API response data example:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;player&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100000999&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NICKNAME&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span>
    <span class="token property">&quot;world_level&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
    <span class="token property">&quot;friend_count&quot;</span><span class="token operator">:</span> <span class="token number">91</span><span class="token punctuation">,</span>
    <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;201006&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Silver Wolf&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/avatar/1006.png&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;signature&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SIGNATURE&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_display&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;space_info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// Memory level, Memory of chaos id, level, star count</span>
      <span class="token property">&quot;memory_data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token property">&quot;chaos_id&quot;</span><span class="token operator">:</span> <span class="token number">1014</span><span class="token punctuation">,</span> <span class="token property">&quot;chaos_level&quot;</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token property">&quot;chaos_star_count&quot;</span><span class="token operator">:</span> <span class="token number">33</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// Simulation space level</span>
      <span class="token property">&quot;universe_level&quot;</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
      <span class="token property">&quot;avatar_count&quot;</span><span class="token operator">:</span> <span class="token number">41</span><span class="token punctuation">,</span>
      <span class="token property">&quot;light_cone_count&quot;</span><span class="token operator">:</span> <span class="token number">74</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relic_count&quot;</span><span class="token operator">:</span> <span class="token number">1858</span><span class="token punctuation">,</span>
      <span class="token property">&quot;achievement_count&quot;</span><span class="token operator">:</span> <span class="token number">398</span><span class="token punctuation">,</span>
      <span class="token property">&quot;book_count&quot;</span><span class="token operator">:</span> <span class="token number">124</span><span class="token punctuation">,</span>
      <span class="token property">&quot;music_count&quot;</span><span class="token operator">:</span> <span class="token number">18</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;characters&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1212&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Jingliu&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;rarity&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token property">&quot;rank&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
      <span class="token property">&quot;promotion&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
      <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/character/1212.png&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;preview&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/character_preview/1212.png&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;portrait&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/character_portrait/1212.png&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// Rank icons in order</span>
      <span class="token property">&quot;rank_icons&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;icon/skill/1212_rank1.png&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;icon/skill/1212_rank2.png&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;icon/skill/1212_skill.png&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;icon/skill/1212_rank4.png&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;icon/skill/1212_ultimate.png&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;icon/skill/1212_rank6.png&quot;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Warrior&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Destruction&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/path/Destruction.png&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;element&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Ice&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Ice&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#47C7FD&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/element/Ice.png&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;skills&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;121201&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Lucent Moonglow&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
          <span class="token property">&quot;max_level&quot;</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
          <span class="token property">&quot;element&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Ice&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Ice&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#47C7FD&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/element/Ice.png&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Normal&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type_text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Basic ATK&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SingleAttack&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;effect_text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Single Target&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;simple_desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Deals minor Ice DMG to a single enemy target.&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Deals Ice DMG equal to 90% of Jingliu&#39;s ATK to a single enemy.&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/skill/1212_basic_atk.png&quot;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// Other skills</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;skill_trees&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1212001&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
          <span class="token property">&quot;anchor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Point01&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;max_level&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
          <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/skill/1212_basic_atk.png&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;parent&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// ...,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1212210&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;anchor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Point18&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;max_level&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/property/IconCriticalDamage.png&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;parent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1212208&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;light_cone&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;23014&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;I Shall Be My Own Sword&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rarity&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rank&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
        <span class="token property">&quot;promotion&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/light_cone/23014.png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;preview&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/light_cone_preview/23014.png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;portrait&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/light_cone_portrait/23014.png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Warrior&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Destruction&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/path/Destruction.png&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hp&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HP&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/property/IconMaxHP.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">1164.2399999999998</span><span class="token punctuation">,</span>
            <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1164&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;percent&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;atk&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ATK&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/property/IconAttack.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">582.1199999999999</span><span class="token punctuation">,</span>
            <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;582&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;percent&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;def&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;DEF&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/property/IconDefence.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">396.9</span><span class="token punctuation">,</span>
            <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;396&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;percent&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// Light cone properties</span>
        <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CriticalDamageBase&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;crit_dmg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CRIT DMG&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/property/IconCriticalDamage.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">0.2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20.0%&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;percent&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relics&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;61041&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hunter&#39;s Artaius Hood&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;set_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;104&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;set_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hunter of Glacial Forest&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;rarity&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
          <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
          <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/relic/104_0.png&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;main_affix&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HPDelta&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hp&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HP&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/property/IconMaxHP.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">705.5999999999999</span><span class="token punctuation">,</span>
            <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;705&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;percent&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;sub_affix&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CriticalChanceBase&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;crit_rate&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CRIT Rate&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/property/IconCriticalChance.png&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">0.058320000399999995</span><span class="token punctuation">,</span>
              <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5.8%&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;percent&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token property">&quot;step&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CriticalDamageBase&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;crit_dmg&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CRIT DMG&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/property/IconCriticalDamage.png&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">0.1101600004</span><span class="token punctuation">,</span>
              <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;11.0%&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;percent&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token property">&quot;step&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;StatusProbabilityBase&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;effect_hit&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Effect Hit Rate&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/property/IconStatusProbability.png&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">0.1209600072</span><span class="token punctuation">,</span>
              <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12.0%&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;percent&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
              <span class="token property">&quot;step&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;StatusResistanceBase&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;effect_res&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Effect RES&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/property/IconStatusResistance.png&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">0.0777600046</span><span class="token punctuation">,</span>
              <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;7.7%&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;percent&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token property">&quot;step&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// Other relics</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// Enabled relic sets</span>
      <span class="token property">&quot;relic_sets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;104&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hunter of Glacial Forest&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/relic/104.png&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;num&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Increases Ice DMG by 10%.&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;IceAddedRatio&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ice_dmg&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Ice DMG Boost&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/property/IconIceAddedRatio.png&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
              <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10.0%&quot;</span><span class="token punctuation">,</span>
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
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HP&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/property/IconMaxHP.png&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">2600.136</span><span class="token punctuation">,</span>
          <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2600&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;percent&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// HP ATK DEF SPD CRIT-RATE CRIT-DMG</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// Character boost values</span>
      <span class="token property">&quot;additions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;crit_dmg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CRIT DMG&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/property/IconCriticalDamage.png&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">1.4478000012</span><span class="token punctuation">,</span>
          <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;144.7%&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;percent&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;spd&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SPD&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/property/IconSpeed.png&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">40.032</span><span class="token punctuation">,</span>
          <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;40&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;percent&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// ...</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// Character detailed buff list</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CriticalDamageBase&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;crit_dmg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CRIT DMG&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/property/IconCriticalDamage.png&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">1.4478000012</span><span class="token punctuation">,</span>
          <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;144.7%&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;percent&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SpeedDelta&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;spd&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SPD&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;icon/property/IconSpeed.png&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">40.032</span><span class="token punctuation">,</span>
          <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;40&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;percent&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// ...</span>
      <span class="token punctuation">]</span>
      <span class="token comment">// Positions in showcase, 0 to 7</span>
      <span class="token property">&quot;pos&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// Other characters</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Reference data model:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># uncomment if you are using pydantic</span>
<span class="token comment"># from pydantic import BaseModel as Model</span>

<span class="token comment"># uncomment if you are using msgspec</span>
<span class="token comment"># from msgspec import Struct as Model</span>

<span class="token keyword">class</span> <span class="token class-name">LevelInfo</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    level<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">class</span> <span class="token class-name">AvatarInfo</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    name<span class="token punctuation">:</span> <span class="token builtin">str</span>
    icon<span class="token punctuation">:</span> <span class="token builtin">str</span>

<span class="token keyword">class</span> <span class="token class-name">PathInfo</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    name<span class="token punctuation">:</span> <span class="token builtin">str</span>
    icon<span class="token punctuation">:</span> <span class="token builtin">str</span>

<span class="token keyword">class</span> <span class="token class-name">ElementInfo</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    name<span class="token punctuation">:</span> <span class="token builtin">str</span>
    color<span class="token punctuation">:</span> <span class="token builtin">str</span>
    icon<span class="token punctuation">:</span> <span class="token builtin">str</span>

<span class="token keyword">class</span> <span class="token class-name">SkillInfo</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
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

<span class="token keyword">class</span> <span class="token class-name">SkillTreeInfo</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    level<span class="token punctuation">:</span> <span class="token builtin">int</span>
    anchor<span class="token punctuation">:</span> <span class="token builtin">str</span>
    max_level<span class="token punctuation">:</span> <span class="token builtin">int</span>
    icon<span class="token punctuation">:</span> <span class="token builtin">str</span>
    parent<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>

<span class="token keyword">class</span> <span class="token class-name">AttributeInfo</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    field<span class="token punctuation">:</span> <span class="token builtin">str</span>
    name<span class="token punctuation">:</span> <span class="token builtin">str</span>
    icon<span class="token punctuation">:</span> <span class="token builtin">str</span>
    value<span class="token punctuation">:</span> <span class="token builtin">float</span>
    display<span class="token punctuation">:</span> <span class="token builtin">str</span>
    percent<span class="token punctuation">:</span> <span class="token builtin">bool</span>

<span class="token keyword">class</span> <span class="token class-name">PropertyInfo</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
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

<span class="token keyword">class</span> <span class="token class-name">RelicInfo</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    name<span class="token punctuation">:</span> <span class="token builtin">str</span>
    <span class="token builtin">type</span><span class="token punctuation">:</span> <span class="token builtin">int</span>
    set_id<span class="token punctuation">:</span> <span class="token builtin">str</span>
    set_name<span class="token punctuation">:</span> <span class="token builtin">str</span>
    rarity<span class="token punctuation">:</span> <span class="token builtin">int</span>
    level<span class="token punctuation">:</span> <span class="token builtin">int</span>
    icon<span class="token punctuation">:</span> <span class="token builtin">str</span>
    main_affix<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>PropertyInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>
    sub_affix<span class="token punctuation">:</span> List<span class="token punctuation">[</span>SubAffixInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">class</span> <span class="token class-name">RelicSetInfo</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    name<span class="token punctuation">:</span> <span class="token builtin">str</span>
    icon<span class="token punctuation">:</span> <span class="token builtin">str</span>
    num<span class="token punctuation">:</span> <span class="token builtin">int</span>
    desc<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    properties<span class="token punctuation">:</span> List<span class="token punctuation">[</span>PropertyInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">class</span> <span class="token class-name">LightConeInfo</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
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

<span class="token keyword">class</span> <span class="token class-name">MemoryInfo</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    level<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    chaos_id<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>
    chaos_level<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>
    chaos_star_count<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>

<span class="token keyword">class</span> <span class="token class-name">SpaceInfo</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    memory_data<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>MemoryInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>
    universe_level<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    avatar_count<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    light_cone_count<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    relic_count<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    achievement_count<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    book_count<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    music_count<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">class</span> <span class="token class-name">PlayerInfo</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    uid<span class="token punctuation">:</span> <span class="token builtin">str</span>
    nickname<span class="token punctuation">:</span> <span class="token builtin">str</span>
    level<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    world_level<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    friend_count<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    avatar<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>AvatarInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>
    signature<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    is_display<span class="token punctuation">:</span> <span class="token builtin">bool</span> <span class="token operator">=</span> <span class="token boolean">False</span>
    space_info<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>SpaceInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>

<span class="token keyword">class</span> <span class="token class-name">CharacterInfo</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
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

<span class="token keyword">class</span> <span class="token class-name">FormattedApiInfo</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    player<span class="token punctuation">:</span> PlayerInfo
    characters<span class="token punctuation">:</span> List<span class="token punctuation">[</span>CharacterInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),e=[o];function l(c,i){return a(),s("div",null,e)}const k=n(p,[["render",l],["__file","parsed.html.vue"]]),d=JSON.parse('{"path":"/en/api/parsed.html","title":"Parsed Data API","lang":"en-US","frontmatter":{"title":"Parsed Data API","icon":"ph:link-simple","order":2,"category":["Resource"],"description":"This page shows usage of MiHoMo Parsed Data API. Parsed Data API MiHoMo Parsed Data API returns parsed player data. Endpoint: /sr_info_parsed/{uid} Path Params Query Prams Suppo...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://march7th.xyz/zh/api/parsed.html"}],["meta",{"property":"og:url","content":"https://march7th.xyz/en/api/parsed.html"}],["meta",{"property":"og:site_name","content":"March7th Docs"}],["meta",{"property":"og:title","content":"Parsed Data API"}],["meta",{"property":"og:description","content":"This page shows usage of MiHoMo Parsed Data API. Parsed Data API MiHoMo Parsed Data API returns parsed player data. Endpoint: /sr_info_parsed/{uid} Path Params Query Prams Suppo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-26T10:53:06.000Z"}],["meta",{"property":"article:author","content":"Mar-7th"}],["meta",{"property":"article:modified_time","content":"2024-05-26T10:53:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Parsed Data API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-26T10:53:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mar-7th\\",\\"url\\":\\"https://github.com/Mar-7th\\"}]}"]]},"headers":[{"level":2,"title":"Parsed Data API","slug":"parsed-data-api","link":"#parsed-data-api","children":[]}],"git":{"createdTime":1716720786000,"updatedTime":1716720786000,"contributors":[{"name":"mobyw","email":"mobyw66@gmail.com","commits":1}]},"readingTime":{"minutes":3.48,"words":1044},"filePathRelative":"en/api/parsed.md","localizedDate":"May 26, 2024","autoDesc":true}');export{k as comp,d as data};
# DSH 蓝皮书 · 内容写作规范(content-spec)

本文件是写作子代理的唯一规范。**动手前先完整阅读本文件**,再按任务清单写作。

## 1. 站点事实清单(必须准确,不得虚构)

来自 DeepSeek Harness 官方文档与真实工具面:

- 项目:DeepSeek Harness(`dsh`),DeepSeek AI 开源,架构「一切皆插件」,由 Cordis 驱动,论文《A Programming Paradigm for Spatiotemporal Composability》。
- 安装运行:需要 Node.js;`npx @deepseek-ai/dsh web` 启动 Web UI,默认地址 `http://127.0.0.1:3080`;从源码:`git clone https://github.com/deepseek-ai/deepseek-harness.git && pnpm install && pnpm run build && pnpm dsh web`。
- Web UI:设置 → 模型,填 DeepSeek API 密钥,保存后模型路由立即可用、**无需重启**;支持其他提供方与 OpenAI 兼容自定义端点;「选择工作区」:dsh 进程把启动时的调用目录作为默认文件系统位置,新 Web UI 在添加工作区前不选中任何工作区,**选中工作区前会话输入框不可用**。
- 任务示例(官方文档原句):`Summarize this repository and identify its main packages.`;agent 可以读取/编辑工作区文件、运行命令、委派工作、维护计划;当操作在当前权限策略下需要审批时,Web UI 会先询问用户。
- 沙箱权限:默认策略为 workspace-write(可读写会话工作区);危险操作/越界操作会触发审批,升级到 danger-full-access 需说明理由;审批策略可能 fail-closed(无应答则拒绝)。
- 后台任务:长命令可 run_in_background 启动,返回 job id;用 job_output 收集、job_kill 停止;不要 busy-poll 轮询。
- 子代理:subagent 委派自包含任务(默认后台);subagent_fork 继承父会话上下文;send_message 延续子会话;interrupt_agent 打断;list_agents 查看。
- 工作流编排:workflow 工具用 JavaScript 脚本编排大量子代理;hooks:agent(prompt,opts)、pipeline(items,...stages)、parallel(thunks)、phase(title)、log(msg);agent 可带 schema 校验结构化结果。
- 长期目标:create_goal / update_goal / get_goal;支持多轮自动续跑;同一阻塞持续多轮才可标记 blocked。
- Ralph 循环:ralph 工具,每轮全新会话、共享工作区作为记忆。
- Skills:skill 工具按名称从技能目录加载完整操作说明。
- 计划模式:plan mode 下先规划,exit_plan_mode 提交计划供确认。
- 文件工具:read / write / edit / glob / grep(ripgrep 语法);edit 需 old_string 唯一匹配;先读后改;UTF-8。
- 开发文档:docs/architecture.md、docs/development.md、AGENTS.md、docs/cookbook/(adding-a-tool、adding-a-package、adding-an-llm-adapter 等)、docs/user/guide/(index、providers、python-sdk)、apps/cli。
- 许可证:MIT;当前为开发者预览阶段,会有破坏性变更;社区:GitHub Discussions、Discord、插件仓库加 `dsh-plugin` topic。

## 2. 设计语言与写作风格

- 全站中文;语气:实用、直接、略带工程师味道;用「你」称呼读者。
- 每页必须包含:1 个 h1、若干 h2(带 `id`)、正文 p、至少 1 个列表或步骤、至少 1 个 note 提示块;章节页建议含 1 个代码块。
- 代码块:``` 围栏,语言标注 bash/text;内容必须与事实清单一致。
- 不要虚构不存在的命令、UI 文案或官方功能;拿不准就写「参见官方文档」并链接 `https://github.com/deepseek-ai/DeepSeek-Harness`。
- 长度:章节页 400–800 字;案例页 300–600 字。

## 3. HTML 骨架(必须严格复用)

### 3.1 章节页骨架(ch-XX.html,顶部导航 active=「开始阅读」)

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="theme-color" content="#d8f238" />
  <meta name="author" content="DSH Bluebook Contributors" />
  <meta name="description" content="<一句话 SEO 描述>" />
  <title><章节标题>｜DSH 实战蓝皮书</title>
  <link rel="stylesheet" href="./assets/style.css" />
</head>
<body>
  <header class="topbar">
    <div class="topbar-inner">
      <a class="brand" href="./index.html"><span class="brand-mark">◢◤</span>DSH 蓝皮书<small>· DEEPSEEK HARNESS</small></a>
      <button class="nav-toggle" aria-expanded="false" aria-label="菜单">☰</button>
      <nav class="nav">
        <a href="./index.html">首页</a>
        <a href="./bluebook.html" class="active">开始阅读</a>
        <a href="./cases.html">案例集</a>
        <a href="./help.html">帮你解决</a>
        <a href="./reading-guide.html">阅读指南</a>
      </nav>
    </div>
  </header>
  <div class="doc-layout">
    <aside class="doc-side">
      <div class="side-group">
        <div class="side-title">导航</div>
        <ul>
          <li><a href="./index.html">首页</a></li>
          <li><a href="./bluebook.html" class="active">开始阅读</a></li>
          <li><a href="./cases.html">案例集</a></li>
          <li><a href="./help.html">帮你解决</a></li>
          <li><a href="./reading-guide.html">阅读指南</a></li>
        </ul>
      </div>
      <div class="side-group">
        <div class="side-title">本页目录</div>
        <ul>
          <li><a href="#<h2的id>"><h2标题></a></li>
          <!-- 每个 h2 一条 -->
        </ul>
      </div>
    </aside>
    <main class="doc-main" id="main-content">
      <p class="breadcrumb"><a href="./bluebook.html">蓝皮书</a> → <a href="./bluebook.html#part-XX">第 X 篇</a> → 第 X 章</p>
      <p class="section-kicker">PART 0X · CH. XX</p>
      <h1><章节标题></h1>
      <p class="doc-lead"><一句话定位:本章解决什么问题></p>
      <!-- 正文 -->
      <nav class="chapter-nav">
        <a class="cn-prev" href="./ch-XX.html">← 第 XX 章 <标题></a>
        <a class="cn-next" href="./ch-XX.html">第 XX 章 <标题> →</a>
      </nav>
    </main>
  </div>
  <footer class="footer">
    <div class="footer-inner">
      <div>
        <span class="f-brand"><span class="brand-mark">◢◤</span>DSH 实战蓝皮书</span>
        <p>社区维护的 DeepSeek Harness 中文实践指南,内容基于官方文档与社区实践整理,欢迎参与共建。</p>
        <p class="edit-link">在 GitHub 上<a href="https://github.com/deepseek-ai/DeepSeek-Harness" target="_blank" rel="noopener">改进此页</a></p>
      </div>
      <div class="footer-links">
        <a href="./reading-guide.html">阅读指南</a>
        <a href="./bluebook.html">开始阅读</a>
        <a href="./cases.html">案例集</a>
        <a href="./help.html">帮你解决</a>
        <a href="https://github.com/deepseek-ai/DeepSeek-Harness" target="_blank" rel="noopener">GitHub</a>
        <a href="https://github.com/deepseek-ai/deepseek-harness/discussions" target="_blank" rel="noopener">Discussions</a>
        <a href="https://discord.gg/Ycq5dCaS4" target="_blank" rel="noopener">Discord</a>
      </div>
    </div>
  </footer>
  <script src="./assets/main.js"></script>
</body>
</html>
```

### 3.2 案例页骨架(case-XX.html,顶部导航 active=「案例集」)

与章节页相同,仅差异:
- topbar 中 active 改为 `./cases.html`,sidebar 导航同步;
- breadcrumb:`<a href="./cases.html">案例集</a> → <案例名>`;
- section-kicker 用 `CASE · <标签>`(如 `CASE · CODE`);
- h1 后紧跟 `<div class="case-tags"><span>CODE</span><span>BASH</span></div>`(标签用大写英文);
- 正文 h2 固定为:场景与目标 / 用到的能力 / 操作过程 / 实际效果 / 验收标准 / 可复用资产;最后加一个 `note warn` 安全边界提示;
- 结尾 chapter-nav 换成「其他案例」链接(指向其余 5 个案例页,任选 2 个即可)。

### 3.3 样式类速查(已在 style.css 中,直接使用)

`doc-layout` `doc-side` `side-group` `side-title` `doc-main` `breadcrumb` `section-kicker` `doc-lead`
`h2 id`(h2 需自带 `<span class="hash">#</span>` 前缀,如 `<h2 id="install"><span class="hash">#</span>环境要求</h2>`)
`p` `ul/ol` `li` `strong` `code`(行内)`pre class="codeblock"`(代码块)`note`(提示块,标题用 `<div class="note-title">...</div>`)
`note warn`(警告块)`steps`(步骤 ol: `<ol class="steps">` + `<li><b>步骤名。</b>说明</li>`)
`chapter-nav` `cn-prev` `cn-next` `case-tags` `tag` `btn` `btn-primary` `btn-ghost`

## 4. 各页面内容大纲

### 4.1 章节页

**ch-02.html 第 2 章 下载、安装与启动(PART 01)**
- h2:环境要求 / 通过 npm 启动 / 从源码运行 / 常见问题 / 下一步
- 内容:Node.js 要求;`npx @deepseek-ai/dsh web`;默认 http://127.0.0.1:3080;首次运行会打印访问地址;从源码四步命令;常见问题(端口占用、npx 缓存、版本差异);下一步指向第 4 章配置模型。
- 上一篇:第 1 章 初识 DeepSeek Harness(链接 ./bluebook.html#ch-01);下一篇:第 3 章 Web UI 漫游(链接 ./bluebook.html#ch-03)。

**ch-04.html 第 4 章 配置模型提供方(PART 01)**
- h2:设置 → 模型 / 其他提供方与自定义端点 / 密钥安全 / 验证配置 / 下一步
- 内容:填 DeepSeek API 密钥,保存即生效、无需重启;OpenAI 兼容端点;密钥不要提交到仓库、不要粘贴到公开渠道;验证:发一个简单任务;下一步指向第 5 章。
- 上一篇:第 3 章(./bluebook.html#ch-03);下一篇:第 5 章(./ch-05.html)。

**ch-05.html 第 5 章 第一个任务(PART 01)**
- h2:先选择工作区 / 发送第一个任务 / 理解 agent 的回路 / 任务验收 / 下一步
- 内容:为什么必须选工作区;官方示例 prompt `Summarize this repository and identify its main packages.`;回路:读文件→思考→调工具→检查;计划与审批;可检查的验收标准;下一步第 6 章。
- 上一篇:第 4 章(./ch-04.html);下一篇:第 6 章(./ch-06.html)。

**ch-06.html 第 6 章 沙箱与权限(PART 01)**
- h2:为什么需要沙箱 / 默认策略:workspace-write / 审批与升级 / 权限意识清单 / 下一步
- 内容:默认 workspace-write;危险/越界操作触发审批;升级 danger-full-access 需理由;fail-closed;清单(读写边界、命令风险、敏感数据、外部发布);下一步第 9 章 bash。
- 上一篇:第 5 章(./ch-05.html);下一篇:第 9 章(./ch-09.html)。

**ch-09.html 第 9 章 用 bash 执行命令与脚本(PART 02)**
- h2:先探测环境 / 读输出与退出码 / 后台任务 / 脚本化常见操作 / 安全注意
- 内容:pwd/ls/node -v;exit code 标记;失败要调查再继续;run_in_background→job id→job_output/job_kill;不要 busy-poll;示例批量脚本(如按模式重命名);沙箱内运行、注意审批。
- 上一篇:第 8 章(./bluebook.html#ch-08);下一篇:第 10 章(./ch-10.html)。

**ch-10.html 第 10 章 文件读写与代码编辑(PART 02)**
- h2:文件工具集 / 编辑的正确姿势 / 搜索与定位 / 一个完整例子 / 注意
- 内容:read/write/edit/glob/grep;先读后改、小步提交;edit 唯一匹配、replace_all;glob 模式、grep ripgrep 语法;例子:改一行配置的流程(读→edit→确认);UTF-8、大文件分段读。
- 上一篇:第 9 章(./ch-09.html);下一篇:第 11 章(./bluebook.html#ch-11)。

**ch-18.html 第 18 章 一切皆插件:认识 Cordis 架构(PART 03)**
- h2:设计哲学 / 核心概念 / 从官方文档开始 / 插件生态 / 下一步
- 内容:一切皆插件;Cordis 驱动;论文背景;docs/architecture.md、development.md、AGENTS.md、cookbook;dsh-plugin topic、awesome-dsh-plugin;下一步第 19 章开发第一个插件。
- 上一篇:第 17 章(./bluebook.html#ch-17);下一篇:第 19 章(./bluebook.html#ch-19)。

### 4.2 案例页(结构见 3.2)

**case-01.html 审计一个仓库:依赖、安全与遗留问题**(标签 CODE · BASH · REVIEW;已复现)
- 场景:接手陌生仓库,需要快速掌握依赖与风险;过程:读清单文件→bash 查询版本/过时项→汇总报告;效果:30 分钟内出审计报告+整改清单;验收:报告含优先级排序、每条有出处;资产:审计提示词模板。

**case-02.html 批量整理下载目录:重命名、归档与去重**(FILES · SCRIPTS;已复现)
- 场景:下载目录 300+ 文件混乱;过程:glob 列出→按类型/日期规则设计→先干跑计划→人工确认后执行;效果:零误删;验收:清单与预期一致;资产:干跑-确认-执行 模板。

**case-03.html 用子代理并行调研三份竞品报告**(SUBAGENTS · PARALLEL;已复现)
- 场景:三份竞品资料需要独立调研;过程:每份一个后台 subagent→主会话汇总交叉验证;效果:并行完成、单路失败不阻塞;验收:报告含来源引用;资产:子代理调研提示词模板。

**case-04.html 长期目标:持续改进一个开源小项目**(GOALS · PLAN;已复现)
- 场景:把「改进项目」变成可推进的目标;过程:create_goal 拆分多轮(分析→设计→实现→测试→文档)→每轮验收后续跑;效果:多轮完成 feature+测试+文档;验收:每轮有产出与留痕;资产:目标拆解模板。

**case-05.html 重写并维护项目 README 与文档**(DOCS · FILES · RESEARCH;社区投稿)
- 场景:开源项目文档陈旧、新用户看不懂;过程:分析现状→web_search 调研同类优秀 README→重写→本地构建检查→PR;效果:README 重构+文档一致性检查;验收:结构与信息完整;资产:文档写作 checklist。

**case-06.html 每周自动化巡检:依赖与安全告警汇总**(BASH · WORKFLOW · AUTOMATION;社区投稿)
- 场景:每周手动检查依赖与安全更新;过程:workflow 脚本编排多步检查(依赖版本、安全公告、构建状态)→后台运行→汇总报告;效果:每周自动生成巡检报告;验收:报告包含全部检查项与结论;资产:巡检 workflow 脚本模板。

## 5. 交付与自查清单

- 文件写入目标目录:`/Users/libobo/Documents/deepseek/Harness community/harness-bluebook/`(文件名按任务指定)。
- 写完自查:① 每个文件是完整 HTML(含 head/topbar/sidebar/main/footer/script);② 链接相对路径正确(./xxx.html);③ h2 均有 id 且 sidebar 目录匹配;④ 事实与第 1 节一致,无虚构;⑤ 有代码块的页面 `<pre class="codeblock">` 内不要有未转义的 `<`/`>`。
- 最后汇报:写了哪些文件、每个文件字数、自查结果。

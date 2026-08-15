# DSH 蓝皮书 · 生态案例写作规范(eco-spec)

本文件是写作子代理的唯一规范。**动手前先完整阅读本文件与 `content-spec.md` 的第 1、2、3.2 节**(事实清单、设计语言、案例页骨架)。

## 1. 背景

这些是「社区生态案例」——基于 DeepSeek Harness 真实社区项目(插件/预设/教程)整理的使用案例。每个案例必须**忠实于来源仓库的真实描述**,不得虚构功能;「实际效果」只写来源中可证实的内容或定性描述,不编造具体数字(如「节省 30%」等)。

## 2. 页面骨架(与 case-XX.html 相同,差异如下)

- 文件名:`eco-01.html` … `eco-15.html`,位于 `/Users/libobo/Documents/deepseek/Harness community/harness-bluebook/`
- topbar/sidebar active =「案例集」(./cases.html);breadcrumb:`案例集 → 生态案例: <名称>`
- section-kicker:`ECOSYSTEM CASE · <标签>`
- h1 后紧跟 `<div class="case-tags">`(大写英文标签,2-3 个)
- **h2 固定五节**(带 `<span class="hash">#</span>` 与 id,sidebar 本页目录列出):
  1. `场景与目标` — 这个项目解决什么问题、给谁用
  2. `用到的能力` — 用到的 DSH 原生机制与插件机制(ul 列表,每项一句)
  3. `怎么做到的` — 项目设计思路/架构(可含 1 个 `pre class="codeblock"` 安装命令)
  4. `实际效果` — 来自来源的真实描述或定性说明(严禁编造数字)
  5. `出处与上手` — 真实仓库链接列表 + 安装命令(从本规范第 3 节复制)
- 正文末尾加 `note warn` 安全提示(措辞参考 awesome-dsh-plugin 官方警告):
  「安装插件会在你的机器上以你的权限运行第三方代码,可能读取文件、使用凭证、访问网络。工具审批不会对插件代码做沙箱隔离;收录列表不等于安全审查,安装前请审阅源码,陌生插件请在无密钥的环境试用。」
- 结尾 chapter-nav 放 2 个「其他生态案例」链接(指向本组内其他 eco-XX.html)
- 每页 300–550 字;完整 HTML(含 head/topbar/sidebar/main/footer/script),`assets/main.js` 引入

## 3. 15 个案例事实锚点(来源仓库与真实描述,写作时以此为准)

### 组 A · 多智能体与工作流

**eco-01 一支 AI 团队:dsh-agent-teams**
- 仓库:https://github.com/NanmiCoder/dsh-agent-teams | npm:`@nanmicoder/dsh-agent-teams`
- 真实描述:把一个 DSH 会话变成「队长」,组装可持久化的子代理、把目标拆成依赖感知的任务、通过私信协调工作;提供团队协议、九个协调工具、持久状态与实时 Web UI,无需独立工作流引擎。成员是可续跑的 DSH 子代理;任务有显式状态、依赖未完成前不可认领;成员之间直接私信(邮箱式消息)。
- 安装:`dsh plugin --profile web add @nanmicoder/dsh-agent-teams`

**eco-02 人机协同规划:dsh-plans**
- 仓库:https://github.com/Optim-Agent/dsh-plans
- 真实描述:Human-in-the-loop 规划预设。先把仓库变更请求变成 `./dsh-plans/` 下可追踪的 Markdown 计划,再用 reviewer/criticizer 子代理轮次精修,经显式交接后交给持久 DSH goal 驱动执行,直到计划的 Verifier Checklist 全部通过。内置 5 个技能(create-a-small-plan / create-a-plan / create-a-big-plan / diagnose-before-plan / reference-before-plan);每次只问一个问题、推荐项在前;评审子代理只读;执行采用 ponytail 简化纪律与 MVP 最小测试集。
- 安装:`git clone https://github.com/Optim-Agent/dsh-plans.git ~/.dsh/.agent-presets/dsh-plans`(然后新会话选择预设)

**eco-03 双模型路由:dsh-plan-execute**
- 来源:36氪报道《玩了一夜DeepSeek Harness…》(https://www.36kr.com/p/3938774780263814)
- 真实描述:plan 模式用推理型模型做规划,用户批准后自动切换到执行模型干活,两个模型各干擅长的事,账单立省一截。
- 同类插件(可提一句):dsh-subagent-max、dsh-plugin-product-subagents

**eco-04 Git 工作树隔离交付:dsh-git-worktree**
- 仓库:https://github.com/wloops/dsh-git-worktree
- 真实描述:把变更放进永久工作树(.dsh-worktrees),提供 ready-for-review / apply / finish / discard 生命周期,冲突处理与安全清理;源自 Domi 的生产系统移植。

**eco-05 会话轨迹治理:dsh-trajectory-governance**
- 仓库:https://github.com/dfycaly98931680/dsh-trajectory-governance
- 真实描述:把扁平会话日志重建为多分支轨迹树,检测循环死锁、无效重试、目标漂移,带成本归因告警、一键打断与断点 fork(走官方 API),独立 GUI 标签页。

### 组 B · 工具与办公

**eco-06 SSH 远程运维:dsh-ssh-ops**
- 仓库:https://github.com/caoyiwei850/dsh-ssh-ops
- 真实描述:在 Web UI 里从主会话驱动已连接的服务器(ssh_connect/ssh_exec/ssh_read/ssh_write/ssh_disconnect),右侧保留交互式 xterm.js 终端。
- 安装:`dsh plugin --profile web add dsh-ssh-ops`

**eco-07 邮件与日程:dsh-email · dsh-calendar**
- 仓库:https://github.com/STARDUSTLC666/dsh-email | https://github.com/STARDUSTLC666/dsh-calendar
- 真实描述:IMAP/SMTP 邮件工具(列出/读/搜/发/文件夹/附件,QQ/163/126/Sina/Aliyun/Gmail/Outlook/iCloud 预设,多账号,发送审批闸门);CalDAV 日程工具(Google/iCloud/Nextcloud/自定义端点,RRULE 展开)。

**eco-08 Excel 对话式办公:dsh-excel-chat**
- 仓库:https://github.com/hccccc01333/dsh-excel-chat
- 真实描述:在 DSH 里用对话创建、编辑、修复、校验电子表格,每次编辑后自动做公式健康检查。

**eco-09 浏览器与电脑操作**
- 仓库:https://github.com/kyo615/dsh-browser-control(Playwright MCP,驱动真实可见 Chrome,约 80 个 browser_* 工具,实时截图面板)| https://github.com/ZRui-C/dsh-computer-use(文本优先的电脑操作:后台 Chromium + 无障碍优先 macOS 控制,不抢鼠标指针)| https://github.com/guo6x/dsh-pilot(零依赖 CDP 浏览器控制,8 个 pilot_* 工具)

**eco-10 数据库与数据工具**
- 仓库:https://github.com/omdsh-dev/dsh-data-agent(让 AI 连数据库写 SQL)| https://github.com/omdsh-dev/dsh-toolkit(零依赖工具箱:时间/编码/json/计算器/csv/正则/markdown/diff/stat/schema 十个确定性工具)| https://github.com/omdsh-dev/dsh-kb-sieve(用 SQLite FTS5 从 md/txt/docx/pdf 构建可审计知识库包)

### 组 C · 专业领域

**eco-11 学术研究**
- 仓库:https://github.com/lzszq/dsh-scholar(学术助手)| https://github.com/xiehuan123/dsh-deepread(五模式深读:快速/深度/知识地图/费曼/全书,claim-evidence-data 报告,Mermaid/XMind 脑图,MD/HTML 导出)| https://github.com/fly233338/dsh-overleaf(通过 OverleafMCP 连接多个 Overleaf 项目,浏览/分析/Git 更新)

**eco-12 内容创作与视频**
- 仓库:https://github.com/x2802490130-prog/dsh-tool-writing(网文写作引擎:并行起草、大纲头脑风暴、伏笔管理、语义向量检索、语料库、用量台账、机械校对、本地连载计划)| https://github.com/STARDUSTLC666/dsh-ffmpeg(七类视频工具:probe/cut/concat/encode/subtitle/extract/gif,免 shell 传参)| https://github.com/CZX2244/dsh-bilibili(B站视频分析:元数据/字幕/评论/弹幕/关键帧)

**eco-13 金融与股票**
- 仓库:https://github.com/Realyujie/dsh-us-stocks(美股行情/历史/财报/分析师共识/新闻,yahoo-finance2)| https://github.com/zhang787jun/dsh-finance(金融研究工作流与组合风险工具,重视市场事实来源纪律)

**eco-14 游戏与 3D**
- 仓库:https://github.com/Smalldy/godot-bridge(DSH↔Godot 引擎运行时桥:8 个工具,场景/UI 检查、GDScript 求值、输入模拟、截图,替代 godot-mcp)| https://github.com/CheshireJCat/blender(Blender 3D 生产插件:30 个建模/重建技能、13 个运行时工具,参考拟合/渲染/校验/动画/导出)

**eco-15 教育**
- 仓库:https://github.com/THU-MAIC/dsh-openmaic(清华 MAIC:课堂、课件、交互组件、苏格拉底式教学)| 另可提:https://github.com/zimai233/dsh-exam-countdown(64 种考试倒计时)| https://github.com/zimai233/dsh-adhd-copilot(ADHD 行为教练技能)

## 4. 社区教程(不写页面,仅用于组 D 汇总,见 5.2)

- https://github.com/yanhua1010/dsh-harness-tutorial — VitePress 教学站:原理 8 章 + 源码拆解 6 章 + 8 个可运行 Demo + mini-harness 教学项目
- https://github.com/onychen/learn-dsh — 拆解 dsh 的渐进式课程
- https://github.com/pingfanfan/hello-dsh — 30 分钟第一个插件,10 步教程,22 个技能实例
- https://github.com/Electricitysheep/dsh-handbook — dsh 白皮书手册:15 章 + 生态观察(1804 插件 / 780 帖讨论区)

## 5. 交付物

### 5.1 子代理任务:写本组 5 个 eco-XX.html 页面(每组 5 个,共 15 个,分给 3 个子代理)

### 5.2 汇总页整合(由主代理做,子代理不做):cases.html 新增「社区生态案例」区(15 卡片)+「社区教程」区(4 外部链接)。子代理无需处理。

## 6. 自查清单

- 每页完整 HTML;h2 五节与 id 齐全;事实与第 3 节锚点一致,无编造数字;来源链接真实;每页有 note warn 安全提示与 chapter-nav 2 个同组链接。
- 汇报:文件清单、每篇字数、自查结果。

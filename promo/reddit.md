# Reddit 推广稿 — DSH 实战蓝皮书 (DSH Bluebook)

> 平台:Reddit | 语言:English | 每帖 150–300 词 | 事实基准:promo-spec.md 第 1 节(19 页、7 章完整正文、6 个社区案例、开发者预览、社区项目与 DeepSeek 无隶属)

## ① 标题方案

### Variant A — r/artificial(通用版)
1. **(推荐)** Open-source Chinese field guide for DeepSeek Harness — 19 pages, 6 reproducible cases
2. DSH 实战蓝皮书:the community's practical bluebook for DeepSeek Harness (free, open source)
3. I've been using DeepSeek Harness since its dev preview; the community just published a field guide

### Variant B — r/selfhosted(技术版)
1. **(推荐)** Running DeepSeek Harness yourself? The community wrote a task-first bluebook (19 pages)
2. dsh field guide:7 full chapters + 6 reproducible cases for DeepSeek Harness
3. Self-host your agent harness:the DSH bluebook walks real tasks, not feature tours

## ② 正文全文

### Variant A — r/artificial(通用版)

<!-- post-a:start -->
I've been running DeepSeek Harness (dsh) since it entered developer preview, and I kept wishing for a practical guide — something that goes from "installed" to "working setup" through real tasks instead of feature tours. The community has now published exactly that: the DSH 实战蓝皮书 (DSH bluebook), a free static docs site written in Chinese. Its motto fits the way I work: get from 0 to 1 by actually running it first, then from 1 to 100 by building durable working systems.

What's inside right now: 19 pages, with 7 chapters fully written — install & launch, configuring models, your first task, sandbox & permissions, bash, file read/write, and the everything-is-a-plugin architecture (built on Cordis). Plus 6 reproducible community cases: repository audit, file organization, parallel research with subagents, long-term goals, documentation rewrite, and a weekly inspection routine. New here? The reading guide picks a route for you. The book is planned as 4 volumes / 24 chapters, so most chapters are still open for contributors.

If you haven't tried dsh itself: `npx @deepseek-ai/dsh web` starts the Web UI at http://127.0.0.1:3080 — subagents, workflow orchestration, long-term goals, Skills, sandbox permissions, and background tasks under the hood.

Straight talk: dsh is a developer preview, and this bluebook is a community project, not affiliated with DeepSeek — the book says so itself. No invented benchmarks, just task logs.

Site: https://lishengbo1989-tech.github.io/harness-bluebook/
Repo: https://github.com/deepseek-ai/DeepSeek-Harness

Happy to answer questions in the comments.
<!-- post-a:end -->

### Variant B — r/selfhosted(技术版)

<!-- post-b:start -->
Since DeepSeek Harness (dsh) hit developer preview, I've been running it locally and building small automations with it. It's an open-source agent harness: `npx @deepseek-ai/dsh web` starts a Web UI on http://127.0.0.1:3080, and from there you drive subagents, workflow orchestration, long-term goals, Skills, sandbox permissions, and background tasks. The official docs cover the features; what I wanted was a task-first guide — real jobs, from install to a working routine.

That's what a few of us built: the DSH 实战蓝皮书 (DSH bluebook), a static site on GitHub Pages (so it's trivially hostable yourself too). 19 pages today: 7 full chapters — install & launch, configuring models, your first task, sandbox & permissions, bash, file read/write, and the everything-is-a-plugin architecture (Cordis) — plus 6 reproducible cases: repository audit, file organization, parallel subagent research, long-term goals, documentation rewrite, and a weekly inspection routine. A reading guide maps a route by role, and the planned 4 volumes / 24 chapters leave most chapters open for community authors.

Two honest caveats: dsh is a developer preview (expect rough edges), and the bluebook is a community project, not affiliated with DeepSeek — no invented numbers, just what we ran and what broke.

Site: https://lishengbo1989-tech.github.io/harness-bluebook/
Official repo: https://github.com/deepseek-ai/DeepSeek-Harness

If you run dsh locally, your notes would make a great chapter — contributions are welcome.
<!-- post-b:end -->

### Variant B-alt — 若改投 r/LocalLLaMA
沿用 Variant B 全文,只把开头第一段换成模型视角:提到第 4 章(配置模型)和第 6 章(沙箱与权限)是本地模型用户最关心的两章,以及「一切皆插件」的 Cordis 架构如何让工具接入可控。其余事实句与链接保持不变——不要提任何书中没有的具体模型厂商或性能数字。

## ③ 配图建议
- 首选:bluebook 首页截图(https://lishengbo1989-tech.github.io/harness-bluebook/),带「阅读指南」入口和章节列表,一眼说明"这是什么、给谁看"。
- 次选:案例集页面截图(6 个案例网格),直观证明"6 个可复现案例"。
- 技术版加分项:dsh Web UI(http://127.0.0.1:3080)跑某个案例(如仓库审计)时的截图,与正文里的 npx 命令呼应。
- 发布方式:建议发图片帖(图片帖曝光更高),链接放首条评论;或发链接帖让站点缩略图生效。图片压缩到 1MB 内并补 alt 文本。

## ④ Subreddit 与标签
- Variant A → r/artificial(通用)
- Variant B → r/selfhosted(技术);备选 r/LocalLLaMA(用 Variant B-alt 的改法)
- 关键词(自然出现在标题与首条评论即可,Reddit 无标签系统):DeepSeek Harness / dsh / open source / AI agents / self-hosted / sandbox / GitHub Pages
- 发帖规范提醒(发布前必读各 sub 版规):
  - 自荐帖之前先在本 sub 有真实参与(评论、回答问题),不要注册即发链接。
  - 遵守 Reddit 通用的 10% 自荐规则:自荐内容不超过你全部发帖+评论活动的 10%。
  - 帖内明示"社区项目、与 DeepSeek 无隶属、开发者预览"——两版正文均已包含。
  - 同一文本不要同时投多个 sub;若 r/LocalLLaMA 也要发,至少按 B-alt 改写开头。
  - 发布后逐条回复评论;帖子数据不理想也不要删了重发。

## ⑤ 评论区互动建议
- 自答 1(紧随发帖):"Is the book only in Chinese?" — Yes, the book is written in Chinese; the commands and configs are language-agnostic, so the cases are still followable. An English version would be a great contribution if there's demand.
- 自答 2:"What's the fastest way to try it?" — Run `npx @deepseek-ai/dsh web`, open http://127.0.0.1:3080, then follow Chapter 5 (first task) in the bluebook.
- 引导讨论的提问:Which of the 6 cases would you want written up next? / What task would you automate first if you had this working today? / How do you currently handle sandboxing for agent tools?
- 互动纪律:发帖后 1 小时内尽量回复;答技术问题直接给命令;被纠正时感谢,并说明会更新到仓库。

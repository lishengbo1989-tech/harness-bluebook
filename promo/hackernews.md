# Hacker News 推广稿 — DSH 实战蓝皮书 (DSH Bluebook)

> 平台:Hacker News | 语言:English | 标题 ≤ 80 字符 | 正文 200–400 词 | 事实基准:promo-spec.md 第 1 节(19 页、7 章完整正文、6 个社区案例、开发者预览、社区项目与 DeepSeek 无隶属)

## ① 标题方案(≤80 字符,陈述事实式)
1. **(推荐)** `Show HN: Open-source Chinese field guide for DeepSeek Harness (19 pages)` — 72 字符
2. `Show HN: Chinese community bluebook for DeepSeek Harness (7 chapters, 6 cases)` — 79 字符
3. `Show HN: dsh bluebook — Chinese community guide, 19 pages, welcomes contributors` — 80 字符(临界,仅作备选)
   - 风格建议:用 "Show HN:" 开头(站点公开可访问、可立即试用);只用 ASCII 字符(避免 em-dash/emoji 占字符);不要团队口吻("we are excited")、不用感叹号;把数字(19、7、6)放进标题最抓人;不写公司/官方背书字样(非官方项目)。

## ② 正文全文

<!-- hn-body:start -->
DeepSeek Harness (dsh) is an open-source agent harness from DeepSeek AI. It's still in developer preview, and like a lot of you I started poking at it the day it landed: `npx @deepseek-ai/dsh web` brings up a Web UI on http://127.0.0.1:3080, with subagents, workflow orchestration, long-term goals, Skills, sandbox permissions, and background tasks under the hood. What I kept missing was a practical, task-first guide — something that goes from "installed" to "working setup" through real jobs rather than feature tours.

So a few of us in the community turned our notes and run logs into the DSH 实战蓝皮书 (the DSH bluebook): a static docs site on GitHub Pages, 19 pages today. Seven chapters have full walkthroughs — install & launch, configuring models, your first task, sandbox & permissions, bash, file read/write, and the everything-is-a-plugin architecture (built on Cordis). Six pages are reproducible community cases: repository audit, file organization, parallel research with subagents, long-term goals, documentation rewrite, and a weekly inspection routine. A reading guide maps a route by role — complete newcomer, self-hoster, power user — and since the plan is 4 volumes / 24 chapters, most chapters are still open for community authors.

Who it's for: people who want to run dsh themselves and learn from real cases instead of API docs, and Chinese-speaking readers in particular — the book is written in Chinese (the commands and configs are language-agnostic, so the cases are followable regardless).

Honest caveats, because I hate hype: dsh is a developer preview, expect rough edges; and this is a community project, not affiliated with DeepSeek. The book states both explicitly. No invented benchmarks — it's task logs, not marketing.

Site: https://lishengbo1989-tech.github.io/harness-bluebook/
Report issues / contribute via the official repo: https://github.com/deepseek-ai/DeepSeek-Harness
<!-- hn-body:end -->

## ③ 配图建议
- HN 帖子本身不渲染图片;链接预览缩略图来自站点 og 图。建议确认站点有 og:image(首页截图),没有就在站点仓库里补一张。
- 正文/首条评论里可放 1–2 张截图链接(案例集页面、dsh Web UI 运行某个案例),但保持克制,别让帖子变图集。
- 用 GitHub 仓库内的图片直链即可,不要依赖需登录的图床。

## ④ 标题风格与关键词建议(HN 无标签系统)
- 标题风格:"Show HN:" + 事实陈述;括号数字最稳(`(19 pages)` / `(7 chapters, 6 cases)`)。
- 关键词(标题与正文自然出现):DeepSeek / dsh / agent harness / open source / self-hosted / sandbox / GitHub Pages。
- 避坑:不用 "We are excited to announce…";不夸大(明确 developer preview 与社区项目身份);标题里不出现团队或公司名。

## ⑤ 评论区互动建议
- 首条评论(发布后立即用同一账号回复):

> Contributor here — happy to answer questions about the setup walkthroughs or any of the six cases. Feedback we'd genuinely find useful: (1) whether an English version of the book is worth starting, (2) which chapter or case you'd want next (roadmap is 24 chapters; 7 are written), (3) anything that's wrong or outdated — we'll fix it in the repo rather than argue. No benchmarks in the book by design; it's run logs, not marketing.

- 互动纪律:前 1–2 小时尽量逐条回复;答技术问题直接给命令/路径;被指出错误时先更新仓库再回帖致谢;不主动要 upvote、不谈论投票、不把同帖发第二遍。
- 引导讨论的提问:How do you sandbox agent tools in your current setup? / Which case would you like written up next — or which task would you contribute yourself?

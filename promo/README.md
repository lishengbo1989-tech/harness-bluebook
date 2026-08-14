# DSH 蓝皮书 · 推广执行计划

> 基调:社区开源项目,走「开源共创 + 学习路线」软推广;不夸大、不刷量、尊重各平台规则。

## 1. 渠道分工与优先级

| 优先级 | 渠道 | 稿件 | 你需要准备的账号 | 发布动作 |
| --- | --- | --- | --- | --- |
| P0 | GitHub Discussions / DSH 官方社区 | 用仓库 README + 案例页 | GitHub 账号 | 在 https://github.com/deepseek-ai/deepseek-harness/discussions 发「社区蓝皮书」帖 |
| P0 | 掘金 | `promo/juejin.md` | 掘金账号 | 复制正文 → 发布 → 打标签 |
| P1 | 知乎 | `promo/zhihu.md` | 知乎账号 | 发布回答/文章 |
| P1 | 公众号 | `promo/wechat.md` | 公众号后台 | 图文发布 |
| P1 | CSDN | `promo/csdn.md` | CSDN 账号 | 发布 + 引导收藏 |
| P2 | Reddit | `promo/reddit.md` | Reddit 账号 | 先参与社区讨论,再按 10% 规则发帖 |
| P2 | Hacker News | `promo/hackernews.md` | HN 账号 | 按 Show HN 规范发布 |
| P2 | Google 收录 | — | Google 账号 | Search Console 提交 sitemap(见下) |

## 2. 发布节奏(建议)

- **第 1 天**:GitHub Discussions 首发(最自然,零门槛)→ 掘金同步。
- **第 2-3 天**:知乎 + CSDN(间隔一天,内容差异化已由稿件保证)。
- **第 4 天**:公众号图文(可整合掘金+知乎精华)。
- **第 5-7 天**:Reddit / HN(英文稿,注意 subreddit 规范)。
- **长期**:每新增 1 章/1 案例,更新「最近更新」并挑一个渠道发一条短动态。

## 3. 搜索收录(需 Google 账号,一次配置)

1. 打开 https://search.google.com/search-console → 添加资源(域名或网址前缀 `https://lishengbo1989-tech.github.io/harness-bluebook/`)。
2. 验证(网址前缀方式:上传 HTML 验证文件或 DNS;域名方式需在 DNS 加 TXT——GitHub Pages 域名验证按官方提示做)。
3. 提交 Sitemap:`https://lishengbo1989-tech.github.io/harness-bluebook/sitemap.xml`。
4. Bing 可复用 Google 验证:https://www.bing.com/webmasters (导入)。

## 4. 数据追踪

- 已内置:首页 LIVE 计数器(localStorage 演示)→ 接入真实统计见根 README「数据统计」节。
- 建议接入 [Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/)(免费、无需 Cookie 横幅)。
- 每个渠道的推广文加 `?utm_source=<渠道>` 追踪参数(如 `?utm_source=juejin`),配合统计看来源。

## 5. 物料清单(已就绪)

- `../og/og-image.png` / `.svg` — 分享卡片 1280×720(og:image 已指向 PNG)
- `../sitemap.xml` / `../robots.txt` — 搜索收录
- 各平台稿件:本目录 `juejin.md` `zhihu.md` `wechat.md` `csdn.md` `reddit.md` `hackernews.md`
- 一句话简介(可复用于各渠道简介):
  - 「DSH 蓝皮书:DeepSeek Harness 中文实战指南,从 0 到 100,章节与案例开放共创。」
  - 「An open-source Chinese guide to DeepSeek Harness: from first task to AI team.」

## 6. 待办(需要你操作)

- [ ] 各平台账号就绪后,按第 2 节节奏发布(稿件已备好)
- [ ] Google Search Console 提交 sitemap(第 3 节)
- [ ] GitHub 仓库 Settings:Topics 添加 `deepseek-harness`、`ai-agents`、`docs`、`chinese`;Social preview 上传 `og/og-image.png`
- [ ] 接入真实统计(根 README「数据统计」节)

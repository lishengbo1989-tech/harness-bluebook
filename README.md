# DSH 实战蓝皮书 · DeepSeek Harness Practical Blue Book

> 以真实任务为主线,把 DeepSeek Harness 从 0 到 1 用起来,再从 1 到 100 沉淀为可复用的工作系统。

[![GitHub Pages](https://img.shields.io/badge/在线阅读-lishengbo1989--tech.github.io%2Fharness--bluebook-d8f238?style=flat-square)](https://lishengbo1989-tech.github.io/harness-bluebook/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)
[![章节](https://img.shields.io/badge/章节-24%20(已发布%207)-d8f238?style=flat-square)](https://lishengbo1989-tech.github.io/harness-bluebook/bluebook.html)
[![案例](https://img.shields.io/badge/案例-6-d8f238?style=flat-square)](https://lishengbo1989-tech.github.io/harness-bluebook/cases.html)

一套社区维护的 **DeepSeek Harness(`dsh`)** 中文实践指南。设计参考 WorkBuddy 实战蓝皮书:不从头背功能,先找当前最接近的工作问题,完成一项真实任务,再沿着使用手册、实战案例、进阶系统与团队落地逐步深入。

## 在线阅读

**https://lishengbo1989-tech.github.io/harness-bluebook/**

| 栏目 | 说明 |
| --- | --- |
| [首页](https://lishengbo1989-tech.github.io/harness-bluebook/) | 四段路径、任务分类、任务→团队管线 |
| [阅读指南](https://lishengbo1989-tech.github.io/harness-bluebook/reading-guide.html) | 按角色选路线:新手 / 任务实践者 / 团队负责人 |
| [开始阅读](https://lishengbo1989-tech.github.io/harness-bluebook/bluebook.html) | 4 篇 24 章目录,已发布章节可点击阅读 |
| [案例集](https://lishengbo1989-tech.github.io/harness-bluebook/cases.html) | 6 个完整可复现案例 |
| [帮你解决](https://lishengbo1989-tech.github.io/harness-bluebook/help.html) | 场景问卷,把你的问题变成开源 Case |

## 内容现状

- **蓝皮书**:4 篇 24 章规划;第 2/4/5/6/9/10/18 章已有完整正文(安装启动、配置模型、第一个任务、沙箱与权限、bash、文件读写、一切皆插件),其余章节欢迎认领写作。
- **案例**:仓库审计、文件批量整理、子代理并行调研、长期目标改进项目、README 重写、每周自动化巡检——每个案例含场景/能力/过程/效果/验收标准/可复用资产。
- **特色**:技术 SEO(结构化数据、sitemap)、OG 分享卡片、深色荧光绿设计。

## 本地预览

```sh
cd harness-bluebook
python3 -m http.server 8090
# 打开 http://127.0.0.1:8090
```

## 站点结构

```
harness-bluebook/
├── index.html          首页
├── reading-guide.html  阅读指南
├── bluebook.html       蓝皮书目录
├── cases.html          案例集
├── help.html           帮你解决
├── ch-*.html           章节正文页(7 篇)
├── case-*.html         案例详情页(6 篇)
├── assets/             样式与脚本
├── og/                 分享卡片(SVG+PNG)
├── promo/              各平台推广稿
└── content-spec.md     内容写作规范(事实清单+骨架)
```

## 数据统计

- 首页 LIVE 计数器默认使用 **localStorage 本地演示计数**(UV/PV),首次加载即生效。
- 接入真实统计:推荐 [Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/)(免费、无 Cookie 横幅)或 Umami / Plausible / GA4,把统计脚本放入各页面 `</head>` 前;再在 `assets/main.js` 顶部覆盖 `window.DSH_ANALYTICS_HOOK` 返回真实数字,首页计数器即显示真实值。

## 参与贡献

- 认领章节:按 [`content-spec.md`](content-spec.md) 的事实清单与 HTML 骨架写作,提交 PR。
- 提交案例:场景、能力、过程、效果、验收标准,五个要素齐全即可。
- 提 Issue:发现错误或想补充内容,直接开 Issue。
- 上游项目:[DeepSeek Harness](https://github.com/deepseek-ai/DeepSeek-Harness)(MIT,一切皆插件)。

## 许可

本站为社区学习项目,与 DeepSeek 官方无隶属关系。DeepSeek Harness 本体为 MIT 协议开源。

---

**English**: An open-source, community-maintained Chinese practical guide for [DeepSeek Harness](https://github.com/deepseek-ai/DeepSeek-Harness) — install, first task, sandbox permissions, subagents, workflows, plugins, and team adoption. Read online at the link above. Contributions welcome (chapters and cases).

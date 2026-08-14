# DSH 实战蓝皮书(harness-bluebook)

为 **DeepSeek Harness** 生成的文档网站,设计与结构参考 [workbuddy.homes/reading-guide](https://workbuddy.homes/reading-guide)(WorkBuddy 实战蓝皮书)。

## 站点结构

| 文件 | 说明 |
| --- | --- |
| `index.html` | 首页:hero、数据区、四段路径、任务分类、任务→团队管线、社区 CTA |
| `reading-guide.html` | 阅读指南:新手入门路线 / 按真实任务选教程 / 团队落地路线 / 参与共创 |
| `bluebook.html` | 开始阅读:4 篇 24 章目录(带状态标记与锚点) |
| `cases.html` | 案例集:示例案例 + 投稿流程 |
| `help.html` | 帮你解决:场景问卷 + 处理流程 + 描述建议 |
| `assets/style.css` | 设计系统:深色底 + 荧光绿 `#d8f238`(复刻原站风格) |
| `assets/main.js` | 交互:移动端导航、数字计数、复制问卷 |
| `og/og-image.svg` | 社交分享占位图 |

## 本地预览

```sh
cd harness-bluebook
python3 -m http.server 8090
# 打开 http://127.0.0.1:8090
```

## 内容来源

- [DeepSeek-Harness 官方仓库](https://github.com/deepseek-ai/DeepSeek-Harness)(README / Web UI 指南 / cookbook)
- 蓝皮书章节为社区规划路线,状态标记「已发布 / 编写中 / 规划中」,欢迎认领写作

## 版权说明

本站为社区学习项目,与 DeepSeek 官方无隶属关系;DeepSeek Harness 本体为 MIT 协议开源。

# 2026 夏季番性格测验

> 以 15 道问题，找到属于你的本季命定番。

## 简介

一个 ACG 风格的性格测验网站，通过 15 道题目判断用户的观番偏好，推荐 2026 年夏季番中最适合的作品。

- 8 种结果类型：热血战斗、治愈日常、悬疑烧脑、恋爱物语、奇幻冒险、科幻未来、运动竞技、暗黑深度
- 每个结果包含：主推荐 + 备选推荐 + 避雷提示
- 结果页支持截图保存分享
- 支持简体中文（默认）/ 繁体中文切换

## 技术栈

纯静态站点，零构建步骤：

- HTML / CSS / JS（无框架）
- Google Fonts: Noto Serif TC + Noto Sans TC
- html2canvas (CDN) — 截图导出
- 部署目标: Cloudflare Pages

## 本地开发

```bash
python3 -m http.server 8976
# 访问 http://localhost:8976
```

## 文件结构

```
index.html    — 主页面（首页 / 答题 / 结果三合一 SPA）
style.css     — 全部样式
app.js        — 交互逻辑（答题流程、计分、语言切换、截图）
data.js       — 题库、结果数据、繁简转换映射
images/       — 番剧封面图（待填充）
```

## 内容状态

当前题库和结果使用占位数据，待填入实际 2026 夏季番信息：

- `data.js` 中 `QUIZ_DATA.results` 各项的 `image`、`animeName`、`animeRomaji`、`alt`、`avoid` 均为占位
- `images/` 目录待放入封面图（建议黑白版用于首页轮播装饰）

## 部署

直接推送到 Cloudflare Pages 即可，无需构建命令。

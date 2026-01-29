# Bufan's Blog

> 写想写的 记想记的

基于 Jekyll 和 So Simple 主题构建的个人博客，部署在 GitHub Pages 上。

## ✨ 功能特性

- 📝 **Markdown 写作** - 使用 Markdown 编写文章，简单高效
- 🎨 **简洁主题** - 基于 [So Simple](https://github.com/mmistakes/so-simple-theme) 主题，界面简洁优雅
- 🔍 **全文搜索** - 内置 Lunr.js 全文搜索功能
- 🏷️ **分类标签** - 支持文章分类和标签系统
- 📱 **响应式设计** - 完美适配各种设备
- 🌐 **多语言支持** - 支持中文内容
- 🔗 **SEO 优化** - 集成 jekyll-seo-tag 插件
- 📡 **RSS 订阅** - 支持 Atom Feed
- 🚀 **自动部署** - GitHub Actions 自动构建和部署

## 🛠️ 技术栈

- **静态站点生成器**: [Jekyll](https://jekyllrb.com/)
- **主题**: [So Simple Theme](https://github.com/mmistakes/so-simple-theme)
- **部署平台**: GitHub Pages
- **CI/CD**: GitHub Actions
- **搜索**: Lunr.js
- **字体**: Google Fonts (Source Sans Pro, Lora)

## 📦 本地开发

### 前置要求

- Ruby >= 3.2
- Bundler
- Git

### 安装步骤

1. **克隆仓库**
   ```bash
   git clone https://github.com/plevantem/bufan.blog.git
   cd bufan.blog
   ```

2. **安装依赖**
   ```bash
   bundle install
   ```

3. **启动本地服务器**
   ```bash
   bundle exec jekyll serve
   ```

4. **访问博客**
   
   打开浏览器访问 `http://localhost:4000/bufan.blog`

### 常用命令

```bash
# 启动开发服务器（带实时重载）
bundle exec jekyll serve

# 构建静态站点
bundle exec jekyll build

# 构建并预览
bundle exec jekyll serve --watch
```

## 📝 写作指南

### 创建新文章

在 `_posts` 目录下创建新的 Markdown 文件，文件名格式为：`YYYY-MM-DD-文章标题.md`

### Front Matter 示例

```yaml
---
layout: post
title: "文章标题"
date: 2024-01-01 12:00:00 +0800
categories: 分类名
tags: [标签1, 标签2]
---

文章内容...
<!--more-->  # 摘要分隔符
```

### 图片引用

图片应放在 `assets` 目录下，在文章中使用绝对路径引用：

```markdown
![图片描述](/assets/图片文件名.png)
```

## 🚀 部署

### GitHub Pages 自动部署

项目已配置 GitHub Actions，推送到 `master` 分支后会自动构建并部署到 GitHub Pages。

### 手动部署

如果需要手动部署：

1. 构建站点
   ```bash
   bundle exec jekyll build
   ```

2. 将 `_site` 目录的内容推送到 `gh-pages` 分支

## 📁 项目结构

```
bufan.blog/
├── _config.yml          # Jekyll 配置文件
├── _posts/              # 博客文章目录
├── _drafts/             # 草稿目录
├── _includes/           # 包含文件（HTML 片段）
├── _layouts/            # 布局模板
├── _sass/               # SCSS 样式文件
├── _data/               # 数据文件（YAML）
├── assets/              # 静态资源（图片、JS、CSS）
├── docs/                # 文档目录
├── .github/             # GitHub Actions 配置
├── Gemfile              # Ruby 依赖管理
└── index.md             # 首页
```

## ⚙️ 配置说明

主要配置在 `_config.yml` 文件中：

- `title`: 博客标题
- `description`: 博客描述
- `baseurl`: 站点基础路径
- `url`: 站点 URL
- `locale`: 语言设置
- `remote_theme`: 使用的主题

## 📄 许可证

本项目采用 [MIT License](LICENSE) 许可证。

## 🔗 相关链接

- [博客地址](https://plevantem.github.io/bufan.blog)
- [Jekyll 文档](https://jekyllrb.com/docs/)
- [So Simple 主题](https://github.com/mmistakes/so-simple-theme)

## 📧 联系方式

- Email: 178316470@qq.com

---

**Happy Writing! ✍️**

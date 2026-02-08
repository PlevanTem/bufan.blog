#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
提示词库同步脚本
将 Obsidian 目录的提示词同步到 Jekyll 博客
"""

import os
import re
from pathlib import Path
from datetime import datetime

# 配置路径
OBSIDIAN_PROMPTS_DIR = Path(r"D:\ObsidianLib\Prompt Collection\prompts")
BLOG_POSTS_DIR = Path(r"D:\Projects\bufan-blog\_posts")
BLOG_PROMPTS_DIR = Path(r"D:\Projects\bufan-blog\prompts")

# 分类映射
CATEGORY_MAP = {
    "01-写作创作": "写作创作",
    "02-营销广告": "营销广告",
    "03-学术研究": "学术研究",
    "04-产品设计": "产品设计",
    "05-金融投资": "金融投资",
    "06-图像设计": "图像设计",
    "07-学习成长": "学习成长",
    "08-语言处理": "语言处理",
    "09-创意娱乐": "创意娱乐",
    "10-工具辅助": "工具辅助",
}

def extract_front_matter(content):
    """提取YAML front matter"""
    if not content.startswith("---"):
        return {}, content
    
    parts = content.split("---", 2)
    if len(parts) < 3:
        return {}, content
    
    front_matter_text = parts[1].strip()
    body = parts[2].strip()
    
    front_matter = {}
    for line in front_matter_text.split("\n"):
        if ":" in line:
            key, value = line.split(":", 1)
            key = key.strip()
            value = value.strip().strip('"').strip("'")
            if key == "tags":
                # 处理标签数组
                value = re.findall(r'"([^"]+)"', value) or re.findall(r"'([^']+)'", value)
            front_matter[key] = value
    
    return front_matter, body

def convert_to_jekyll_post(md_file, category_name):
    """将Obsidian格式转换为Jekyll文章格式"""
    content = md_file.read_text(encoding='utf-8')
    front_matter, body = extract_front_matter(content)
    
    # 生成Jekyll front matter
    title = front_matter.get("title", md_file.stem)
    tags = front_matter.get("tags", [])
    scene = front_matter.get("scene", "")
    
    jekyll_front_matter = f"""---
layout: post
title: "{title}"
date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S +0800')}
categories: [AI, Prompts]
tags: {tags}
---

{scene}
<!--more-->

{body}
"""
    
    return jekyll_front_matter

def sync_category(category_dir, category_name):
    """同步一个分类的所有提示词"""
    posts = []
    
    for md_file in category_dir.glob("*.md"):
        if md_file.name == "README.md":
            continue
        
        print(f"处理文件: {md_file.name}")
        
        # 转换为Jekyll格式
        jekyll_content = convert_to_jekyll_post(md_file, category_name)
        
        # 生成文件名
        date_str = datetime.now().strftime('%Y-%m-%d')
        safe_title = re.sub(r'[^\w\s-]', '', category_name).strip()
        filename = f"{date_str}-{safe_title}-{md_file.stem}.md"
        
        # 保存到博客目录
        output_file = BLOG_POSTS_DIR / filename
        output_file.write_text(jekyll_content, encoding='utf-8')
        
        posts.append({
            "title": md_file.stem,
            "file": filename,
            "category": category_name
        })
    
    return posts

def main():
    """主函数"""
    print("开始同步提示词库...")
    
    if not OBSIDIAN_PROMPTS_DIR.exists():
        print(f"错误: Obsidian提示词目录不存在: {OBSIDIAN_PROMPTS_DIR}")
        return
    
    # 确保博客目录存在
    BLOG_POSTS_DIR.mkdir(parents=True, exist_ok=True)
    BLOG_PROMPTS_DIR.mkdir(parents=True, exist_ok=True)
    
    all_posts = []
    
    # 遍历每个分类
    for category_dir in sorted(OBSIDIAN_PROMPTS_DIR.iterdir()):
        if not category_dir.is_dir():
            continue
        
        category_name = CATEGORY_MAP.get(category_dir.name, category_dir.name)
        print(f"\n处理分类: {category_name}")
        
        posts = sync_category(category_dir, category_name)
        all_posts.extend(posts)
    
    print(f"\n同步完成! 共处理 {len(all_posts)} 个提示词文件")

if __name__ == "__main__":
    main()


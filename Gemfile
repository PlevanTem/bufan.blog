# Gemfile - 专为 GitHub Pages 优化
source "https://gems.ruby-china.com"  # 修复：移除末尾空格

# 方案A：使用 github-pages（推荐用于GitHub Pages）
gem "github-pages", group: :jekyll_plugins
gem "tzinfo-data"  # Windows 时间区支持（无害，可保留）

# 方案B：独立 Jekyll（如果需要最新功能）
# gem "jekyll", "~> 4.3"
# gem "jekyll-remote-theme"
# gem "jekyll-feed"
# gem "jekyll-seo-tag"
# gem "tzinfo-data"

# 重要：添加 Linux 平台支持
install_if -> { RUBY_PLATFORM =~ /linux/ } do
  gem "ffi", "~> 1.15"  # 解决 Linux 依赖问题
end
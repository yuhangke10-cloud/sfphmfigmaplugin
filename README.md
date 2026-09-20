# CRRC Sifang PHM 3.0 Design System Manager — Web Demo v0.7.7

GitHub Pages 静态演示包。上传整个文件夹，并将 `index.html` 作为站点入口。

## 展示尺寸

- 插件窗口：1120 × 760 px
- 页面不会将插件放大到浏览器全屏，也不会根据浏览器宽度缩放。
- 浏览器可视区域小于展示尺寸时，由网页产生滚动区域。

## 目录

- `index.html`：密码入口和固定尺寸展示壳
- `assets/css/site.css`：网页壳样式
- `assets/js/site.js`：密码与按需加载逻辑
- `assets/plugin-icon.png`：网页及密码页图标
- `app/plugin-demo.html`：插件 UI 演示本体

## 加载策略

- 密码页只加载轻量 CSS、JavaScript 和图标。
- 插件本体在密码验证成功后才加载，减少首屏等待。
- 无远程字体、框架或第三方 CDN 依赖，可离线运行。
- 导入按钮会直接呼出系统文件选择器；导出 JSON 在支持的浏览器中使用系统“另存为”对话框，并为旧浏览器保留自动下载回退。

> 注意：前端密码只能用于演示入口，不构成服务器级安全保护。公开上传 GitHub 后，熟悉开发工具的访问者仍可能读取前端代码。

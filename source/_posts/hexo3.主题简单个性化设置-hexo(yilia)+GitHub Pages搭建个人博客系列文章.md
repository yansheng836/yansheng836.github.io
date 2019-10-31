---
title: hexo3.主题简单个性化设置-hexo(yilia)+GitHub Pages搭建个人博客系列文章
date: 2019-07-29 16:30:55
tags:
 - hexo
toc: true
declare: true
---

<div style="text-align:center">
<img src="https://s2.ax1x.com/2019/07/29/e8DVS0.th.jpg" width="" height="" title="hexo"></div>

简单介绍一些`yilia`主题的需要或者说可以自定义的内容，该部分内容主要参考`yilia`的制作者`litten`的博客的博客，github网址：<https://github.com/litten/hexo-theme-yilia/blob/master/_config.yml>
可通过 `hexo s` 本地发布，然后通过访问 <http://localhost:4000/> 预览效果，进行个性化设置。

<!-- more -->

## 一、主要信息配置：`Hexo/_config.yml`配置

一般需要设置一下内容

```
site,url,jsonContent(标签不能正常显示的问题)
```

注意：标签不能正常显示的问题

```yml
#标签不能正常显示的问题
jsonContent:
  meta: false
  pages: false
  posts:
    title: true
    date: true
    path: true
    text: false
    raw: false
    content: false
    slug: false
    updated: false
    comments: false
    link: false
    permalink: false
    excerpt: false
    categories: true
    tags: true
```

jsonContent(标签不能正常显示的问题)，该功能需要添加依赖：

```bash
npm i hexo-generator-json-content --save
```

## 二、主题配置`Hexo/themes/yilia/_config.yml`配置

```
menu;subnav;favicon(设置网站图标);avatar(头像);friends(社交)
```

注意：favicon设置网站图标，用自己的图标替换`H:\Hexo\source\assets\img\favicon.ico`，然后修改`H:\Hexo\themes\yilia\_config.yml`里面的图标链接

```yml
#设置网站图标
favicon: /assets/img/favicon.ico
```

图标介绍及制作可参考：<http://www.faviconico.org/>

<font color="red">推荐原因：可以预览图标，就是你制作后图标后，点击预览，它会将当前网页图标设置成你的图标。</font>

> `favicon.ico`一般用于作为缩略的网站标志，它显示在浏览器的地址栏、浏览器标签上或者在收藏夹上，是展示网站个性的缩略logo标志，也可以说是网站头像,目前主要的浏览器都支持favicon.ico图标，如果要让网站看起来更专业、更美、更有个性，favicon.ico是必不可少的，你在本站使用ICO图标转换工具就可以轻松将您的网站图标转换成favicon.ico。

---

hexo(yilia)+GitHub Pages搭建个人博客系列文章：
1.<a href="https://www.yansheng.xyz/2019/07/29/hexo1.博客备份-hexo(yilia)+GitHub Pages搭建个人博客系列文章/">hexo1.博客备份-hexo(yilia)+GitHub Pages搭建个人博客系列文章</a>
2.<a href="https://www.yansheng.xyz/2019/07/29/hexo2.基本框架搭建-hexo(yilia)+GitHub Pages搭建个人博客系列文章">hexo2.基本框架搭建-hexo(yilia)+GitHub Pages搭建个人博客系列文章</a>
3.hexo3.主题简单个性化设置-hexo(yilia)+GitHub Pages搭建个人博客系列文章
4.<a href="https://www.yansheng.xyz/2019/07/29/hexo4.扩展主题的个性化设置-hexo(yilia)+GitHub Pages搭建个人博客系列文章">hexo4.扩展主题的个性化设置-hexo(yilia)+GitHub Pages搭建个人博客系列文章</a>

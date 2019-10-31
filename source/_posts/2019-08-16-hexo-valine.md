---
title: hexo+yilia添加valine评论
date: 2019-08-16 21:52:21
tags:
 - hexo
toc: ture
declare: true
---

# 添加valine评论

![mmDUS0.jpg](https://s2.ax1x.com/2019/08/16/mmDUS0.jpg)

<!--more-->

参考链接

- https://blog.xxwhite.com/2017/Valine.html
- http://anata.me/2018/04/05/hexo%E4%B8%BB%E9%A2%98yilia%E6%B7%BB%E5%8A%A0valine%E8%AF%84%E8%AE%BA%E7%B3%BB%E7%BB%9F/
- yilia主题的github：<https://github.com/litten/hexo-theme-yilia/pull/646>
- valine介绍：<https://valine.js.org/>

------

## 1.注册leancloud

到官网：<https://leancloud.cn>，注册一个账号，然后创建应用，名字可以随意。然后会生成一个应用，有对应的`APP ID`，`APP KEY`，在`设置>应用key`可以查看。

## 2.hexo设置

### 2.1 在博客主题文件中添加评论设置

在`H:\Hexo\themes\yilia\_config.yml`大概在`#5、Gitment`后面添加valine设置，内容如下（注意把里面的`APP ID`，`APP KEY`换成自己应用中的信息）

```yml
#6、Valine https://valine.js.org
valine: 
 appid: 'APP ID'  #Leancloud应用的appId
 appkey: 'APP KEY'  #Leancloud应用的appKey
 verify: false #验证码
 notify: false #评论回复提醒
 avatar: retro #评论列表头像样式：''/mm/identicon/monsterid/wavatar/retro/hide
 #头像类型可见： https://valine.js.org/avatar.html
 placeholder: Just go go #评论框占位符
```

### 2.2 为`article.ejs`添加valine评论

在`H:\Hexo\themes\yilia\layout\_partial\article.ejs`中搜索这行代码`<% if (!index && post.comments){ %>`，在其后面添加代码：(这个代码是有响应式的)

```html
<% if (theme.valine && theme.valine.appid && theme.valine.appkey){ %>
    <section id="comments" class="comments">
      <style>
        .comments{margin:30px;padding:10px;background:#fff}
        @media screen and (max-width:800px){.comments{margin:auto;padding:10px;background:#fff}}
      </style>
      <%- partial('post/valine', {
        key: post.slug,
        title: post.title,
        url: config.url+url_for(post.path)
        }) %>
  </section>
<% } %>
```

### 2.3 新建文件`valine.ejs`

新建文件`H:\Hexo\themes\yilia\layout\_partial\post\valine.ejs`，内容为：

```html
<div id="vcomment" class="comment"></div> 
<script src="//cdn1.lncld.net/static/js/3.0.4/av-min.js"></script>
<script src="//unpkg.com/valine/dist/Valine.min.js"></script>
<script>
   var notify = '<%= theme.valine.notify %>' == true ? true : false;
   var verify = '<%= theme.valine.verify %>' == true ? true : false;
    window.onload = function() {
        new Valine({
            el: '.comment',
            notify: notify,
            verify: verify,
            app_id: "<%= theme.valine.appid %>",
            app_key: "<%= theme.valine.appkey %>",
            placeholder: "<%= theme.valine.placeholder %>",
            avatar:"<%= theme.valine.avatar %>"
        });
    }
</script>
```

## 3.生成发布

```bash
hexo g
hexo s  #本地可以预览效果，或者hexo d 
```

## 4.后台查看数据

`应用>存储>comment`

**注意**：这里还要设置一下web安全域名，位置：`应用>设置>安全中心>Web安全域名`

## 5.升级

### 5.1头像设置

可切换多种头像，请看下面代码：

```yml
avatar: retro #评论列表头像样式：''/mm/identicon/monsterid/wavatar/retro/hide
 #头像类型可见： https://valine.js.org/avatar.html
```

### 5.2验证码

这个比较多争议，官网是说：“由于是`无后端`的评论系统，验证工作也就只能在前端做，体验上可能不会太优雅。

验证码默认是关闭的，如果你觉得太烦人或者太反人类，那就请不要打开。” 

### 5.3邮箱验证

这个我暂时也不知道怎么设置。

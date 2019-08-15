# Hexo+yilia主题实现文章目录和添加视频 

 阅读数: 4195次   

2017-04-17

网址：<http://lawlite.me/2017/04/17/Hexo-yilia%E4%B8%BB%E9%A2%98%E5%AE%9E%E7%8E%B0%E6%96%87%E7%AB%A0%E7%9B%AE%E5%BD%95%E5%92%8C%E6%B7%BB%E5%8A%A0%E8%A7%86%E9%A2%91/>



# 一、说明

- 文章目录功能可以[点击这里查看](http://lawlite.me/2017/04/13/Hexo-Github实现相册功能/)
- 视频页面可以[点击这里查看](http://lawlite.me/photos/videos.html)
- 粗略实现，有问题可以在下方评论区留言，或者[留言板](http://lawlite.me/留言板/)留言

# 二、文章目录功能

## 1、添加CSS样式

- 打开

  ```
  themes\yilia\source
  ```

  下的

  ```
  main.234bc0.css
  ```

  文件，添加如下代码：

  - `css`样式我也放到了`github`上：<https://raw.githubusercontent.com/lawlite19/Blog-Back-Up/master/css/main.234bc0.css>
  - 使用的是别人的`css`，可能有冗余的部分



```
/* 新添加的 */
#container .show-toc-btn,#container .toc-article{display:block}
.toc-article{z-index:100;background:#fff;border:1px solid #ccc;max-width:250px;min-width:150px;max-height:500px;overflow-y:auto;-webkit-box-shadow:5px 5px 2px #ccc;box-shadow:5px 5px 2px #ccc;font-size:12px;padding:10px;position:fixed;right:35px;top:129px}.toc-article .toc-close{font-weight:700;font-size:20px;cursor:pointer;float:right;color:#ccc}.toc-article .toc-close:hover{color:#000}.toc-article .toc{font-size:12px;padding:0;line-height:20px}.toc-article .toc .toc-number{color:#333}.toc-article .toc .toc-text:hover{text-decoration:underline;color:#2a6496}.toc-article li{list-style-type:none}.toc-article .toc-level-1{margin:4px 0}.toc-article .toc-child{}@-moz-keyframes cd-bounce-1{0%{opacity:0;-o-transform:scale(1);-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}60%{opacity:1;-o-transform:scale(1.01);-webkit-transform:scale(1.01);-moz-transform:scale(1.01);-ms-transform:scale(1.01);transform:scale(1.01)}100%{-o-transform:scale(1);-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}}@-webkit-keyframes cd-bounce-1{0%{opacity:0;-o-transform:scale(1);-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}60%{opacity:1;-o-transform:scale(1.01);-webkit-transform:scale(1.01);-moz-transform:scale(1.01);-ms-transform:scale(1.01);transform:scale(1.01)}100%{-o-transform:scale(1);-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}}@-o-keyframes cd-bounce-1{0%{opacity:0;-o-transform:scale(1);-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}60%{opacity:1;-o-transform:scale(1.01);-webkit-transform:scale(1.01);-moz-transform:scale(1.01);-ms-transform:scale(1.01);transform:scale(1.01)}100%{-o-transform:scale(1);-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}}@keyframes cd-bounce-1{0%{opacity:0;-o-transform:scale(1);-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}60%{opacity:1;-o-transform:scale(1.01);-webkit-transform:scale(1.01);-moz-transform:scale(1.01);-ms-transform:scale(1.01);transform:scale(1.01)}100%{-o-transform:scale(1);-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}}.show-toc-btn{display:none;z-index:10;width:30px;min-height:14px;overflow:hidden;padding:4px 6px 8px 5px;border:1px solid #ddd;border-right:none;position:fixed;right:40px;text-align:center;background-color:#f9f9f9}.show-toc-btn .btn-bg{margin-top:2px;display:block;width:16px;height:14px;background:url(http://7xtawy.com1.z0.glb.clouddn.com/show.png) no-repeat;-webkit-background-size:100%;-moz-background-size:100%;background-size:100%}.show-toc-btn .btn-text{color:#999;font-size:12px}.show-toc-btn:hover{cursor:pointer}.show-toc-btn:hover .btn-bg{background-position:0 -16px}.show-toc-btn:hover .btn-text{font-size:12px;color:#ea8010}

.toc-article li ol, .toc-article li ul {
    margin-left: 30px;
}
.toc-article ol, .toc-article ul {
    margin: 10px 0;
}
```

## 2、修改article.ejs文件

- 使用的是`Hexo`的`toc`函数
- 打开`themes\yilia\layout\_partial`文件夹下的`article.ejs`文件
- 在`</header> <% } %>`下面加入如下内容（注意位置）

```
<!-- 目录内容 -->
<% if (!index && post.toc){ %>
    <p class="show-toc-btn" id="show-toc-btn" onclick="showToc();" style="display:none">
          <span class="btn-bg"></span>
          <span class="btn-text">文章导航</span>
          </p>
	<div id="toc-article" class="toc-article">
	    <span id="toc-close" class="toc-close" title="隐藏导航" onclick="showBtn();">×</span>
		<strong class="toc-title">文章目录</strong>
           <%- toc(post.content) %>
         </div>
   <script type="text/javascript">
	function showToc(){
		var toc_article = document.getElementById("toc-article");
		var show_toc_btn = document.getElementById("show-toc-btn");
		toc_article.setAttribute("style","display:block");
		show_toc_btn.setAttribute("style","display:none");
		};
	function showBtn(){
		var toc_article = document.getElementById("toc-article");
		var show_toc_btn = document.getElementById("show-toc-btn");
		toc_article.setAttribute("style","display:none");
		show_toc_btn.setAttribute("style","display:block");
		};
   </script>
      <% } %>		
<!-- 目录内容结束 -->
```

- 然后若想要文章显示目录，在每篇文章开头加入：`toc: true`

## 3、最终效果

### (1) 电脑端

- ![电脑端显示目录](http://lawlite.me/assets/blog_images/hexo+github/15.png)
- ![电脑端关闭目录](http://lawlite.me/assets/blog_images/hexo+github/16.png)

### (2) 手机端

- ![手机端显示目录](http://lawlite.me/assets/blog_images/hexo+github/17.png)
- ![手机端关闭目录](http://lawlite.me/assets/blog_images/hexo+github/18.png)

# 三、添加视频

- 是在之前**相册功能**的基础之上，相册功能的实现[点击这里查看](http://lawlite.me/2017/04/13/Hexo-Github实现相册功能/)

## 1、添加视频样式css

- 打开**当前博客**`source\photos`文件夹下的`ins.css`文件
- 加入如下内容

```
/* ====== video ===== */
.video-container {
z-index: 1;
position: relative;
padding-bottom: 56.25%;
margin: 0 auto;

}
.video-container iframe, .video-container object, .video-container embed {z-index: 1;position: absolute;top: 0;left: 7%;width: 85%;height: 85%;box-shadow: 0px 0px 20px 2px #888888;}
```

## 2、添加视频

- 我这里添加的是**优酷**上面的视频
- 在**当前博客**`source\photos`文件夹下建立`videos.ejs`文件
- 内容如下：

```
---
layout: post
slug: "photos"
title: "相册"
noDate: "true"
comments: "true"
reward: "true"
open_in_new: false
---
<link rel="stylesheet" href="./ins.css">
<div class="photos-btn-wrap">
	<a class="photos-btn" href="/photos">Photos</a>
	<a class="photos-btn active" href="/photos/videos.html">Videos</a>
</div>


<center><h1>指弹_女儿情</h1></center>
<hr/>

<center>
<div class="video-container">
<iframe height="80%" width="80%" src="http://player.youku.com/embed/XMjUzMzY4OTM3Ng==" 
	frameborder=0 allowfullscreen>
</iframe>
</div>
</center>

<hr/>

<center><h1>指弹_友谊地久天长</h1></center>
<hr/>
<center>
<div class="video-container">
<iframe height="80%" width="80%" src="http://player.youku.com/embed/XMjQ5MDExOTY2MA==" 
	frameborder=0 allowfullscreen>
</iframe>
</div>
</center>
<hr/>

<center><h1>指弹_Always with me</h1></center>
<hr/>
<center>
<div class="video-container">
<iframe height="80%" width="80%" src="http://player.youku.com/embed/XMjQ4MDQyNTQ0MA==" 
	frameborder=0 allowfullscreen>
</iframe>
</div>
</center>
```

## 3、最终效果

### (1) 电脑端

- ![电脑端](http://lawlite.me/assets/blog_images/hexo+github/19.png)

### (2) 手机端

- ![手机端](http://lawlite.me/assets/blog_images/hexo+github/20.png)
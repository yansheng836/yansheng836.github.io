# 代码块等样式设置

## 说明

`cqh-i.github.io.css`为博客[https://cqh-i.github.io](https://cqh-i.github.io/)的代码块样式。

`main.0cf68a.css`为我之前的css文件的备份。

## 文中超链接样式

默认：

```css
a {
    background: 0 0;
    text-decoration: none;
    color: #08c;
}
```

修改（添加内容）后：

```css
/* 文章中的超链接,鼠标悬浮特效 */
.article-entry li a:hover, .article-entry p a:hover {
    background: 0 0;
    text-decoration: underline;
    color: #08c;
    /* font-size:18px; */
	font-weight:bold;
	transition:.8s;
}
```

## 行内代码块样式

默认：

```css
.article-entry li code,.article-entry p code {
    padding: 1px 3px;
    margin: 0 3px;
    background: #ddd;
    border: 1px solid #ccc;
    font-family: Menlo,Monaco,Andale Mono,lucida console,Courier New,monospace;
    word-wrap: break-word;
    font-size: 14px
}
```

参考csdn代码块样式：主要是调整颜色为红色

```css
.markdown_views code {
    color: #c7254e;
    background-color: #f9f2f4;
    border-radius: -9px;
}
```

修改后：

```css
/* 行内代码块``的样式，参考csdn的
    color: #c7254e;
    background-color: #f9f2f4;
    border-radius: 2px;
	padding: 2px 4px;
*/
.article-entry li code, .article-entry p code {
	color: #c7254e;
    background-color: #f9f2f4;
	border-radius: 2px;
	padding:2px 4px;
    margin:0 3px;
    /* background:#ddd; */
    /* border:2px solid #ccc; */
    font-family:Menlo, Monaco, Andale Mono, lucida console, Courier New, monospace;
    word-wrap:break-word;
    /* font-size:14px */
}
```

## 代码块主要样式文件

```css
/* 代码块样式之评论：黄色 */
pre .comment {
    color:#ffec8b
}
/* 代码块样式之类的参数、函数的关键字、关键字：蓝色 */
pre .class .params, pre .function .keyword, pre .keyword {
    color:#66d9ef
}
/* 代码块样式之css的属性值、函数名、参数、标签：白色 */
pre .css .value, pre .doctype, pre .function, pre .params, pre .tag {
    color:#fff
	/* color:#66d9ef; */
}
/* 代码块样式之HTML或者xml的头部元素：红色(颜色较浅) */
pre .meta{
    color:#f78da1;
}
/* 代码块样式之HTML的标签：红色 */
pre .tag .name {
    /* color:#dc3958; */
	 color:#ff6481;
}
/* 代码块样式之：色 */
pre .at_rule, pre .at_rule .keyword, pre .css~* .tag, pre .preprocessor, pre .preprocessor .keyword, pre .title {
    color:#fa9400
}
/* 代码块样式之属性、类、函数的title：绿色 */
pre .attr,pre .attribute, pre .built_in, pre .class, pre .css~* .class, pre .function .title {
    color:#a6e22e
}
/* 代码块样式之字符串、属性值：猪肝色 */
pre .string, pre .value {
    color:#e6db74
}
/* 代码块样式之数字：粉红色 */
pre .number {
    color:#ffe4b5
}
pre .css~* .id, pre .id {
    color:#fd971f
}
```

## 左侧边栏的菜单

```css
/* 这个字体不错font-family: STCaiyun,STXingkai; */
.left-col #header .header-menu {
    font-family: STCaiyun,STXingkai;
    line-height: 31px;
    text-transform: uppercase;
    float: none;
    min-height: 150px;
    margin-left: -12px;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
}
```

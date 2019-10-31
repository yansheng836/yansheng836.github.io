---
title: test-codestyle
comments: true
tags:
  - hexo
date: 2019-10-31 11:39:35
toc: ture
declare: true
---

测试代码块、引用块、（文章内）超链接的样式以及高亮问题。

## 高亮说明

经测试，发现有以下几个问题：

1. 引用块里面的代码块样式有问题。
2. 如果语言不支持高亮，默认使用plain（简单的，无格式的）。
3. MySQL等SQL需要统一设置为SQL，不然不高亮。
4. shell脚本使用bash，不然不高亮。
5. cmd命令/Linux命令使用bash，可以部分高亮。
6. markdown代码块不支持高亮。
7. ejs使用HTML进行高亮。

<!--more-->

## 引用块

> ### 引用的三级目录
>
> 这是引用
>
> 下面是引用中的代码块：
>
> ```html
> <!DOCTYPE html>
> <html>
> <head>
> <meta charset="utf-8">
> <title>菜鸟教程(runoob.com)</title>
> </head>
> <body>
>     <h1>我的第一个标题</h1>
>     <p class="p1" style="font-size:20px;">我的第一个段落。</p>
> </body>
> </html>
> ```

## 行内代码块

这是行内代码块：`git clone url`。

## 超链接

超链接样式：

1. `[文字](url)`:[我的博客仓库](https://yansheng836.github.io/)，如果url含有中文，建议加<>，不然可能会被截断，导致连接失效。
2. `<url>`:<https://yansheng836.github.io/>。
3. `url`:https://yansheng836.github.io/，不推荐适用这种，不规范。

## HTML

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>
    <h1>我的第一个标题</h1>
    <p class="p1" style="font-size:20px;">我的第一个段落。</p>
</body>
</html>
```

## XML

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!-- https://mvnrepository.com/artifact/org.projectlombok/lombok -->
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.10</version>
    <scope>provided</scope>
</dependency>
```

## CSS

```css
@charset"utf-8";
.bar2 {
	width:35px;
	height:3px;
	background-color:#333;
	margin:6px 0;
	transition:0.4s;
	opacity:0;
}
```

## JavaScript

```javascript
var hide = false;

function myFunction(x) {
    x.classList.toggle("change");
    if (hide == false) {
        console.log("hide == false");
        hide = true;
    } else {
        $(".left-col").css('display', '')
        hide = false;
    }
}
```

## Json

```json
{
    "sites": [
        {
            "name": "菜鸟教程",
            "url": "www.runoob.com"
        },
        {
            "name": "google",
            "url": "www.google.com"
        },
        {
            "name": "微博",
            "url": "www.weibo.com"
        }
    ]
}
```

## Java

```java
public class HelloWorld {
    public static void main(String[] args) {
         // 单行注释
        System.out.println("Hello World");
    }
}
```

## Python3

```python
#!/usr/bin/python3

class MyClass:
    """一个简单的类实例"""
    i = 12345
    def f(self):
        return 'hello world'
 
# 实例化类
x = MyClass()
 
# 访问类的属性和方法
print("MyClass 类的属性 i 为：", x.i)
print("MyClass 类的方法 f 输出为：", x.f())
```

## SQL

```sql
INSERT INTO table_name
VALUES (value1,value2,value3,...);
```

## MySQL

```mysql
SELECT * from runoob_tbl ORDER BY submission_date ASC;
```
## MySQL-->SQL

```sql
SELECT * from runoob_tbl ORDER BY submission_date ASC;
```

## Shell

```shell
for loop in 1 2 3 4 5
do
    echo "The value is: $loop"
done
```

## Shell-->BASH

```bash
for loop in 1 2 3 4 5
do
    echo "The value is: $loop"
done
```

## Bash/Git

```bash
# cmd
cd dir
mkdir new_dir

# 注释
$ git add *.c
$ git add README
$ git commit -m '初始化项目版本'
```

## C

```c
#include <stdio.h>
 
int main()
{
    /* 我的第一个 C 程序 */
    printf("Hello, World! \n");
    return 0;
}
```

## C++

```c++
#include <iostream>
using namespace std;
int main()
{
    // 注释
    cout << "Hello, world!" << endl;
    return 0;
}
```

## Markdown

```Markdown
这是超链接：<https://github.com/yansheng836/>
下面的是列表：
- 列表
- 列表
```

## EJS

```ejs
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

## EJS-->HTML

```HTML
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

## YML

```YML
#hexo g 会默认将所有md文件转换成（渲染成）HTML文件放到public文件夹中；加上这句话的意思就是告诉hexo的解析器，跳过渲染(skip_render)README.md文件
skip_render: 
 - 'README.md'
```


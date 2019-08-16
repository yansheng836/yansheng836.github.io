# **yansheng836.github.io**

![GitHub repo size](https://img.shields.io/github/repo-size/yansheng836/yansheng836.github.io.svg) ![GitHub last commit](https://img.shields.io/github/last-commit/yansheng836/yansheng836.github.io.svg) ![GitHub language count](https://img.shields.io/github/languages/count/yansheng836/yansheng836.github.io.svg) ![GitHub top language](https://img.shields.io/github/languages/top/yansheng836/yansheng836.github.io.svg) [![MIT license](https://img.shields.io/github/license/yansheng836/yansheng836.github.io.svg)](https://github.com/yansheng836/yansheng836.github.io/blob/master/LICENSE)

我的个人博客。访问地址：[https://www.yansheng.xyz](https://www.yansheng.xyz)。

采用 [Hexo](https://hexo.io/zh-cn/)（[Yilia](https://github.com/litten/hexo-theme-yilia)主题）+ github pages 构建。

---

## master分支说明：
主要用于备份hexo生成的文件静态文件（html），用于发布到github pages。

博客构建过程和备份，可见另一个分支: [blog分支](https://github.com/yansheng836/yansheng836.github.io/tree/blog)。



## 踩坑过程：
### 1. 搭建博客之路：掉坑系列之巨坑篇

我是从2019年7月22日开始搭建的，本以为一两天就能搭建完成的，事实上一天就可以搭建完成。但是为了增加一些个性化设置，我感觉我把自己逼上了绝路……在不知道修改了某个配置文件后，页面崩了，样式表加载不了。因此前端技术一般，所以我压根就找不到问题所占；想按照配置过程一步步回退，但是一下子配置了太多东西也不知道是哪里错了……

出了问题总得解决，难不成下次出错又再搭建一次？以下是我探究解决方案的过程， 我记下这部分内容的原因是：我想留下点啥，记录我的挣扎的过程……，同时也是希望能给遇到同样问题的人一些帮助。	


### 2. 第一次探索：hexo的主要工作流程
然后想着既然hexo是使用git部署到github，那么就是用了版本管理，我想着它应该要起作用了。因此想试下能不能恢复借此之前的正确配置，一番挣扎后，我放弃了，因为这和普通的git还是有一定差别的。

我去研究了下hexo的主要的常用命令：
```shell
hexo clean     #删除缓冲文件(db.json)和(public中的)已生成的静态文件。
hexo generate  #读取配置文件，根据主题配置，将md解析成HTML，将source里的文件转换到public文件夹。
hexo server    #将静态文件部署到本地，预览。
hexo deploy    #清理.deploy_git文件夹，将public复制到.deploy_git，发布到github。

#简写形式为
hexo clean
hexo g
hexo s
hexo d
```
如下图：
![hexo的主要工作流程](https://s2.ax1x.com/2019/07/25/eZNX6S.jpg)


### 3. 第二次探索：hexo中的`.deploy_git`

根据上面的分析，我们可以发现一个问题：这里的`.deploy_git`版本管理其实是单向的，只有push，没有pull（或者fetch+merge）；另一方面我们到`.deploy_git`文件夹打开git命令行，运行`git remote`来查看远程仓库，发现没有远程仓库，但是它确是是能够上传的，说明是被hexo封装了（详情可见`/_config.yml`的Deployment部分内容），而封装就意味着丢失一些东西，就比如高级语言虽然比底层语言好用，但是速度却慢得多。

从hexo的命令来看，我们只是一味的将本地的生成的静态文件推送到远程仓库，而没有将远程仓库拉取到本地，因为”**拉取到本地**“其实这是没有意义的！我认为主要原因有下面二：

（1）由hexo的主要命令我们知道：上传的文件基本是静态页面相关的文件，没有配置文件，每次部署都会自动生成，所以拉取远程仓库根本没有意义。

（2）同样因为上次的是静态文件，也就是说是由hexo将markdown转换而成的HTML，假如我们之前发的博客发现了有错误，想要修改，我们也是修改源文件（md），而不是修改生成的HTML。


### 4. 问题的根本：没有对配置文件和历史博客进行备份

但是这样的设置就容易出现问题：<font color="red">如果配置出错或者是md博客源文件丢失，就找不回了！！！</font>比如：

（1）如果本地修改配置后，出错了就没有办法恢复原来的状态（我就是这样的）。

（2）按照之前我对核心命令的理解：如果重装系统或者两边写博客就会出现问题——md博客源文件丢失，因为clean每次清理public文件夹，也就是每次generate就是重新生成之前你写的所有博客，如果你分开两地写博客（或者重装后），也就意味着你丢失了历史博客，所有只生成你现在更新的博客，发布后也就只有当前更新的博客，而没有历史博客。


### 5. 解决问题：新建分支存放配置文件和博客源文件

造成这个的原因是我们对发布的文件进行了版本控制，但是没有对我们的环境和写作资料（md）进行办版本控制。因为我是新手，一开始研究hexo，我都是搜如何搭建，所以也没有这方面的考虑，出问题后才开始注意，但是这个问题其实是**很致命的**，就想我一样，一失手就只能从头再来！

而官方其实是有提及这个问题的，但是是在很不起眼的地方，而且我一开始也没有仔细看文档，只是简单看了下主要的功能，谁能想到这个问题如此致命！根据官网的文档：[deployment部分](https://hexo.io/zh-cn/docs/deployment#这一切是如何发生的？)

>  当初次新建一个库的时候，库将自动包含一个**master**分支。请在这个分支下进行写作和各种配置来完善您的网页。当执行`hexo deploy`时，Hexo会创建或更新另外一个用于部署的分支，这个分支就是`_config.yml`配置文件中指定的分支。Hexo会将生成的站点文件推送至该分支下，并且**完全覆盖**该分支下的已有内容。因此，<font color="red">部署分支</font>应当不同于<font color="red">写作分支</font>。（一个推荐的方式是把master作为写作分支，另外使用public分支作为部署分支。）
>
>  值得注意的是，`hexo deploy`并不会对本地或远程的写作分支进行任何操作，因此依旧需要手动推送写作分支的所有改动以实现版本控制。此外，如果您的Github Pages需要使用CNAME文件**自定义域名**，请将CNAME文件置于写作分支的`source_dir`目录下，只有这样`hexo deploy`才能将CNAME文件一并推送至部署分支。

很多人都吐槽hexo的官方文档实在是有点简陋，但是有些问题也许可以在[它的github仓库的issues](https://github.com/hexojs/hexo/issues)里面找到答案。

有了方向就好办了，于是乎我就像是和杜甫“剑外忽传收蓟北，初闻涕泪满衣裳。”一样开心，与此同时”出门左转找度娘，出门右转找哥哥“，求得一篇：CSDN博客[Hexo备份与恢复](https://blog.csdn.net/zk673820543/article/details/52698760)，大意和官方文档基本一致：用一个仓库的两个分支分别存放部署分支和写作分支。就比如我的:

> yansheng836.github.io
>
> -- master  部署分支：主要存放生成的静态文件，用于部署到github pages
>
> -- blog    写作分支：主要存放hexo环境配置、博客（md）

这样部署，即使是重装电脑，我们也可以hexo的环境恢复到本地，并且同步之前的博客到本地，这样博客就会有历史了。当然你也可以新建一个仓库存放blog分支，这两种方法二选一，你随意。


## blog分支说明

切换到该分支即可参看相关内容，[切换传送门](https://github.com/yansheng836/yansheng836.github.io/tree/blog)。

计划记录下部署过程，方便恢复。

新建该分支后，可设置该分支为默认分支`Settings-->branches-->Default branch:master设置为blog-->update`，这样以后仓库主页显示就是blog分支，而且拉取（或者克隆）的时候拉取的就是blog分支，而不是原来默认的master分支。

```shell
git clone url
git push
#其实是下面的简写形式
git clone -b master url [<repository-name>]
git push origin master

#设置blog为默认分支后，相当于是这样的：
git clone -b blog url [<repository-name>]
git push origin blog
```


## 致谢

一开始本来是想用next主题的，但是试过后，感觉不太喜欢；然后偶然遇上  [litten](https://github.com/litten) 的 [yilia](https://github.com/litten/hexo-theme-yilia) ，感觉这才是我想要的！虽然一开始出现诸多问题，但是慢慢看issues、找博主博客、百度、Google，一切都慢慢好起来了。


## License 

<div style="text-align:left"><img src="https://img.shields.io/github/license/yansheng836/yansheng836.github.io.svg"/></div>

This software is licensed under the MIT License. 
[View the license](https://github.com/yansheng836/yansheng836.github.io/blob/master/LICENSE)
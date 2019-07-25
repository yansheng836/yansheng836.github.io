# **博客备份**

## 一、blog分支说明

blog分支是用来备份hexo的配置文件和博客源文件(*.md)的。

前期计划简单记录构建过程，尽可能把每一个功能的配置过程记录一下，这样如果以后出现问题也可以进行对应的恢复。（查看时，注意对比每个提交之间的变化）。

后期计划作为存放博客源码的仓库，防止博客丢失，可以实现多机器写博客。

每次写完博客要同时同步到该仓库的不同分支上，以实现真正的同步(备份)。
```shell
#Writing
# 同步到master分支
hexo clean
hexo generate
hexo deploy

# 手动同步到blog分支上
git add. 
git commit -m "提交信息"
git push origin blog #如果设置了blog为默认分支，可以直接git push
```


## 二、hexo+yilia基本框架搭建

搭建基本框架，实现双分支部署。

详见：[hexo+yilia基本框架搭建](./tree/blog/docs/1hexo+yilia基本框架搭建.md)



## 三、主题简单个性化设置

将主题中的个人信息为自己的。

参考：[主题简单个性化设置](./tree/blog/docs/2主题简单个性化设置.md)


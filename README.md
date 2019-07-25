# **博客备份**

### 一、准备工作

1. 安装git。
2. 注册github，新建一个特殊的仓库(username.github.io)。
3. 安装Node.js。



### 二、安装hexo，并初始化

参考官网教程：

<https://hexo.io/zh-cn/index.html>

```linux
npm install hexo-cli -g
hexo init blog
cd blog
npm install
hexo server
```



![eZEIaj.jpg](https://s2.ax1x.com/2019/07/25/eZEIaj.jpg)











### 三、更换主题

1. 默认主题是`landscape`,好像不是很好看，一般都会更换主题。

2. 现在比较流行的有下面几种：

     2.1. next: <https://github.com/iissnan/hexo-theme-next>（已停止更新）或者（新的）

   <https://github.com/theme-next/hexo-theme-next>

   ![eZE5ZQ.jpg](https://s2.ax1x.com/2019/07/25/eZE5ZQ.jpg)

     2.2. yilia: <https://github.com/litten/hexo-theme-yilia>

![eZEhqg.jpg](https://s2.ax1x.com/2019/07/25/eZEhqg.jpg)



3. 我选的是yilia:

   #### 安装

   ```
   $ git clone https://github.com/litten/hexo-theme-yilia.git themes/yilia
   ```

   #### 配置

   修改hexo根目录下的 `_config.yml` ： `theme: yilia`

   <font color="red">注意：部署这类格式的配置时，冒号后面要加英文空格，如果文件中有添加中文注释，统一该文件格式为UTF-8</font>。

   #### 更新

   ```
   cd themes/yilia
   git pull
   ```

   部署：

   ```
   hexo clean
   hexo generate
   hexo server
   ```

   浏览器访问：<http://localhost:4000/>，注意访问期间不能按停止命令`Ctrl+C`,不然会停止服务，页面404。

   

   效果图：

   ![eZEoIs.jpg](https://s2.ax1x.com/2019/07/25/eZEoIs.jpg)
   
   



### 四、将hexo部署到github上面

#### 1. 修改hexo根目录下的 `_config.yml`

```
# 部署到github的仓库
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repository: https://github.com/yansheng836/yansheng836.github.io.git
  branch: master
```



#### 2.修改跟目录下的`.gitignore`

.gitignore的原内容：

```gitignore
.DS_Store
Thumbs.db
db.json
*.log
node_modules/
public/
.deploy*/
```

后面增加：

```
#ignored the useless themes
/themes/landscape/
```



#### 3.部署到github，运行`hexo deploy`

如果出现类似错误：

```
ERROR Deployer not found: git
```

添加git支持：

```
npm install hexo-deployer-git --save
```



为项目添加说明README.md，修改hexo根目录下的 `_config.yml`，

```
#hexo g 会默认将所有md文件转换成（渲染成）HTML文件放到public文件夹中；加上这句话的意思就是
#告诉hexo的解析器，跳过渲染(skip_render)README.md文件
skip_render: 
 - 'README.md'
```



在hexo根目录下新建仓库，用于管理写作分支（之前的部署到github的为部署分支）

```
git init
git remote add origin https://github.com/yansheng836/yansheng836.github.io.git

```

为方便将yilia的主题配置进行同步（其实该主题已经很久没更新了……），直接删除/themes/yilia/下的.git删除。



创建一个分支存放写作内容，方便同步到同一仓库的不同分支，先提交一次，不然会报`fatal: Not a valid object name: 'master'.`

```
git add .
git commit -m "init the blog"
```

创建分支，并同步到github的blog分支

```
git branch blog
git checkout blog
git push origin blog
```



### 五、发布到github pages

设置master分支为主页，则可通过`<https://yansheng836.github.io/>`访问



如果有购买域名，可设置对应域名，或者直接在/source/添加`CNAME`文件(注意：该文件没有后缀)，内容为域名：

```
www.yansheng.xyz
```

成功后在setting中会显示可通过域名访问，而不是原来的路径。



### 六、主题简单个性化设置

将主题中的个人信息为自己的。

参考：[主题简单个性化设置](./blog/docs/主题简单个性化设置.md)


H:\博客备份

### 一、准备工作

1. 安装git。
2. 注册github，新建一个特殊的仓库(username.github.io)。
3. 安装node.js。



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



![1563978429421](C:\Users\yansheng\AppData\Roaming\Typora\typora-user-images\1563978429421.png)



### 三、更换主题

1. 默认主题是`landscape`,好像不是很好看，一般都会更换主题。

2. 现在比较流行的有下面几种：

     2.1. next: <https://github.com/iissnan/hexo-theme-next>（已停止更新）或者（新的）

   <https://github.com/theme-next/hexo-theme-next>

   ![1563986574404](C:\Users\yansheng\AppData\Roaming\Typora\typora-user-images\1563986574404.png)

     2.2. yilia: <https://github.com/litten/hexo-theme-yilia>

![1563986365828](C:\Users\yansheng\AppData\Roaming\Typora\typora-user-images\1563986365828.png)



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

   ![1563987355476](C:\Users\yansheng\AppData\Roaming\Typora\typora-user-images\1563987355476.png)



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






# Hexo+Github实现相册功能 

 阅读数: 8008次   

2017-04-13


网址：<http://lawlite.me/2017/04/13/Hexo-Github%E5%AE%9E%E7%8E%B0%E7%9B%B8%E5%86%8C%E5%8A%9F%E8%83%BD/>


文章导航

- 最终效果请看这里：<http://lawlite.me/photos/>
- 粗略实现，有问题可以在下方评论区评论，或者[留言区](http://lawlite.me/留言板/)留言

## 一、说明

### 1、关于

- 我使用的主题是[hexo-theme-yilia](https://github.com/litten/hexo-theme-yilia)，其中实现相册功能的方案是同步`instagram`上面的图片，但是现在`instagram`被禁，不能使用了

- 下面是通过自己的方式实现了相册功能，其中的

  样式

  还是使用该主题提供的

  ### 2、方案

- 在`github`上**新建一个仓库**，主要用于存储图片，可以通过`url`访问到，也方便管理

- 将要放到相册的图片处理成`json`格式的数据，然后进行访问，这里`json`的格式需要配合要使用的样式，所以需要处理成**特定格式**的`json`数据，下面会给出

- **图片裁剪**，因为相册显示的样式最好是**正方形**的的图片，这里使用脚本处理一下

- **图片压缩**，相册显示的图片是压缩后的图片，提高加载的速度，打开后的图片是原图。



## 二、实现

### 1、github操作

- 建立一个用于存储相册的仓库，我这里建立了名为`Blog-Back-Up`的仓库
  ![enter description here](http://lawlite.me/assets/blog_images/hexo+github/10.png)
- 关于`git`的命令行操作和配置不再给出

### 2、博客操作

- 在**博客**的`source`文件夹下建立一个`photos`文件夹

- 将样式文件放到`photos`文件夹下，样式文件我都放到了`github`上：<https://github.com/lawlite19/Blog-Back-Up/tree/master/blog_photos_copy>

- 修改

  ```
  ins.js
  ```

  文件，主要是里面的

  ```
  render
  ```

  函数

  - 其中的

    ```
    url
    ```

    对应到你的

    ```
    github
    ```

    放图片的地址

    ```
    var render = function render(res) {
      var ulTmpl = "";
      for (var j = 0, len2 = res.list.length; j < len2; j++) {
        var data = res.list[j].arr;
        var liTmpl = "";
        for (var i = 0, len = data.link.length; i < len; i++) {
          var minSrc = 'https://raw.githubusercontent.com/lawlite19/blog-back-up/master/min_photos/' + data.link[i];
          var src = 'https://raw.githubusercontent.com/lawlite19/blog-back-up/master/photos/' + data.link[i];
          var type = data.type[i];
          var target = src + (type === 'video' ? '.mp4' : '.jpg');
          src += '';
    
          liTmpl += '<figure class="thumb" itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject">\
                <a href="' + src + '" itemprop="contentUrl" data-size="1080x1080" data-type="' + type + '" data-target="' + src + '">\
                  <img class="reward-img" data-type="' + type + '" data-src="' + minSrc + '" src="/assets/img/empty.png" itemprop="thumbnail" onload="lzld(this)">\
                </a>\
                <figcaption style="display:none" itemprop="caption description">' + data.text[i] + '</figcaption>\
            </figure>';
        }
        ulTmpl = ulTmpl + '<section class="archives album"><h1 class="year">' + data.year + '年<em>' + data.month + '月</em></h1>\
        <ul class="img-box-ul">' + liTmpl + '</ul>\
        </section>';
      }
    ```

### 3、图片处理

- python脚本文件

  都放在了这里：

  https://github.com/lawlite19/Blog-Back-Up

  #### (1) 裁剪图片

- 去图片的中间部分，裁剪为**正方形**

- 对应的裁剪函数

  ```
  def cut_by_ratio(self):  
      """按照图片长宽进行分割
      
      ------------
      取中间的部分，裁剪成正方形
      """  
      im = Image.open(self.infile)  
      (x, y) = im.size  
      if x > y:  
          region = (int(x/2-y/2), 0, int(x/2+y/2), y)  
          #裁切图片  
          crop_img = im.crop(region)  
          #保存裁切后的图片  
          crop_img.save(self.outfile)             
      elif x < y:  
          region = (0, int(y/2-x/2), x, int(y/2+x/2))
          #裁切图片  
          crop_img = im.crop(region)  
          #保存裁切后的图片  
          crop_img.save(self.outfile)
  ```

#### (2) 压缩图片

- 把图片进行压缩，方便相册的加载

  ```
  def compress(choose, des_dir, src_dir, file_list):
      """压缩算法，img.thumbnail对图片进行压缩，
      
      参数
      -----------
      choose: str
              选择压缩的比例，有4个选项，越大压缩后的图片越小
      """
      if choose == '1':
          scale = SIZE_normal
      if choose == '2':
          scale = SIZE_small
      if choose == '3':
          scale = SIZE_more_small
      if choose == '4':
          scale = SIZE_more_small_small
      for infile in file_list:
          img = Image.open(src_dir+infile)
          # size_of_file = os.path.getsize(infile)
          w, h = img.size
          img.thumbnail((int(w/scale), int(h/scale)))
          img.save(des_dir + infile)
  ```

### 4、github提交

- 处理完成之后需要将处理后的图片提交到`github`上

- 这里同样使用脚本的方式，需要将

  ```
  git
  ```

  命令行配置到环境变量中

  ```
  def git_operation():
      '''
      git 命令行函数，将仓库提交
      
      ----------
      需要安装git命令行工具，并且添加到环境变量中
      '''
      os.system('git add --all')
      os.system('git commit -m "add photos"')
      os.system('git push origin master')
  ```

### 5、json数据处理

- 下面就需要将图片信息处理成`json`数据格式了，这里为重点

- 最终需要的json格式的数据如下图：
  ![json数据格式](http://lawlite.me/assets/blog_images/hexo+github/11.png)

- 这里我采用的方式是读取

  图片的名字

  作为其中的

  text

  的内容，图片的命名如下图

  - 最前面是日期，然后用`_`进行分隔
  - 后面是图片的描述信息，注意不要包含`_`和`.`符号
    ![enter description here](http://lawlite.me/assets/blog_images/hexo+github/12.png)

- 实现代码：

  - 注意代码中`../lawlite19.github.io/source/photos/data.json`是对应到我的博客的路径，这里根据需要改成自己博客的路径

```
def handle_photo():
    '''根据图片的文件名处理成需要的json格式的数据
    
    -----------
    最后将data.json文件存到博客的source/photos文件夹下
    '''
    src_dir, des_dir = "photos/", "min_photos/"
    file_list = list_img_file(src_dir)
    list_info = []
    for i in range(len(file_list)):
        filename = file_list[i]
        date_str, info = filename.split("_")
        info, _ = info.split(".")
        date = datetime.strptime(date_str, "%Y-%m-%d")
        year_month = date_str[0:7]            
        if i == 0:  # 处理第一个文件
            new_dict = {"date": year_month, "arr":{'year': date.year,
                                                                   'month': date.month,
                                                                   'link': [filename],
                                                                   'text': [info],
                                                                   'type': ['image']
                                                                   }
                                        } 
            list_info.append(new_dict)
        elif year_month != list_info[-1]['date']:  # 不是最后的一个日期，就新建一个dict
            new_dict = {"date": year_month, "arr":{'year': date.year,
                                                   'month': date.month,
                                                   'link': [filename],
                                                   'text': [info],
                                                   'type': ['image']
                                                   }
                        }
            list_info.append(new_dict)
        else:  # 同一个日期
            list_info[-1]['arr']['link'].append(filename)
            list_info[-1]['arr']['text'].append(info)
            list_info[-1]['arr']['type'].append('image')
    list_info.reverse()  # 翻转
    final_dict = {"list": list_info}
    with open("../lawlite19.github.io/source/photos/data.json","w") as fp:
        json.dump(final_dict, fp)
```

- 每次图片有改动都需要执行此脚本文件

  ## 三、其他

- 你可以根据需要进行修改`python`脚本代码，这里一些细节可能处理的不好

- 留言板：[http://lawlite.me/%E7%95%99%E8%A8%80%E6%9D%BF/](http://lawlite.me/留言板/)

- 效果展示

  - 相册
    ![enter description here](http://lawlite.me/assets/blog_images/hexo+github/13.png)
  - 留言板
    ![enter description here](http://lawlite.me/assets/blog_images/hexo+github/14.png)
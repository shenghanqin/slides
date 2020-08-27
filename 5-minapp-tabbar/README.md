
### 自定义 TabBar

**默认效果**


* 全局调用

* 常驻页面最底部，占据页面高度 50px，有iPhone x适配

[https://developers.weixin.qq.com/miniprogram/dev/extended/weui/tabbar.html](https://developers.weixin.qq.com/miniprogram/dev/extended/weui/tabbar.html)

（打卡鸭截图）

**自定义-全局**

[https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html)

（写法示例，微信开发者工具）

[https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html)

另外，自定义组件新增`getTabBar`接口，可获取当前页面下的自定义 tabBar 组件实例。

```plain
show() {
  if (typeof this.getTabBar === 'function' &&
    this.getTabBar()) {
    this.getTabBar().setData({
      selected: 1
    })
  }
}
```

* CSS fixed 底部，需要做iPhone x适配
* 需要切换页面后，设置当前高亮的

**每个页面单独调用**


* 每个页面调用
* 可以快速设置



### TabBar 完整动画演示


* 先看设计稿 局部动画，需要自定义tabBar
* 找类似的
    * 爱奇艺app底部动画
    * 京东app底部动画
* 两个动画注意点
    * 页面布局
    * transform 位移和旋转的效果
* 动画示例
    * Menu 动画的示例
    * TabBar 动画示例
#### 抽屉动画演示


* 汉堡包动画变化
* 抽屉式动画
* 页面布局考虑
#### 底部tabBar动画

爱奇艺app底部动画

京东app底部动画

**动画演示1**

css 滤镜 url svg不支持


动画演示2

使用svg来当曲线效果

动画演示3

我这里实现的效果


## 以下内容为草稿，暂时不讲

## 知识点

scroll-view，快速跳转位置等、局部滚动的高度切换


* `scroll-into-view`值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素

![图片](https://uploader.shimo.im/f/RFPi3DNM15KrQZI6.png!thumbnail)

自定义tabBar，三个级别，普通、全局、页面内引用,

![图片](https://uploader.shimo.im/f/FKyPNaN2FsQBmlQ8.png!thumbnail)

`IntersectionObserver`监听元素监听

说明web版本和小程序版本

web版本：图片懒加载组件

小程序版本：Tabs 吸顶，滚动定位等


## 创意动画

### 【放弃，后面看时间】Tabs 选项卡效果

scroll-view介绍页

[https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html](https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html)

`scroll-into-view`值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素

[https://developers.weixin.qq.com/miniprogram/dev/extended/component-plus/tabs.html](https://developers.weixin.qq.com/miniprogram/dev/extended/component-plus/tabs.html)

```xml
<scroll-view scroll-x scroll-into-view="item_1" scroll-with-animation="true">
   <view id="item_2"></view>
</scroll-view>
```
### 【放弃，后面看时间】Swiper 轮播图的当前三项

补充课时播放页当前三个

Web版本：加载当前的三个`SwiperItem`，每次切换后进行更换最新的三个

小程序方案一：与web端类似，并且要及时更改`current`值

效果不理想，current当前位置与当前模块的位置不一定完全一致

小程序方案二： 显示所有的`SwiperItem`，只是隐藏除了当前三个的其他的`SwiperItem`的内部内容

小程序方案三：使用`SwiperItem`的`skip-hidden-item-layout`属性![图片](https://uploader.shimo.im/f/IxxSfsQQ7nXCLMvt.png!thumbnail)![图片](https://uploader.shimo.im/f/rPB1vPkveOtOKpzR.png!thumbnail)

（三合一页面截图）

（小程序播放页截图）



### 【放弃】IntersectionObserver 监听元素监听

#### Web端 BetterImage 组件

图片懒加载

web格式，支持gif的动画

#### 小程序端

吸顶效果

滚动监听

一条线配合滚动



## 菜单动画

svg动画效果

[https://github.com/Tencent/omi/tree/master/packages/cax](https://github.com/Tencent/omi/tree/master/packages/cax)

爱奇艺app 底部动画

京东app底部冻哈

css 果冻动画[https://zhuanlan.zhihu.com/p/142405936](https://zhuanlan.zhihu.com/p/142405936)

135个个菜单特效[https://freefrontend.com/css-menu/](https://freefrontend.com/css-menu/)

动画61个[https://freefrontend.com/css-animation-examples/](https://freefrontend.com/css-animation-examples/)

23个 tabBar动画[https://freefrontend.com/css-tab-bars/](https://freefrontend.com/css-tab-bars/)

底部动画[https://www.behance.net/gallery/79473185/25-Animated-Tab-Bar-Designs-for-Inspiration](https://www.behance.net/gallery/79473185/25-Animated-Tab-Bar-Designs-for-Inspiration)

黏连效果[https://codepen.io/siseer/pen/MBameP](https://codepen.io/siseer/pen/MBameP)

小雪选中的[https://codepen.io/andrejsharapov/pen/jJXEGq](https://codepen.io/andrejsharapov/pen/jJXEGq)

菜单黏连[https://www.leevii.com/2018/09/adhesive-effect.html](https://www.leevii.com/2018/09/adhesive-effect.html)

css 滤镜[https://juejin.im/post/6844903633289478152](https://juejin.im/post/6844903633289478152)

圆形菜单效果1[https://codepen.io/enmckinn/pen/JxOOej](https://codepen.io/enmckinn/pen/JxOOej)

圆形菜单效果2[https://codepen.io/0guzhan/pen/YvNmwJ](https://codepen.io/0guzhan/pen/YvNmwJ)

3[https://codepen.io/suez/pen/vAais/](https://codepen.io/suez/pen/vAais/)

推拉式菜单[https://codepen.io/tylerfowle/pen/vEqXMV](https://codepen.io/tylerfowle/pen/vEqXMV)

模仿案例[https://codepen.io/jh3y/pen/KKwrzOq](https://codepen.io/jh3y/pen/KKwrzOq)，但是 svg滤镜真机不好使

tabBar文章

    - [ ] [https://github.com/ljybill/miniprogram-custom-tab-bar](https://github.com/ljybill/miniprogram-custom-tab-bar)
      - [ ] [https://github.com/tarojsx/ui/blob/master/src/CustomTabBar.tsx](https://github.com/tarojsx/ui/blob/master/src/CustomTabBar.tsx)
      - [ ] [https://www.jianshu.com/p/a3822409622e](https://www.jianshu.com/p/a3822409622e)
      - [ ] [https://my.oschina.net/u/4403673/blog/3345417](https://my.oschina.net/u/4403673/blog/3345417)


## 小程序直播间交互动画优化

6个优化点




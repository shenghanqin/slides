
# 小程序TabBar 创意动画

> 本文有大量 GIF 动画，建议在 Wifi 下阅读。

## 知识点

* TabBar 类型
* CSS 滤镜
* TabBar 创意动画

## 基础知识
### 默认 TarBar

* 全局调用
* 常驻页面最底部，占据页面高度 50px，有 iPhone x 全面屏适配

[Tabbar 官方文档](https://developers.weixin.qq.com/miniprogram/dev/extended/weui/tabbar.html)

下图为小溪里参与维护的 CCtalk 出品的“打卡鸭”小程序。

![](https://image-hosting.xiaoxili.com/img/img/20200827/2128e0fc707ad29046520cf48f9b4881-d86272.jpeg)

### 自定义 TarBar 之全局定义

[自定义 tabBar](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html)可以让开发者更加灵活地设置 tabBar 样式，以满足更多个性化的场景。

在自定义 tabBar 模式下

* 为了保证低版本兼容以及区分哪些页面是 tab 页，tabBar 的相关配置项需完整声明，但这些字段不会作用于自定义 tabBar 的渲染。
* 此时需要开发者提供一个自定义组件来渲染 tabBar，所有 tabBar 的样式都由该自定义组件渲染。推荐用 fixed 在底部的 `cover-view` + `cover-image` 组件渲染样式，以保证 tabBar 层级相对较高。
* 与 tabBar 样式相关的接口，如 `wx.setTabBarItem` 等将失效。
* **每个 tab 页下的自定义 tabBar 组件实例**是不同的，可通过自定义组件下的 `getTabBar` 接口，获取当前页面的自定义 `tabBar` 组件实例。

简单来说：
* 使用 CSS fixed 将 Tabbar 固定到底部，需要做 iPhone x 全面屏适配
* 在切换页面后，设置当前高亮的 `TabItem`

![](https://image-hosting.xiaoxili.com/img/img/20200827/6baa5b8531d8f3575db1991e6996f152-a12be5.png)

**注意：如需实现 tab 选中态，要在当前页面下，通过 `getTabBar` 接口获取组件实例，并调用 `setData` 更新选中态。**

```js
show() {
  if (typeof this.getTabBar === 'function' && this.getTabBar()) {
    this.getTabBar().setData({
      selected: 1
    })
  }
}
```

以下为设置 TabBar 高亮的几篇文章

* [小程序自定义底部导航栏组件](https://github.com/ljybill/miniprogram-custom-tab-bar)
* [Taro 3.x 设置自定义 TabBar](https://github.com/tarojsx/ui/blob/master/src/CustomTabBar.tsx)
* [基于Taro封装微信小程序的tabBar](https://www.jianshu.com/p/a3822409622e)
* [taro中自定义tabbar实现中间图标凸出效果](https://my.oschina.net/u/4403673/blog/3345417)


### 每个页面单独调用

* 每个页面调用
* 可以快速设置

![](https://image-hosting.xiaoxili.com/img/img/20200827/52c79abfa0ec4398d2688472542705ab-4ce5b1.jpeg)

## TabBar 完整动画演示

### 抽屉动画演示

* 汉堡包按钮动画 https://codepen.io/ainalem/pen/YoyZpq
* 气泡动画参考 https://codepen.io/0guzhan/pen/YvNmwJ
* 抽屉式动画
  * https://codepen.io/andrejsharapov/pen/jJXEGq
  * https://codepen.io/tylerfowle/pen/vEqXMV
* 页面布局考虑 - 自定义TabBar

![](https://image-hosting.xiaoxili.com/img/img/20200827/d702c6152b68fb36baa6a1280584294d-7c40f5.png)

### 底部tabBar动画

| 爱奇艺 | 京东 |
| --- | --- |
| 1）气泡动画 <br> 2）粘连动画 | Icon 高亮动画 |
| ![](https://image-hosting.xiaoxili.com/img/img/20200827/c459b7a5871092f9d0ef1432ba529771-24d111.gif) | ![](https://image-hosting.xiaoxili.com/img/img/20200827/88bb1cc5d1a34bb4f4c4a4b1596eef22-c84887.gif) |


#### 动画1——粘连菜单

![](https://image-hosting.xiaoxili.com/img/img/20200827/53298dc2475b8e91e651129addde9586-961a43.gif)

参考示例 https://codepen.io/siseer/pen/MBameP

这个动画基于 CSS filter 滤镜与 SVG 高斯模糊实现，在web端展现ok，但在真机上小程序上不支持。

这篇《[微信小程序 CSS filter（滤镜）的使用示例](https://juejin.im/post/6844903633289478152)》讲了大部分CSS 滤镜效果，但都是基于微信开发者工具的，在真机上只有 `filter(abc.svg#goo)` 的这个不支持。

#### 动画2——SVG 路径
使用 SVG 路径来实现动画。

![](https://image-hosting.xiaoxili.com/img/img/20200827/e43c2e240852bb2dbe2b39c1f466ed53-100a5b.gif)

参考示例：
* 完整效果 https://codepen.io/ainalem/pen/KBvOWV
* 分析文章 https://www.leevii.com/2018/09/adhesive-effect.html
* 简单示例 https://codepen.io/leevare/pen/yxxMMq

###### SVG 路径示意
![](https://image-hosting.xiaoxili.com/img/img/20200827/c0f76a365ced32d8dff2ce3d8d0398e7-67a841.png)

#### 动画3——Hi头像 Tab 页切换动画

![](https://image-hosting.xiaoxili.com/img/img/20200827/0af7415b2f69038ee544568f473d1488-e23fa3.gif)

#### 动画4——Hi头像弹出弹出动画

![](https://image-hosting.xiaoxili.com/img/img/20200827/cec7cea69230ca5df98082d00f79fda3-ec23f5.gif)


* 动画延迟 `transition-delay: 0.1s;`
* 同圆心布局 `transform: rotate(-60deg) translateY(-85px) rotate(60deg);`


```css
.menu-item:nth-child(1) {
    transition-delay: 0.1s;
    transform: rotate(-60deg) translateY(-85px) rotate(60deg);
}
.menu-item:nth-child(2) {
    transition-delay: 0.18s;
    transform: rotate(-20deg) translateY(-85px) rotate(20deg);
}
```

## 参考资料

* 135个 Menu 动画 [https://freefrontend.com/css-menu/](https://freefrontend.com/css-menu/)
* 23个 TabBar 动画 [https://freefrontend.com/css-tab-bars/](https://freefrontend.com/css-tab-bars/)
* 61个 CSS 动画 [https://freefrontend.com/css-animation-examples/](https://freefrontend.com/css-animation-examples/)


# 以下内容为草稿，暂时不讲

---

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




# SVG 动画研究大纲

## 简介 10分钟

svg概念
https://baike.baidu.com/item/SVG/63178

好处

* 矢量图，文件小
* 可变色，多色支持

行业用法

* 矢量图
  * 背景图或图标，如apple官网logo
* SVG Sprite
  * symbol 定义形状，以id命名并使用，`<symbol id="icon-arrow-left" ></symbol>``<use xlink:href="#icon-arrow-left"/>`
  * CC这边业务相对分散，图标尚未集中管理
* SVG 动画，更多可能性 


## 基本形状  要用到5分钟
时间 10分钟

* 线条、折线
* 矩形、圆角矩形
* 圆形、椭圆
* 多边形
* 路径


## CSS 动画
演示基本变换，包含opacity、transform等

使用场景为，平常的伸缩动画，简单的变形动画

* hover 动画 吸顶动画
* 特别说明，网页动画举例 + animate.css
* 搜索推荐位平移动画 分析 height translate3d 调优；intro 展开动画 重复渲染 height
* `animation-timing-function`
* `animation-play-state: paused` 将动画暂停


我想要的是矢量图形，可以随意变色，动画细节更丰富

## svg动画的技巧


* 圆形loading： 跟CSS那样写动画
* 路径动画1：使用svg路径写动画，stokedasharray、stokedashoffset
* 路径动画1.5：起始点，动画细节那么可控
* 路径动画2：相同路径，实现动画巧妙变化，但兼容性不好，`path="M60, 100 L20, 20"`与`css： path d("M60, 100 L20, 20")`
* 路径动画2.5：svg animation smil： svg 初始实现方式；但写法麻烦
* 播放器变形动画，简易版



### 小结
* svg animation smil要被废弃，如`<animateTransform attributeName="transform" type="scale" />`
* svg动画兼容性：在SVG 1.1中,圆的半径是 attribute而不是 CSS property。safari和Firefox支持不够好
* svg矢量图形，css动画，可以操作的属性有store-width,fill, transform，opacity等，但不建议操作半径、路径等

## CC 这边的用法

* 背景图：默认2x图，当设计提出需要搞定时，可以用svg代替；其实图标可以直接用svg
* svg动画：精巧的动画，无需借助第三方动画库即可实现
* SVG Sprite 需要与设计沟通，出一系列的矢量图

## 未来的想法
* svg
* canvas
* js

# 参考资料

## CSS解决方案

* [【css】纯css ICON](https://saeedalipoor.github.io/icono/)

* [纯CSS动画](http://ianlunn.github.io/Hover/)

* [【css】pureCSS](https://css-tricks.com/making-pure-css-playpause-button/)
 
* [查看loading动画样例](https://loading.io/)


## svg概念及行业文章


* [【基础文章】svg路径](https://www.cnblogs.com/MirageFox/p/7526088.html)
* [【概念】超级强大的SVG SMIL animation动画详解](https://www.zhangxinxu.com/wordpress/2014/08/so-powerful-svg-smil-animation/)
* [【行业文章】【CSS trick】牛逼技巧](https://css-tricks.com/guide-svg-animations-smil/)
* [【行业文章】【第1433期】CSS3动画实战之多关键帧实现无限循环动效的时间间隔](https://mp.weixin.qq.com/s/zZv61y9nVnDHiOKDDTwOuw)
* [【行业文章】玩转 SVG 让设计更出彩](https://isux.tencent.com/articles/svg-for-web.html)
* [【效果演示】svg morphing 微动画](https://ue.qzone.qq.com/janilydemo/iconmorph/index.html)


## 【概念】AE 动画研究 转换成 CSS动画

* [Material 动效设计师的 After Effects 秘笈](https://mp.weixin.qq.com/s/5G0bKGsePdOLjeoyY5pvnA)
* [剥茧抽丝做 UI 动效，其实很简单](https://mp.weixin.qq.com/s?__biz=MzAwODY4OTk2Mg==&mid=2652047943&idx=1&sn=56f5f733861aa288ac5bdf4eeaddd988)
* [大杀器Bodymovin和Lottie：把AE动画转换成HTML5/Android/iOS原生动画](https://www.cnblogs.com/zamhown/p/6688369.html)
* [【行业文章】动画：从 AE 到 Web](https://aotu.io/notes/2018/03/06/ae2web/index.html)




## svg实战

* 逐帧动画：从png到svg动画![图片](https://uploader.shimo.im/f/SD5VW8wSlpwIc5YP.png!thumbnail)
  * 坏处
    * 没法快速改颜色
    * 放大会失真
* [【实战】在线画出svg](https://editor.method.ac/)
* [【实战】svg换色，与ICON Font作对比](https://aotu.io/notes/2018/11/23/SVG_vs_Image_vs_iconfont/) ![图片](https://uploader.shimo.im/f/WCvqvYDQGCwfJTVw.png!thumbnail)
* [【实战】计算圆弧的函数-svg-圆形进度条](http://joubn.com/2017/09/26/svg-path-arc/)
* [【参考或者用不到】【js lib】svg动画库](https://www.zcfy.cc/article/11-javascript-animation-libraries-for-2018)
* [【用不到，效果】动画](https://github.com/k2data/svg-react-playground)
* [【用不到，效果】71 CSS Music Players](https://freefrontend.com/css-music-players/)

## 新加入的细节

* [firfox bug](http://www.voidcn.com/article/p-fqzzaajo-bug.html)
* [超级强大的SVG SMIL animation动画详解](https://www.zhangxinxu.com/wordpress/2014/08/so-powerful-svg-smil-animation/)
* [Transforms on SVG Elements](https://css-tricks.com/transforms-on-svg-elements/)
* [safari挂了 transform-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)
* [CSS3中的skew（）属性](https://www.cnblogs.com/mr-yuan/p/* 5899299.html)
* [svg icon 案例](https://useiconic.com/open#icons)
* [svg大小比较](https://github.com/edent/SuperTinyIcons) ![图片](https://uploader.shimo.im/f/ZYg52cogit4iaap9.png!thumbnail)


### 鸣谢
感谢 [reveal.js](https://github.com/hakimel/reveal.js)
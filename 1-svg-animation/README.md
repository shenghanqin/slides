# SVG 动画研究大纲

## 简介 10分钟

好处

** 矢量图，文件小
** 可变色，多色支持

行业用法

* 矢量图
  * 背景图
  * 图标
* SVG Sprite
  * symbol 定义形状，以id命名，`<symbol id="icon-arrow-left" viewBox="0 0 1024 1024"></symbol>`
  * `<use xlink:href="#icon-arrow-left"/>`
  * CC这边业务相对分散，图标尚未集中管理
* SVG 动画，更多可能性 


## 基本形状
时间 10分钟

线条

矩形


圆形、椭圆

多边形

路径 要用到5分钟


## CSS 动画
演示基本变换

使用场景为，平常的伸缩动画，简单的变形动画

我想要的是矢量图形，可以随意变色，动画细节更丰富

* hover 动画 吸顶动画
* 特别说明，网页动画举例 + animate.css
* 搜索推荐位平移动画 分析 height translate3d 调优；intro 展开动画 重复渲染 height
* `animation-timing-function`
* `animation-timing-？？？` 暂停


## svg动画的技巧


圆形loading： 跟CSS那样写动画

路径动画1：使用svg路径写动画，stokedasharray、stokedashoffset
路径动画1.5：起始点，动画细节那么可控

路径动画2：相同路径，实现动画巧妙变化，但兼容性不好
路径动画2.5：svg animation smil： svg 初始实现方式；但写法麻烦
path="M60, 100 L20, 20"

css
path d("M60, 100 L20, 20")

snap.svg或第三方库， path 





* svg animation smil要被废弃
* svg动画兼容性：在SVG 1.1中,圆的半径是 attribute而不是 CSS property。safari和Firefox支持不够好
* svg矢量图形，css动画，可以操作的属性有store-width,fill, transform，opacity等，但不建议操作半径、路径等

变形动画：播放器动画思考



## CC这边的用法

* 背景图：默认2x图，当设计提出需要搞定时，可以用svg代替；其实图标可以直接用svg
* svg动画：精巧的动画，无需借助第三方动画库即可实现
* SVG Sprite 需要与设计沟通，出一系列的矢量图

感谢 [reveal.js](https://github.com/hakimel/reveal.js)


svg
canvas
js
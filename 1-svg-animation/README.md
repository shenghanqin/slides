# SVG 动画研究大纲

## 概念

好处
矢量图
文件小
可变色，多色支持

行业用法

* 背景图、雪碧图、涂色、动画


SVG Sprite


## 基本形状
时间 10分钟

线条

正方形


圆形、椭圆

多边形

路径


## CSS 动画
演示基本变换

使用场景为，平常的伸缩动画，简单的变形动画

我想要的是矢量图形，可以随意变色，动画细节更丰富

## svg动画的技巧




圆形loading： 跟CSS那样写动画

路径动画1：使用svg路径写动画，stokedasharray、stokedashoffset
路径动画1.5：起始点，动画细节那么可控

路径动画2：相同路径，实现动画巧妙变化，但兼容性不好
路径动画2.5：svg animation smil： svg 初始实现方式；但写法麻烦

* svg animation smil要被废弃
* svg动画兼容性：在SVG 1.1中,圆的半径是 attribute而不是 CSS property。safari和Firefox支持不够好
* svg矢量图形，css动画，可以操作的属性有store-width,fill, transform，opacity等，但不建议操作半径、路径等

变形动画：播放器动画思考





## CC这边的用法

背景图：默认2x图，当设计提出需要搞定时，可以用svg代替；其实图标可以直接用svg
svg动画：精巧的动画，无需借助第三方动画库即可实现



感谢 [reveal.js](https://github.com/hakimel/reveal.js)
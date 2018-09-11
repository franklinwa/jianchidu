# css 权重   256进制

### ！important         Infinity
### 行间样式 style=""     1000
### id                    100
### class | 属性 | 伪类    10
### 标签 | 伪元素           1
### 通配符                  0

css权重|256进制
-|-
！important|Infinity
行间样式 style=""|1000
id|100
class 属性 伪类|10
标签 伪元素 | 1
通配符|0

# 父子选择器  派生选择器

### div span{}
### strong em{}
### div strong em{}

### .wrapper .box{}

# 直接子元素选择器
### div > em{} 

# 并列独特性
### div.demo{}

# 属性选择器
### [class = "content"]

### 权重可以相加...

# 分组选择器
### em, strong, span{}
### em, 
### strong, 
### span{}

# font-weight的四种类型

### lighter normal bold bolder

# font-style属性值

### italic 

# font-family的属性值

### arial 

# font-size  color

# color的属性值

### 英文单词 颜色代码  颜色函数

### 颜色代码 红r 绿g 蓝b

### 颜色函数 rge（255，255，255）

# border 给容器加边框  符合属性

### border:1px solid balck
### border-width
### border-style：solid dotted dashed

### border-left-width
### border-right
### border-top

### border-color
### border-right-color
### border-top-color
### border-bottom-color

### 透明色transparent

# text-align 文本对齐方式
### text-align right left cernter

# css注释的格式

### /*css只有一种块注释*/

# 默认的文字大小是16px

# css的文本的行高度  line-height 

# 文本垂直居中，width = line-height

# 首行缩进 text-indent  1em  2em
### em相对高度
### 文字的行高1.2em

# <del>标签尽量不能使用

# text-decoration 的属性
### line-  , none, underline ,overline,line-through

# cursor属性光标定位值 

### cursor： pointer  copy  move  

# a:hover {}鼠标移入领域之内才触发，叫伪类选择器。

# 总结

## 标签的归类

### 1.行级元素（内联inline） 内容决定元素所占位置，不可以通过css改变宽高
### span strong em a del 

### 2.块级元素（block） 独占一行，可以通过css改变宽高
### div p ul li ol form address 

### 3.行级块元素（inline-block） 内容决定大小，可以改变宽高。
### img

<img src = "fy.jpg">
<img src = "fy.jpg">
<img src = "fy.jpg">
<img src = "fy.jpg">

# margin-left
### 凡是带有inline的元素都有文字特性，就会被分割。


# 网页文件压缩方法 ：字符合并，去空格去回车。

# 框架性开发方式
### 方法一 ：先写div，再写css
### 方法二 ：先定义功能，先写css，再写div，选择功能。反向编程方式。可以重用。

# 盒子模型html每一个元素都是一个盒子模型，盒子模型分四部分。

### 外边距 margin  盒子壁 border  内边距 padding  盒子的内容 width height
### pading 复合值 上 右 下 左  上 左右 下  其性质与margin、border一样。

# position 定位属性
### position：absolute，与left和right配合使用，其中只能出现一个。

### body天生的有一个8px的margin。
*{
    margin:0;
    padding:0;

}

# 层模型
### 1.absolute  可以让元素提升，其他元素就可以占用此位置。脱离原来的位置。
###  相对于最近的有定位的元素的父级进行定位，如果没有就相对于文档定位。
### 2.relative  保留原来位置进行定位。
###  相对于自己原来的位置进行定位。
### 3.fixde 固定定位，结合left top进行定位。页面怎么动都不动。

### 块元素在页面中间居中 position:absolu； left:50%; right:50%.margin 二分之一个块元素的大小。
### z-index 设置在第几层，数量越大越高,离你越近，只适用position属性。

### 要定位：一是参照物：使用relative；二是定位：使用absolu定位。

### 如何做圆环，   width:50px;height:50px;border:10px  solid  red ;border-radius：50%；


# Color Palette

# Block Elements 

1.Height = content
2.Width = 100% of container
3.Elements start on a new line
4.Block elements can wrap other block and inline elements
Block元素可转化为inline元素，通过display属性，inline，inline-block

# Inline Elements

1.Height and width = content
2.Element align left ,in a line
3.Inline element can only nest other inline elements
<p> <span> </span> </p>正取
<p> <div> </div> </p>  错误

Inline 元素可以转化为block元素，通过display属性，block，inline-block

# 隐藏属性 display：none

# block居中 margin：0 auto；

# max-width: 950;
# min-height
# margin: 0 auto;

# clear:both  清除任何左右的float

# overflow 有两个属性 一个是hidden 一个是auto 


# element:nt-child(odd) 该选择符可以将第1、3、5、7、9等奇数元素选择出来。
# element:nt-child(even) 该选择符可以把第2、4、6、8、10等奇数元素选择出来。
# element:nt-child(数字)，该选择符里面可以是数字
# element:nt-child(3n+1)，该选择符里面可以是数字的组合。

# ：first-child :first-of-type

# ：last-child :last-of-type

# :nth-child()   :nth-of-type()

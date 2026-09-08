---
title: "Main color"
source_url: https://miniapp.neuxnet.com/component/uniui/color.html
---
`uni-ui` To avoid differences in visual communication, use a specific set of color palettes to specify colors to provide a consistent look and feel for the products you build.

###  Main color

The main color of `uni-ui` is a calming and relaxing blue.

Primary Color

#2979ff

#94bcff

#d4e4ff

We provide the corresponding color variable name through uni-scss

```
$uni-primary: #2979ff;
$uni-primary-disable:#94bcff;
$uni-primary-light: #d4e4ff;
```

###  Secondary color

Scene colors other than the main color need to be used in different scenes, and different colors represent different scenes, such as: green for success, red for errors, and yellow for warnings.

Success Color

#18bc37

#8cde9b

#d1f2d7

Warning Color

#f3a73f

#f9d39f

#fdedd9

Error Color

#e43d33

#f29e99

#fad8d6

Info Color

#8f939c

#c7c9ce

#e9e9eb

We provide the corresponding color variable name through uni-scss

```
$uni-success: #18bc37;
$uni-success-disable: #8cde9b;
$uni-success-light: #d1f2d7;

$uni-warning: #f3a73f;
$uni-warning-disable: #f9d39f;
$uni-warning-light: #fdedd9;

$uni-error: #e43d33;
$uni-error-disable: #f29e99;
$uni-error-light: #fad8d6;

$uni-info: #8f939c;
$uni-info-disable: #c7c9ce;
$uni-info-light: #e9e9eb;
```

###  Neutral colors

Neutral colors are used for text, background, and border colors. The hierarchy is expressed by using different neutral colors.

Main Color

#3a3a3a

Base Color

#6a6a6a

Secondary Color

#909399

Extra Color

#c7c7c7

We provide the corresponding color variable name through uni-scss

```
$uni-main-color: #3a3a3a; 			// 主要文字
$uni-base-color: #6a6a6a;			// 常规文字
$uni-secondary-color: #909399;		// 次要文字
$uni-extra-color: #c7c7c7;			// 辅助说明
```

###  border color

Mainly used for border, divider color

Border-1 olor

#f0f0f0

Border-2 Color

#ededed

Border-3 Color

#dcdcdc

Border-4 Color

#b9b9b9

We provide the corresponding color variable name through uni-scss

```
$uni-border-1: #f0f0f0;
$uni-border-2: #ededed;
$uni-border-3: #dcdcdc;
$uni-border-4: #b9b9b9;
```

###  Regular color

Common colors, such as black, white, common background colors, etc.

White Color

#ffffff

Black Color

#000000

Transparent Color

transparent

Background Color

#f7f7f7

We provide the corresponding color variable name through uni-scss

```
// regular color
$uni-black: #000000;
$uni-white: #ffffff;
$uni-transparent: rgba($color: #000000, $alpha: 0);
// background color
$uni-bg-color: #f7f7f7;
```

###  Shadow

Shadow-sm Color

Shadow-base Color

Shadow-lg Color

We provide the corresponding color variable name through uni-scss

```
$uni-shadow-sm:0 0 5px rgba($color: #d8d8d8, $alpha: 0.5);
$uni-shadow-base:0 1px 8px 1px rgba($color: #a5a5a5, $alpha: 0.2);
$uni-shadow-lg:0px 1px 10px 2px rgba($color: #a5a4a4, $alpha: 0.5);
```

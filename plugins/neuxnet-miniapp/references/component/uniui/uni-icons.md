---
title: "Uni icons — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-icons.html
---
component name: uni-icons

> Code block: `uIcons`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-icons)

Used to display the icon icon .

##  introduce

###  Basic usage

```
<uni-icons type="contact" size="30"></uni-icons>
```

##  Icon example

**Click to copy icon type**

复制成功 arrow-down

复制成功 arrow-left

复制成功 arrow-right

复制成功 arrow-up

复制成功 down

复制成功 left

复制成功 right

复制成功 up

复制成功 auth

复制成功 auth-filled

复制成功 calendar

复制成功 calendar-filled

复制成功 camera

复制成功 camera-filled

复制成功 cart

复制成功 cart-filled

复制成功 chat

复制成功 chat-filled

复制成功 chatboxes

复制成功 chatboxes-filled

复制成功 chatbubble

复制成功 chatbubble-filled

复制成功 checkbox

复制成功 checkbox-filled

复制成功 circle

复制成功 circle-filled

复制成功 clear

复制成功 close

复制成功 checkmarkempty

复制成功 closeempty

复制成功 cloud-download

复制成功 cloud-download-filled

复制成功 cloud-upload

复制成功 cloud-upload-filled

复制成功 color

复制成功 color-filled

复制成功 contact

复制成功 contact-filled

复制成功 download

复制成功 download-filled

复制成功 email

复制成功 email-filled

复制成功 eye

复制成功 eye-filled

复制成功 eye-slash

复制成功 eye-slash-filled

复制成功 fire

复制成功 fire-filled

复制成功 flag

复制成功 flag-filled

复制成功 folder-add

复制成功 folder-add-filled

复制成功 gear

复制成功 gear-filled

复制成功 gift

复制成功 gift-filled

复制成功 hand-down

复制成功 hand-down-filled

复制成功 hand-up

复制成功 hand-up-filled

复制成功 heart

复制成功 heart-filled

复制成功 help

复制成功 help-filled

复制成功 home

复制成功 home-filled

复制成功 image

复制成功 image-filled

复制成功 images

复制成功 images-filled

复制成功 info

复制成功 info-filled

复制成功 location

复制成功 location-filled

复制成功 locked

复制成功 locked-filled

复制成功 mail-open

复制成功 mail-open-filled

复制成功 map

复制成功 map-filled

复制成功 map-pin

复制成功 map-pin-ellipse

复制成功 medal

复制成功 medal-filled

复制成功 mic

复制成功 mic-filled

复制成功 micoff

复制成功 micoff-filled

复制成功 minus

复制成功 minus-filled

复制成功 more

复制成功 more-filled

复制成功 navigate

复制成功 navigate-filled

复制成功 notification

复制成功 notification-filled

复制成功 paperplane

复制成功 paperplane-filled

复制成功 person

复制成功 person-filled

复制成功 personadd

复制成功 personadd-filled

复制成功 phone

复制成功 phone-filled

复制成功 plus

复制成功 plus-filled

复制成功 redo

复制成功 redo-filled

复制成功 refresh

复制成功 refresh-filled

复制成功 refreshempty

复制成功 reload

复制成功 settings

复制成功 settings-filled

复制成功 shop

复制成功 shop-filled

复制成功 smallcircle

复制成功 smallcircle-filled

复制成功 sound

复制成功 sound-filled

复制成功 staff

复制成功 staff-filled

复制成功 trash

复制成功 trash-filled

复制成功 tune

复制成功 tune-filled

复制成功 undo

复制成功 undo-filled

复制成功 upload

复制成功 upload-filled

复制成功 videocam

复制成功 videocam-filled

复制成功 vip

复制成功 vip-filled

复制成功 wallet

复制成功 wallet-filled

复制成功 back

复制成功 forward

复制成功 bars

复制成功 compose

复制成功 font

复制成功 headphones

复制成功 link

复制成功 list

复制成功 loop

复制成功 paperclip

复制成功 plusempty

复制成功 pulldown

复制成功 weixin

复制成功 weibo

复制成功 pyq

复制成功 qq

复制成功 scan

复制成功 search

复制成功 spinner-cycle

复制成功 star

复制成功 star-filled

复制成功 starhalf

##  API

###  Icons Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| size | Number | 24 | Icon Size |
| type | String | \- | Icon pattern, reference example |
| color | String | \- | icon color |
| customPrefix | String | \- | custom icon |

###  Icons Events

| Event Name | Description | Return Value |
| --- | --- | --- |
| @click | Click Icon to trigger event | \- |

##  custom icon

attention

The nvue page does not support custom icons temporarily. If you want to use it in nvue, please import the font file yourself

`uni-icons` has included icons commonly used in daily development, but due to volume problems, it is impossible to add new icons indefinitely, so `uni-icons` also provides an extension method.

Customize icons using `custom-prefix` and `type` attributes

```
<uni-icons custom-prefix="custom-icon" type="icon-youxi" size="30"></uni-icons>
```

###  Get icon

**All the following instructions are based on [Ali Icon Library](https://www.iconfont.cn/) for expansion, the same is true for other icon libraries, you can easily expand if you understand the principle**

1.  Visit [Ali Icon Library](https://www.iconfont.cn/) , search for icons and add them to the shopping cart: ![Search icon](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/8610a5f2-2562-4ca6-9806-679a500a1d0a.png)
    
2.  Click the shopping cart icon in the upper right corner of the page, and click 'Add to project'. If there is no project, you need to click the icon in the second step in the figure below to add a project directory. If there is an existing project, you can skip the second step and select the project. Click OK:
    

![Add to project](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/2f639b71-a2d3-43a1-bd6b-766134dea8e3.png)

3.  After confirmation, enter the project, click Project Settings , and make some settings for the icon library: ![edit item](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/996ffe2e-4fdd-42d2-bf04-c44c0c978874.png)
    
4.  Fill in the project name and project description according to your own needs. `fontClass` is the prefix of the icon, you need to pass in the component `type` property, `fontFamily` is the icon set name, you need to pass in the component `custom-prefix` property, the font format You can just check `ttf`: ![Set item](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/6992d375-0ec2-4cfb-82eb-6e724a111fd7.png)
    
5.  After clicking Save , you can download the library to the local: ![Download Icon Library](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/acaf25c2-8806-4fa8-b502-d9ac4b8138a6.png)
    
6.  After downloading and decompressing, there are two files that need to be used temporarily: `iconfont.css`, `iconfont.ttf`: ![Unzip](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/8d1b81af-c1f2-494d-b139-2ac6d3ea4ff5.png)
    
7.  Put `iconfont.ttf` and `iconfont.css` in the project root directory `static`.
    
8.  Open `iconfont.css`, modify `@font-face` as follows, pay attention to whether the reference path of the src font file is correct:
    
    ```
    @font-face {
    	font-family: "iconfont"; 
    	src: url('/static/iconfont.ttf') format('truetype');
    }
    
    .iconfont {
      font-family: "iconfont" !important;
      font-size: 16px;
    }
    
    .icon-search:before {
      content: "\e65c";
    }
    ```
    

Through the above operations, now get a customizable icon library,

###  Using custom icons on vue pages

In the `App.vue` in the project root directory, import the above `iconfont.css`, pay attention to the path where you store it, and the external style imported through `@import` needs to be written in the most effective content of the `style` tag. Front

```
<!-- App.vue -->
<style>
@import "@/static/iconfont.css";
</style>
```

Customize icons using `custom-prefix` and `type` attributes

```
<uni-icons custom-prefix="iconfont" type="icon-search" size="30"></uni-icons>
```

Note: Multi-color icons are still not supported because the font is still used in essence.

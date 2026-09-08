---
title: "uni.loadFontFace(Object object)"
source_url: https://miniapp.neuxnet.com/api/ui/font.html
---
###  uni.loadFontFace(Object object)

To dynamically load web fonts, the file address must be the download type.

Notice:

1.  When Chinese fonts are introduced, errors will occur when the size is too large. It is suggested to remove part of Chinese characters to reduce the size, or replace them with images
2.  The WeChat applet only supports web fonts, and the font link must be https. The App supports network or local fonts (local fonts need to use [platform absolute path](http://www.html5plus.org/doc/zh_cn/io.html#plus.io.convertLocalFileSystemURL) ).
3.  The font link of the WeChat applet must be under the same origin, or the cors support has been turned on. The domain name of the WeChat applet is servicewechat.com
4.  The tool prompts Faild to load font can be ignored

**Parameter Description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| global | Boolean | false | No | Whether it takes effect globally? |
| family | String |  | Yes | Defined font name |
| source | String |  | Yes | Address of the font resource. The recommended formats are TTF and WOFF, and WOFF2 will not be compatible with earlier versions of iOS. |
| desc | Object |  | No | Optional font descriptor |
| success | Function |  | No | Callback function for successful interface calling |
| fail | Function |  | No | Callback function for failed interface calling |
| complete | Function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Structure of Object.desc**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| style | String | normal | No | Font style. Options include normal / italic / oblique |
| weight | String | normal | No | Font weight. Options include normal / bold / 100 / 200../ 900 |
| variant | String | normal | No | Set the font display text of small capital letters. Options include normal / small-caps / inherit |

**Code example**

```
uni.loadFontFace({
  family: 'Bitstream Vera Serif Bold',
  source: 'url("https://sungd.github.io/Pacifico.ttf")',
  success() {
	  console.log('success')
  }
})
```

###  uni.upx2px()

Convert rpx unit value to px

```
<script>
	export default {
		data() {
			return {
				boxWidth:""
			}
		},
		onLoad() {
			this.boxWidth = uni.upx2px(600) + 'px';
		}
	}
</script>
```

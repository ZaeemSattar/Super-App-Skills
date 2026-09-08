---
title: "uni-app and uniCloud classification"
source_url: https://miniapp.neuxnet.com/plugin/language.html
---
Plugin support for multiple languages is based on [uni-app internationalization](https://uniapp.dcloud.net.cn/tutorial/i18n.html) and \[HBuilderX plugin internationalization\](https://hx.dcloud.net. cn/ExtensionTutorial/localized) specification, so the multi-language specification of different types of plugins is slightly different.

##  uni-app and uniCloud classification

Refer to [Internationalization Special](https://uniapp.dcloud.net.cn/tutorial/i18n.html) related tutorials

##  HBuilderX Classification

Refer to [HBuilderX Plug-in Internationalization](https://hx.dcloud.net.cn/ExtensionTutorial/localized) specification tutorial, identify according to package.nls.\[language code\].json in the root directory of the plug-in, if the plug-in is in addition to the default language In addition to supporting English and Japanese, the plug-in package needs to include the following files:

```
插件根目录
├── package.json
├── package.nls.en.json
├── package.nls.json
└── package.nls.ja.json
```

The language code must comply with the specification, [click to view more language codes](https://github.com/dcloudio/hbuilderx-language-packs/blob/main/docs/localizations.md)

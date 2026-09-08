---
title: "App privacy android — overview"
source_url: https://miniapp.neuxnet.com/tutorial/app-privacy-android.html
---
> HBuilderX 2.6.3+ version starts to support configuring privacy policy prompt box HBuilderX3.1.10+ version optimizes the template mode strategy to solve the problem of reading the mac address and application list before the application market detects the pop-up privacy policy prompt box HBuilderX3.2.1+ version starts to support the androidPrivacy.json file to configure the privacy policy prompt box, which can also take effect when the real machine is running The link in the content of the privacy policy prompt box of HBuilderX3.2.5+ version supports local html page address `Note: At present, setting the custom mode policy cannot completely avoid the situation of reading device information (such as mac address, application list, etc.) before the privacy prompt box pops up. The main reason is that the custom mode privacy prompt box cannot block the application. The life cycle of some third-party SDKs (such as X5 Webview kernel, UniPush, etc.) will perform initialization operations when the application starts, and the third-party SDKs may read device information. Developers who encounter this problem, please use the template mode to solve it, and we will provide a new custom privacy prompt box style solution in the future.`

**Please use the HBuilderX`3.2.15`\+ version to package, and use the template to configure the privacy pop-up window, otherwise the app market will not be available normally** **The uni applet SDK temporarily does not support uniapp to configure its own privacy pop-up window, the host needs to implement its own privacy pop-up window**

###  Overview

According to the Ministry of Industry and Information Technology's special rectification requirements for APPs that infringe on user rights and interests, applications submitted to the application market must meet the following conditions:

-   When the app starts and runs, a privacy policy agreement should pop up, indicating that the app collects user data Here we will introduce in detail how to configure the pop-up "Privacy Agreement and Policy" prompt box
-   Apps cannot force users to grant permissions, i.e. they cannot "don't give permissions, don't let them use them" If you do not want to apply for "read and write mobile phone storage" and "access device information" permissions when the app starts, please refer to: \[https://ask.dcloud.net.cn/article/36549\](https://ask.dcloud. net.cn/article/36549)

In order to take into account the ease of use and flexibility of the privacy policy prompt box, solve the problem that the system authorization box may pop up before the privacy policy prompt box pops up. The Android platform provides the following privacy policy tips to configure policies:

-   template  
    Use the natively provided privacy policy template prompt box, which pops up on the splash interface when the application starts.
    -   Advantages: It is displayed before the system authorization prompt box, and the user will not enter the application until the user clicks to confirm
    -   Disadvantage: Only the prompt text and link address can be configured, and the style of the prompt box cannot be customized
-   none  
    Do Not Process Privacy Policy Used when not submitting to the app market

###  DCloud Data Collection Instructions

In order to continuously optimize the application and provide statistical report functions, data such as application startup time and abnormal error logs will be collected during operation, including the unique identification code of the device.

> DCloud has passed the third level of national information security protection, certificate number: 11010813802-20001, to ensure the security of related data DCloud is not a big data company, the data collected is to provide developers with statistical services and continuous product optimization, and does not contain personal privacy information

**Please inform users in the "Privacy Policy" that your app is developed based on DCloud uni-app (5+ App/Wap2App), and add the following reference terms**

`Our product is developed based on DCloud uni-app (5+ App/Wap2App), during the running of the application, you need to collect your device unique identification code (IMEI/android ID/DEVICE_ID/IDFA, SIM card IMSI information, OAID) to provide statistical analysis Service, and improve performance and user experience through application startup data and exception error log analysis, to provide users with better services. For details, please visit "DCloud User Terms of Service". (DCloud user terms of service hyperlink to: https://ask.dcloud.net.cn/protocol.html)`

###  Configuration method

####  HBuilderX3.2.1 and above version configuration

Starting from HBuilderX3.2.1+, the androidPrivacy.json file has been added to configure the privacy policy prompt box, which supports real machine running and viewing effects, and also supports configuring some styles (such as background color, title color, button color, etc.) in androidPrivacy.json. ![](https://native-res.dcloud.net.cn/images/uniapp/privacy/manifest-android.png)

\*\*Notice! Do not add comments to androidPrivacy.json, it will affect the display of the privacy policy prompt box! ! ! \*\*

After checking, the androidPrivacy.json file will be automatically added to the project. You can double-click to open the custom configuration as follows:

```
{
  "version": "1",  
  "prompt": "template",
  "title": "服务协议和隐私政策",
  "message": "　　请你务必审慎阅读、充分理解“服务协议”和“隐私政策”各条款，包括但不限于：为了更好的向你提供服务，我们需要收集你的设备标识、操作日志等信息用于分析、优化应用性能。<br/>　　你可阅读<a href=\"\">《服务协议》</a>和<a href=\"\">《隐私政策》</a>了解详细信息。如果你同意，请点击下面按钮开始接受我们的服务。",
  "buttonAccept": "同意并接受",
  "buttonRefuse": "暂不同意",
  "hrefLoader": "system|default",
  "second": {
    "title": "确认提示",
    "message": "　　进入应用前，你需先同意<a href=\"\">《服务协议》</a>和<a href=\"\">《隐私政策》</a>，否则将退出应用。",
    "buttonAccept": "同意并继续",
    "buttonRefuse": "退出应用"
  },
  "styles": {
    "backgroundColor": "#00FF00",
    "borderRadius":"5px",
    "title": {
      "color": "#ff00ff"
    },
    "buttonAccept": {
      "color": "#ffff00"
    },
    "buttonRefuse": {
      "color": "#00ffff"
    }
  }
}
```

-   version  
    The version number of the privacy policy. If you want to pop up the privacy policy prompt box again after the app is upgraded, you need to set a new version
-   prompt  
    Whether to use the native privacy policy prompt box, the value is "template" to use, "none" to not use
-   title  
    Privacy Policy Toolbox Title Text Content
-   message  
    The text content of the privacy policy prompt box supports rich text type strings and nodes such as a/font/br. Clicking the a link will call the built-in page to open the link address in its href attribute. **Note: Be sure to configure this prompt content, refer to the above example content and modify the "Service Agreement" and "Privacy Policy" link address**
-   buttonAccept  
    The text of the accept button on the template tooltip, the default value is "Agree"
-   buttonRefuse  
    The text of the reject button on the template tooltip, this button is not displayed by default
-   hrefLoader HX 3.4.13 and later added, system uses the system webview to open the privacy protocol link, the default uses the uni-app built-in web component The link address loading method in the privacy policy prompt box. Possible values: system- means to use the system browser to open; default- means to use the built-in webview page of the application to open. The default value is default. **Note: Some testing agencies may think that webview will read private information, then it can be configured as system to solve this problem**
-   second  
    Configure the display content of the second confirmation prompt box. When the value of the message attribute is not empty, a second confirmation prompt box will pop up.
    -   title The title on the second confirmation prompt
    -   message The content on the second confirmation prompt box, supports rich text richtext type strings
    -   buttonAccept the text of the accept button on the second confirmation prompt box
    -   buttonRefuse the text of the reject button on the secondary confirmation prompt
-   styles  
    Configure Privacy Policy Tooltip Style
    -   backgroundColor prompt box background color, #RRGGBB format string
    -   borderRadius The radius of the background corners of the prompt box, in px (logical pixels)
    -   title The title style of the prompt box, under which only the color attribute is supported to configure the text color, the value is #RRGGBB format string
    -   buttonAccept accepts the button style, under which only the color attribute is supported to configure the text color, the value is the #RRGGBB format string
    -   buttonRefuse rejects the button style, under which only the color attribute is supported to configure the text color, the value is #RRGGBB format string
-   disagreeMode  
    Do not agree to the privacy policy mode `HBuilder X 3.3.1 version added support` For specific configuration and instructions, see [https://uniapp.dcloud.io/app-disagreemode](https://uniapp.dcloud.io/app-disagreemode)
    -   support true means to open disagreeMode; false means not to open (the user does not agree to the "Privacy Policy" and exits the application). The default value is false.
    -   loadNativePlugins indicates whether to load uni native plugins in disagreeMode mode, true indicates loading; false indicates not loading (at this time, calling uni.requireNativePlugin to load the plugin extension Module returns undefined, and the extension component Component cannot be used). The default value is true.

The uni-app project can use the uni native plugin to support more custom privacy policy prompt box styles, please refer to: \[https://ext.dcloud.net.cn/plugin?id=5581\](https://ext. dcloud.net.cn/plugin?id=5581)

####  HBuilderX3.2.0 and below configuration method

Open the manifest.json file of the project and switch to the "Source View" item

-   uni-app project Add prompt node under "app-plus" -> "privacy" node
-   5+ App items Add prompt node under "plus" -> "privacy" node

The privacy node data format is as follows:

```
    "privacy": {
      "prompt": "template",  //可取值template、none
      "template": { //prompt取值为template时有效，用于配置模板提示框上显示的内容
      }
    }
```

-   prompt
    -   template  
        Use the native tooltip template to customize the title, content, and text on the button
    -   none Do not pop up the privacy policy prompt
-   template  
    json format, optional, the content displayed on the template prompt box

####  Template tooltip

![](https://native-res.dcloud.net.cn/images/uniapp/privacy/template-android.png)

**This prompt box will be displayed on the Splash page before the application starts, and the user will only enter the application after clicking the agree button**

You can use the following configuration template prompt box content

```
    "privacy": {
      "prompt": "template",
      "template": {
        "title": "服务协议和隐私政策",
        "message": "　　请你务必审慎阅读、充分理解“服务协议”和“隐私政策”各条款，包括但不限于：为了更好的向你提供服务，我们需要收集你的设备标识、操作日志等信息用于分析、优化应用性能。<br/>　　你可阅读<a href=\"\">《服务协议》</a>和<a href=\"\">《隐私政策》</a>了解详细信息。如果你同意，请点击下面按钮开始接受我们的服务。",
        "buttonAccept": "同意",
        "buttonRefuse": "暂不同意",
        "second": {
          "title": "温馨提示",
          "message": "　　进入应用前，你需先同意<a href=\"\">《服务协议》</a>和<a href=\"\">《隐私政策》</a>，否则将退出应用。",
          "buttonAccept": "同意并继续",
          "buttonRefuse": "退出应用",
        } 
      }
    }
```

-   title The title on the template tooltip, the default is "Service Agreement and Privacy Policy"
-   message The content on the template prompt box, the richtext type string, supports nodes such as a/font/br, and clicking the a link will call the built-in page to open the link address in its href attribute.
    -   HBuilderX3.2.5 and below the href attribute of a link only supports network addresses, starting with http: or https:, such as "https://www.dcloud.io/privacy.html"
    -   The href attribute of HBuilder3.2.5 and above a link supports local address, relative to the application root directory, such as "static/privacy.html" **Note: Be sure to configure this prompt content, refer to the above example content and modify the "Service Agreement" and "Privacy Policy" link address**
-   buttonAccept The text of the accept button on the template tooltip, the default value is "Agree", \*\*Note: The accept button is set to "I get it" and it will fail the review when it is listed in some app markets. \*\*
-   buttonRefuse The text of the reject button on the template tooltip, this button is not displayed by default
-   second HBuilderX3.1.12+ version newly supports the second confirmation prompt of the privacy prompt box, which is used to configure the display content of the second confirmation prompt box. When the message attribute value is not empty, the second confirmation prompt box will pop up

-   title The title on the second confirmation prompt
-   message The content on the second confirmation prompt box, supports richtext type strings
-   buttonAccept the text of the accept button on the second confirmation prompt box
-   buttonRefuse the text of the reject button on the secondary confirmation prompt

**Submit cloud package after configuration to take effect**

Provides 5+ APIs to set/get status:

-   Get consent to privacy policy Reference specification: [plus.runtime.isAgreePrivacy](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.isAgreePrivacy) When the application starts, this API is called to check the status, and if the user does not agree, a custom privacy policy prompt box will pop up.

```
  if(!plus.runtime.isAgreePrivacy()){
    //Pop up a custom privacy policy prompt box
  }
```

-   Set to agree to the privacy policy Reference Specification: [plus.runtime.agreePrivacy](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.agreePrivacy) It is used in the custom privacy policy prompt interface. When the user clicks the "Agree" button, this API needs to be called to set the status
-   Set to disagree with privacy policy Reference: [plus.runtime.disagreePrivacy](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.disagreePrivacy) It is used in the custom privacy policy prompt interface. When the user clicks the "Disagree" button, this API needs to be called to set the status.

**Note: Before users agree to the privacy policy, do not call APIs that may pop up the system authorization box, such as location (plus.geolocation), recording (plus.audio.getRecorder), etc.**

####  No tooltip

When the value of the prompt attribute is set to none, it means that the privacy policy prompt box is not displayed. This mode can be used if not submitting to the app market.

###  Offline packaging configuration method

**HBuilderX3.2.1+ version adds androidPrivacy.json configuration privacy policy prompt box, the priority is higher than the native environment configuration, the new version does not need to be configured in the native project**

Configure the privacy provider mode in the AndroidManifest.xml applied in the native project, and add the meta-data node data under the application node, as follows:

```
<application>
<meta-data
            android:name="DCLOUD_PRIVACY_PROMPT"  android:value="template"/>
</application>
```

android:value can be "template", "none".

\*\* When configuring the prompt box using the "template" template, you need to configure the prompt box content as follows\*\* `Configure the default language content in strings.xml in the res/values directory of the native project (this file must be configured in order to be compatible with user settings for clearing different languages). Chinese also needs to create the strings.xml file in the res/values-zh directory and configure the Chinese content.`

###  Template tooltip

Please add the following fields to the strings.xml of the native project to configure the content of the template prompt box.

```
<resources>
    <string name="dcloud_privacy_prompt_title">弹窗标题</string>
    <string name="dcloud_privacy_prompt_accept_button_text">接收按钮文字配置字段（不存在该字段，即使用默认内容“同意”）</string>
    <string name="dcloud_privacy_prompt_refuse_button_text">拒绝按钮文字配置字段（没有该字段或该字段内容为空，拒绝按钮不显示）</string>
    <string name="dcloud_privacy_prompt_message"><Data><![CDATA[弹窗内容，如果内容中有富文本，请将内容放入cdata下，如当前配置]]></Data></string>
</resources>
```

###  Secondary confirmation prompt box

HBuilderX 3.1.12+ version adds support for the second confirmation function of the template privacy prompt box. When the user selects the "Reject" button when clicking the privacy template prompt box, and the dcloud\_second\_privacy\_prompt\_message configuration of the second confirmation prompt box is not empty, a second confirmation prompt box will pop up.

Please add the following fields to the strings.xml of the native project to configure the content of the secondary confirmation prompt box.

```
    <string name="dcloud_second_privacy_prompt_title">二级弹窗标题</string>
    <string name="dcloud_second_privacy_prompt_accept_button_text">接收按钮文字配置字段（不存在该字段，即使用默认内容“确定”）</string>
    <string name="dcloud_second_privacy_prompt_message"><![CDATA[协议内容]]></string>
    <string name="dcloud_second_privacy_prompt_refuse_button_text">拒绝按钮文字配置字段（没有该字段或该字段内容为空，拒绝按钮不显示）</string>
```

###  globalization

> HBuilderX3.2.12+ version androidPrivacy.json supports internationalization

-   uni-app project You can refer to the page.json file internationalization method, see: [uni-app project pages.json internationalization](https://uniapp.dcloud.io/tutorial/i18n.html#nvue)
-   5+ App items The internationalization configuration in the form of uni-app is not supported. You can add Locales to the fields that need internationalization in the androidPrivacy.json file. The example is as follows:

```
{
    "prompt": "template",
    "buttonAccept" : "默认接受按钮文本"
}
```

Add buttonAcceptLocales to handle the internationalized text of buttonAccept, as follows

```
{
    "prompt": "template",
    "buttonAccept" : "默认接受按钮文本",
    "buttonAcceptLocales": {
        "en": "英文接受按钮文本",
        "zh-Hans":"中文简体接受按钮文本",
        "zh-Hant": "中文繁体接受按钮文本"
    }
}
```

###  Matters needing attention in the content of the privacy agreement

It is necessary to inform users in the "Privacy Policy" that your app is developed based on DCloud uni-app (5+ App/Wap2App), and add the following reference terms:

`Our product is developed based on DCloud uni-app (5+ App/Wap2App), during the running of the application, you need to collect your device unique identification code (IMEI/android ID/DEVICE_ID/IDFA, SIM card IMSI information, OAID) to provide statistical analysis Service, and improve performance and user experience through application startup data and exception error log analysis, to provide users with better services.`

In addition, the third-party SDK used needs to be supplemented in the privacy policy, refer to:

####  uni-app integrates third-party SDK by default

Please refer to the document [Privacy compliance clauses for each functional module of the Android platform](https://ask.dcloud.net.cn/article/39484)

####  uni native plugin

If the application uses the uni native plugin, you need to pay attention to the following points:

-   Please check the `Privacy and Permission Statement` in the plugin details page when using the plugin. (What sdk does the plugin use? What user information is obtained? All should be provided by the plugin author and filled in `Privacy, Permission Statement`)
-   Add the third-party SDK information used in the plugin to the user privacy agreement. For example, `Baidu positioning` is integrated. It is necessary to describe the integration of Baidu positioning SDK in the privacy agreement. Obtained xxx user information! Used for xxx.
-   If you find that the plug-in obtains user information but the plug-in details page does not provide a `Privacy and Permission Statement`, please contact the plug-in developer or feedback with us to supervise and supplement.

####  Other

The "Privacy Policy" must be very clear and comprehensive (do not use vague and unclear words that may collect and understand user information) the purpose, method and scope of collecting users' personal information. If the application uses related functions such as "address book" and "SMS", please describe it according to the application business scenario.

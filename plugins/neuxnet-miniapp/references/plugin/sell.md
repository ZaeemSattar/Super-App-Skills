---
title: "Publish paid plugins"
source_url: https://miniapp.neuxnet.com/plugin/sell.html
---
##  Publish paid plugins

The DCloud plug-in market supports setting up paid sales for uniCloud plug-ins and native plug-ins, helping plug-in authors to realize technology; among them:

-   The uniCloud plug-in supports two types of sales: ordinary authorized version and source code authorized version; \[The difference between "source authorized version" and "normal authorized version" of uniCloud paid plug-in\](https://ask.dcloud.net.cn/article /38040);
-   App native plug-ins only support the purchase of the authorized version and do not provide source code;

Other types of plug-ins do not support billing.

When publishing uniCloud plug-ins and native plug-ins, plug-in authors can customize the sales price and form (uniCloud classification), as shown in the following figure:

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/9cc1a4a9-bd08-49c3-8062-1611cadd1054.png)

If no price is set, the default is a free plug-in, which can be downloaded and used by all users;

##  Copyright protection and trial mechanism

Ordinary front-end plug-ins cannot support billing due to their open source code.

The cloud function part of the uniCloud plug-in supports source code protection, and users who have not purchased the source code version cannot obtain the source code. If it is a cloud-integrated plug-in, the js in the front-end part also supports encryption and obfuscation. However, since the front-end js must run on the front-end device, there is still the possibility of being cracked. DCloud cannot promise that this front-end encryption confusion cannot be cracked.

The sales and service space of the uniCloud plugin is bound. Buyers must bind their own service space spaceid when purchasing. Unauthorized service spaces cannot upload encrypted cloud functions.

App native plugins can protect security because the plugin author submits the compiled binary files, and the binary files of the app plugin are not designed to be obtained by three parties alone. (As a result, native packaging does not support native plugins for paid apps that use the plugin marketplace)

The sales of app native plugins are bound to the client appid and package name. Buyers bind their appid and package name when purchasing. Unauthorized appid and package name cannot run native app plugins that require payment.

But DCloud provides a trial mechanism for all sales plugins, allowing buyers to try and pay later. The uniCloud plug-in provides a 7-day trial, and the encrypted cloud function will be automatically destroyed after the trial expires; the app native plug-in only supports the trial on the app’s custom running base, which cannot be installed independently of HBuilder, and each startup will be A test toast message will pop up.

##  View earnings

After the user purchases the plug-in, the plug-in author can view the order flow in [Sales Order List](https://ext.dcloud.net.cn/order?pluginId=0&status=10) :

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/a0da0432-ba93-46ac-a441-5e353c196cc0.png)

The authorized version of uniCloud source code can only be purchased after the user and the plug-in author have signed the contract. The contract signing is done online using `e-signbao`. For the specific process, see \[e-signbao introduction\](https://ask.dcloud.net. cn/article/37878).

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/2debc956-0e3f-4722-8c9c-b73236dd6364.png)

`Tips:` Good plugins and better after-sales will increase the enthusiasm of users to tip!

##  Billing

The DCloud plug-in market publishes the monthly bill of the previous month on the 1st of each month. When the accumulative amount of the bill to be withdrawn reaches more than 100 yuan, it can be withdrawn. If there are multiple bills to be withdrawn, the multiple bills can be combined for withdrawal. Plug-in authors can log in to the plug-in market background and view the [Monthly Bill](https://ext.dcloud.net.cn/manage/payment) :

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/c01c6588-17e8-4ea2-ad76-7ca80dfce79b.png)

DCloud will charge 15% of the bill amount as a service fee, and then pay the remaining amount to the plugin author. For details, please refer to the [Plugin Author Agreement](https://ext.dcloud.net.cn/manage/profile) .

After applying for cash withdrawal, if the account is certified as enterprise certification, the way to provide invoices is based on the original offline mailing and sending emails, and the function of uploading electronic invoices has been added. dcloud.net.cn/manage/payment-detail), the electronic invoice only supports `pdf format`:

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/95d80128-2345-4f6e-87df-05fc8113af00.png)

Since DCloud needs to pay the plug-in author, the plug-in author needs to provide an invoice of the corresponding amount to DCloud. The invoicing information and payment rules are as follows:

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/84fd6647-d614-4425-b660-6297fb7febe5.png)

In order to better serve plug-in authors and help plug-in authors save tax, the plug-in market has introduced `cloud account`, refer to [Cloud Account Introduction](https://ask.dcloud.net.cn/article/37525) .

`Tips:`In order not to affect the income and payment, the plugin author should provide the invoice as soon as possible at the beginning of the month, and improve the [financial information](https://dev.dcloud.net.cn/#/pages/user/finance)

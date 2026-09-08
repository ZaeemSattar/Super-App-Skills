---
title: "Mini App web version debugging"
source_url: https://miniapp.neuxnet.com/tutorial/debug/debug-web-via-chrome.html
---
#  Mini App web version debugging

> Using VSCode, run the Mini App on the browser and debug it through the console.

##  Introduction

-   Debugging requires the chrome browser to be installed locally, because the chrome debug protocol is used
-   Debugging supported file types: `vue` file, `ts` file, `js` file, breakpoints can only be placed in js or ts code, do not add breakpoints to template and style nodes in vue files point.

**Precautions:**

1.  Mini App, in some life cycle methods, add breakpoints, after debug debugging, breakpoints cannot be entered.

##  Enable debugging

In the compiler, for example: VScode, select any Mini App project, run to Chrome. In the upper right corner of the console, click the debug icon (red bug) to enable debugging. As shown below:

![avatar](https://miniapp.neuxnet.com/2024-09-04_10-18-19/assets/img/open-debug.f01e9823.jpg)

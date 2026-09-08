---
title: "Project introduction"
source_url: https://miniapp.neuxnet.com/tutorial/project.html
---
##  Project introduction

It's a Mini App project, which is essentially a Vue project.

##  Directory Structure

A Mini App project contains the following directories and files by default:

```

┌──components           Mini-app component directory that complies with Vu       component standards
│  └─comp-a.vue         Reusable a Component
├─pages                 Directory for storing business page files
│  ├─index
│  │  └─index.vue       index page
│  └─list
│     └─list.vue        list page
├─static                Directory for storing locally referenced static resources of the application, such as images, videos, etc. Note: Static resources can only be stored here
├─uni_modules           Extension API module 
├─main.js               Vue initialization entry file
├─App.vue               Application configuration，used to configure global styles and listeners for the appApplication life cycle
├─manifest.json         Configure the application name、appid、logo、Packaging information such as version, etc.，see details
└─pages.json            Configure page routes, navigation bars, tabs, and other page-related information，see details

```

**Tips**

-   During compilation for the platform, all files under the `static` directory will be fully packaged without compilation. Files outside the `static` directory (such as Vue, JS, CSS, etc.) will only be packaged and compiled if they are referenced.
-   When compiling to platform, the files in the `static` directory will be fully packaged and will not be compiled. Files (vue, js, css, etc.) not in the `static` directory will be packaged and compiled only if they are referenced.
-   `js` files under the `static` directory will not be compiled. If there is `es6` code inside, it will run directly without conversion, leading to errors on mobile devices
-   The `js` file in the `static` directory will not be compiled. If there is `es6` code in it, it will run directly without conversion, and an error will be reported on the mobile device.
-   Do not place `css`、`less/scss` and similar resources in the`static` directory. It is recommended to store these common resources in a custom-built `common` directory.
-   Do not put resources such as `css` and `less/scss` in the `static` directory. It is recommended to put these common resources in the self-built `common` directory.

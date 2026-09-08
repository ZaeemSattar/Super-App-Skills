---
title: "Page component"
source_url: https://miniapp.neuxnet.com/tutorial/page-component.html
---
In traditional vue project development, referencing components requires `import-registration-use` three steps, as follows:

![](https://miniapp.neuxnet.com/2024-09-04_10-18-19/assets/img/page-component1.b929d784.jpg)

Vue 3.x adds the `script setup` feature, which optimizes three steps into two steps, without registration steps, and is more concise:

![](https://miniapp.neuxnet.com/2024-09-04_10-18-19/assets/img/page-component2.ac7c88c2.jpg)

The `easycom` mechanism of `Mini App` further optimizes the reference of components, and developers can just use it without considering import and registration, which is more efficient:

![](https://miniapp.neuxnet.com/2024-09-04_10-18-19/assets/img/page-component3.43d075ca.jpg)

In the Mini App project, the page reference component and the component reference component are the same way (it can be understood as: page is a special component), both support direct reference through `easycom`.

For a detailed introduction to the easycom specification, refer to: [easycom](../collocation/pages.md#easycom)

---
title: "uni-app cli item"
source_url: https://miniapp.neuxnet.com/worktile/auto/uniapp-cli-project.html
---
##  uni-app cli item

> This document only applies to CLI projects.

Create a `cli` project, see [https://uniapp.dcloud.io/quickstart-cli.html](https://uniapp.dcloud.io/quickstart-cli.html)

If it was an HBuilderX project before, copy the files in the HBuilderX project (except the unpackage and node\_modules directories) to the src directory of the vue-cli project. Reinstall npm dependencies in vue-cli project (if npm dependencies were used before)

If you select the `hello uni-app` template when creating a project in the cli, you can see that some test cases are already included in it.

Note: Relevant dependencies cannot be higher than the following versions

```
jest@27.0.4
jest-environment-node@27.5.1

```

Existing `cli` project

1.  Update dependencies `@dcloudio/*` >= `2.0.0-alpha-27920200613002`
2.  Install the dependency package `@dcloudio/uni-automator`

```
npm install @dcloudio/uni-automator --save-dev
```

3.  Add command to package.json script node

The vue2 project is added as follows:

```
"test:h5": "cross-env UNI_PLATFORM=h5 jest -i",
"test:android": "cross-env UNI_PLATFORM=app-plus UNI_OS_NAME=android jest -i",
"test:ios": "cross-env UNI_PLATFORM=app-plus UNI_OS_NAME=ios jest -i",
"test:mp-weixin": "cross-env UNI_PLATFORM=mp-weixin jest -i",
"test:mp-baidu": "cross-env UNI_PLATFORM=mp-baidu jest -i"
```

The vue3 project is added as follows:

```
"test:h5": "cross-env UNI_PLATFORM=h5 jest -i",
"test:android": "cross-env UNI_PLATFORM=app UNI_OS_NAME=android jest -i",
"test:ios": "cross-env UNI_PLATFORM=app UNI_OS_NAME=ios jest -i",
"test:mp-weixin": "cross-env UNI_PLATFORM=mp-weixin jest -i",
"test:mp-baidu": "cross-env UNI_PLATFORM=mp-baidu jest -i"
```

###  H5 platform testing process

1.  Enter the project directory and install dependencies

```
npm install puppeteer@14.0.0 --save-dev
```

Note: Since v3.0.0, `Puppeteer` starts to depend on Node 10.18.1+, `Puppeteer` only supports 14.0.0 and below

2.  Write the test js code according to the API, refer to the test case API documentation see: [https://uniapp.dcloud.io/collocation/auto/api](https://uniapp.dcloud.io/collocation/auto/api) See [jest.config.js](https://miniapp.neuxnet.com/collocation/auto/quick-start#jestconfigjs) for test file directory configuration
    
3.  Run the test
    

```
npm run test:h5
```

4.  Test Results

```
>> cross-env UNI_PLATFORM=h5 jest -i
...
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        14.995s, estimated 16s
```

More configuration reference [jest.config.js](https://miniapp.neuxnet.com/collocation/auto/quick-start#jestconfigjs)

###  App-Android testing process

1.  Configure the global `adb` environment variable
    
2.  Configure the `Hbuilder` debug base/custom base `android_base.apk` directory, refer to [jest.config.js](https://miniapp.neuxnet.com/collocation/auto/quick-start#jestconfigjs)
    
3.  Create `cli` project/existing `cli` project Switch to the project directory and install the dependency package `adbkit`
    

```
npm install adbkit --save-dev
```

4.  Write test code and refer to test cases
    
5.  Run the test
    

```
npm run test:android
```

###  App-iOS testing process

Currently only supports iOS simulator (requires mac to install xcode)

1.  Install dependencies `node-simctl`

```
npm install node-simctl --save-dev
```

2.  Configure the simulator id, refer to [jest.config.js](https://miniapp.neuxnet.com/collocation/auto/quick-start#jestconfigjs)
    
3.  Configure the `Hbuilder` debug base/custom base `Pandora_simulator.app` directory, refer to [jest.config.js](https://miniapp.neuxnet.com/collocation/auto/quick-start#jestconfigjs)
    
4.  Write test code and refer to test cases
    
5.  Run the test
    

```
npm run test:ios
```

###  WeChat Mini Program Test Process

1.  Create cli project, same as H5 platform (Wechat applet appid, manifest.json -> mp-weixin -> appid must be configured)
    
2.  Run the test (if the WeChat Developer Tools cannot open the project successfully, please open it manually)
    

```
npm run test:mp-weixin
```

3.  Test results

```
> cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch "--auto-port" "9520"
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        14.995s, estimated 16s
```

###  Test example

Use the hello uni-app project to test the H5 platform

1.  Create a `cli` project, select `hello uni-app`

```
$ vue create -p dcloudio/uni-preset-vue#alpha my-hello-uni-app
# 进入项目目录
$ cd my-hello-uni-app
```

2.  Install `puppeteer`

```
npm install puppeteer
```

3.  Create a test file `src/pages/tabBar/component/component.test.js`, copy the following code

```
describe('pages/tabBar/component/component.nvue', () => {
    let page
    beforeAll(async () => {
        // ReLaunch to the homepage and get the homepage page object (where program is the global object automatically injected by uni-automator)
        page = await program.reLaunch('/pages/tabBar/component/component')
        await page.waitFor(1000)
    })

    it('u-link', async () => {
        // Detect the text content of the home page u-link
        expect(await (await page.$('.hello-link')).text()).toBe('https://uniapp.dcloud.io/component/')
    })

    it('视图容器', async () => {
        // detect that the first panel is a view container
        expect(await (await page.$('.uni-panel-text')).text()).toBe('视图容器')
        // Detect the first panel switch to expand
        const panelH = await page.$('.uni-panel-h');
        // Cannot do exact match, Baidu applet will generate additional class
        expect(await panelH.attribute('class')).toContain('uni-panel-h')
        await panelH.tap()
        await page.waitFor(500)
        // expanded
        expect(await panelH.attribute('class')).toContain('uni-panel-h-on')
    })

    it('.uni-panel', async () => {
      const lists = await page.$$('.uni-panel')
      expect(lists.length).toBe(9)
    })

    it('.uni-panel action', async () => {
      const listHead = await page.$('.uni-panel-h')
      expect(await listHead.attribute('class')).toContain('uni-panel-h-on')
      await listHead.tap()
      await page.waitFor(200)
      expect(await listHead.attribute('class')).toContain(
        'uni-panel-h',
      )

      // Expand the first panel, click the first item, and verify that the new page opened is correct
      await listHead.tap()
      await page.waitFor(200)
      const item = await page.$('.uni-navigate-item')
      await item.tap()
      await page.waitFor(500)
      expect((await program.currentPage()).path).toBe('pages/component/view/view')
      await page.waitFor(500)

      // Execute navigateBack to verify if it returns
      expect((await program.navigateBack()).path).toBe('pages/tabBar/component/component')
    })
})
```

4.  Run the test

```
npm run test:h5
```

5.  Test Results

```
> cross-env UNI_PLATFORM=h5 jest -i
 PASS  src/pages/tabBar/component/component.test.js (14.789s)
  pages/tabBar/component/component.nvue
    √ u-link (8ms)
    √ 视图容器 (518ms)
    √ .uni-panel (2ms)
    √ .uni-panel action (4447ms)
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        14.995s, estimated 16s
```

####  Screenshot example

```
describe('pages/API/set-navigation-bar-title/set-navigation-bar-title.vue', () => {
    let page
    beforeAll(async () => {
        // ReLaunch to the homepage and get the homepage page object (where program is the global object automatically injected by uni-automator)
        page = await program.reLaunch('/pages/API/set-navigation-bar-title/set-navigation-bar-title')
        await page.waitFor(3000)
    })

    it('.uni-hello-text', async () => {
      var image = await program.screenshot({
        path: "set-navigation-bar-title.png"  // 默认项目根目录
      })
      console.log(image)
    })
})
```

For more test examples see: hello uni-app

GitHub： [https://github.com/dcloudio/hello-uniapp](https://github.com/dcloudio/hello-uniapp)

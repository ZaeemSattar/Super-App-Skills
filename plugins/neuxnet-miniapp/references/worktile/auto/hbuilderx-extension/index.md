---
title: "Automated test plugin"
source_url: https://miniapp.neuxnet.com/worktile/auto/hbuilderx-extension/index.html
---
#  Automated test plugin

##  plugin description

This plugin is used to run uni-app automated tests in HBuilderX, and supports H5, WeChat applet, android, ios automated tests.

The main functions are:

-   Initialize the test environment (create a test configuration file, and install the environment required for testing)
-   Run tests (run all test cases under the project, run a test case)
-   New test case (uni-app pages page, right-click menu \[New test case\])
-   View historical test reports (HBuilderX top run menu)

##  Test Notes

1.  This plugin supports `uni-app common project` and `uniapp-cli project`. For the uniapp-cli project, to run automated tests, you need to install automated test dependencies under the current project.
2.  Windows computers do not support running tests to `ios phone`.
3.  MacOSX computer, only supports running tests to `iOS simulator`, does not support ios real machine, to test iOS simulator, you need to install XCode on the computer.
4.  Run the test to H5, only `chrome` browser is supported, other browsers are not supported.
5.  Run the test to the Android phone, if HBuilderX detects only one android device, `directly` run the test to the currently connected device. When you have `multiple` devices, a pop-up window will ask you to select a phone.
6.  node: When node is not installed on the machine, the test will be run using HBuilderX `built-in node`. On the contrary, if the node is installed on the machine, the node of the machine is used.
7.  To run the test to the WeChat applet, you must configure the WeChat applet appid in manifest.json. If the WeChat Developer Tools cannot open the project successfully, please open it manually for the first time.

##  Plugin installation

[Plugin installation address](https://ext.dcloud.net.cn/plugin?id=5708)

As shown in the figure below, in the plug-in market, enter the \[plug-in details page\] (https://ext.dcloud.net.cn/plugin?id=5708), click \[Import Plug-in\], and the locally installed HBuilderX will be automatically launched.

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/49342aa6-62c8-4b28-8ba7-00f8cff29b9c.jpeg)

> Special Note: Plug-in installation depends on HBuilderX terminal plug-in.

##  Test environment install

**Plugin dependencies:**

-   H5, WeChat, ios, android automated testing depends on `puppeteer`, `adbkit`, `node-simctl`, `jest`, `playwright`. When running the plugin, if this dependency is not installed, a pop-up window will be installed automatically.
-   `Note`: This plug-in version 0.0.3 and below, node: When node is not installed on this machine, the built-in node of HBuilderX will be used to run the test. On the contrary, if the node is installed on the machine, the node of the machine is used.
-   `Note`: This plugin version 0.0.4+, new configuration items support custom settings which node version to use for uni-app compilation

**pay attention:**

-   For normal uni-app projects, you need to install the test environment through the plugin `hbuilderx-for-uniapp-test`.
-   uniapp-cli project, just install the relevant test dependencies under the project. [Details](#cli)

###  uni-app common project

For uni-app ordinary projects, when `initializing the test environment` or `running the test`, if the relevant dependencies are not installed, they will be installed automatically.

As shown in the figure below, the project manager, select the project, right-click menu \[initialize the test environment\]

Note: When installing environment dependencies, if it is detected that the test configuration files [env.js](https://miniapp.neuxnet.com/docs/file/env) and [jest.config.js](https://miniapp.neuxnet.com/docs/file/jest_config) do not exist under the project, it will automatically Create a test configuration file.

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/ca0f9ce4-1d45-4103-9800-36a1608062d4.gif)

###  uniapp-cli project

The uniapp-cli project, automated test running, will use the **dependent library** under the project.

Open the command line, enter the project directory, and enter the following command to install:

```
npm install --save cross-env puppeteer adbkit node-simctl jest playwright @playwright/test
```

##  Create test case

uni-app project, pages page, right-click menu, create test cases

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/2b15f277-5a79-425e-b978-19e16d3062f5.gif)

##  Test run

After creating a test case, select the project, right-click the menu \[Run uni-app automated test\], and select the running platform to start running the test.

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/97a253eb-6c10-4b4d-a66f-1b45de1acc59.gif)

**Note**: If you want to run the specified test case, please **select** the use case to be run in the project manager, right-click menu \[Run current test case\]

###  Test Platform Description

-   Windows computers **NOT SUPPORTED** to run tests to `ios phone`
-   MacOSX computer, only supports running tests to `ios simulator`, **does not support** ios real machine.
-   Run the test to H5, only supports `chrome` browser, **does not support** other browsers.
-   Run the test to an Android phone, if HBuilderX only detects **one android device**, run the test directly to the currently connected device. When there are multiple devices, a pop-up window will ask to select a mobile phone.

###  Select test platform

As shown in the figure below, when running the test, you can select the corresponding platform.

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/856d6345-3274-4856-8830-3bccfcc9d747.png)

###  Select devices

> If the device information cannot be obtained, please [Reference](https://ask.dcloud.net.cn/article/97)

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/48721bc9-247c-461c-b6f8-8fca1838b734.png)

##  Plugin configuration

Click the menu \[Settings\] \[Plugin Configuration\], find the hbuilderx-for-uniapp-test item, and you can see the setting items.

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/3a04e761-bb25-4c0e-addc-802f02bd38c6.png)

**As pictured above**

-   Support custom **`test report`** path.
-   Automatically modify testMatch in jest.config.js file, default is `true`. After removing the check, testMatch will no longer be automatically modified.
-   Plugin version 0.0.4+, new configuration items support custom setting which node version to use for uni-app compilation. That is, you can choose to use HBuilderX `built-in Node`, or use `operating system` installed Node for uni-app compilation.

##  How to write test cases

> uni-app automated testing, using the common jest testing library in the industry.

-   In the uni-app project, under the pages directory, right-click the menu \[Create Test Case\], and select a template.
-   Test case file name, must be xxx.test.js
-   When writing test cases, please follow the jest specification.

###  jest case analysis

The following will use a simplest example to explain the composition of test cases.

-   **describe** represents a set of use cases, describe will form a scope
-   **it** test function
-   **test** test function, similar to it
-   **expect** matcher. [Using documentation](https://jestjs.io/zh-Hans/docs/expect)

```
# 求和测试
function sum(a, b) {
    return a + b;
};

describe("sum test", () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
    test('adds 1 + 1 to equal 3', () => {
        expect(sum(1, 1)).toBe(3);
    });
})
```

###  uni-app page use case example

Take the uni-app \[default template\] index page as an example.

Write a test case that checks the `index.vue` page, if the title is `Hello`

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/ffe6294f-77b7-4e53-9e10-649381b2206c.jpg)

```
describe('test title', () => {
    let page;
    beforeAll(async () => {
        page = await program.currentPage();
        await page.waitFor(3000);
    });

    it('check page title', async () => {
        const el = await page.$('.title');
        const titleText = await el.text();
        expect(titleText).toEqual('Hello');
    });
});
```

Extension: In the above test code, the `beforeAll` function is used, which is used to execute before all tests. [Learn about more hook functions in jest](https://miniapp.neuxnet.com/docs/jest/SetupTeardown)

##  Setup and Teardown

> Often when writing tests, you need to do some setup work before the test runs, and some finishing work after the test runs. You can use Jest's hook function to solve this problem.

**4 hook functions in jest**

-   beforeAll: execute before all tests
-   afterAll: After all tests are executed
-   beforeEach: executed before each test instance
-   afterEach: executed after each test instance completes

Documentation extension: [jest setup-teardown](https://jestjs.io/docs/setup-teardown)

###  Execution order of hook functions

Using the following code, let's see the function execution order

```
describe('test Run Sequence', () => {
    beforeAll(() => {
        console.log('1 - beforeAll');
    });
    afterAll(() => {
        console.log('1 - afterAll');
    });
    beforeEach(() => {
        console.log('1 - beforeEach');
    });
    afterEach(() => {
        console.log('1 - afterEach');
    });
    test('test', () => {
        console.log('1 - test')
    });
});
```

**operation result**

```
  test Run Sequence
    ✓ test (4 ms)

  console.log
    1 - beforeAll

  console.log
    1 - beforeEach

  console.log
    1 - test

  console.log
    1 - afterEach

  console.log
    1 - afterAll

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.454 s
```

##  Built-in Jest code blocks

> In order to write test cases more quickly, this plugin has built-in jest part of the code block

| prefix | code block |
| --- | --- |
| describe | describe('', () => {}); |
| test | test('', () => {}); |
| ta | test('', async () => {await}); |
| beforeAll | beforeAll(() => {}); |
| afterEach | afterEach(() => {}); |
| afterAll | afterAll(() => {}); |
| beforeAll | beforeAll(() => {}); |

---
title: "Package — overview"
source_url: https://miniapp.neuxnet.com/collocation/package.html
---
###  Overview

-   When developing the web, sometimes it is necessary to compile and publish a set of codes to different sites, such as the main site and WeChat h5 site. (Note that it is not a set of code that adapts to different browsers internally, it is really separate and deployed different websites)

Mini-app can achieve custom conditional compilation for platforms by adding the Mini App extension node in the package.json file. After extending to a new platform, there are three impacts:

1.  You can write custom conditional compilation in the code to write special code for this new platform
2.  The runtime can perform compilation and operation for new platforms
3.  Compilation and distribution for new platforms can be performed at the time of release

package.json extension configuration usage:

```
{
    /**
     * Other existing configurations in package.json. 
     * After copying the code, please remove the comments
     */
    "Mini App": {// Expansion Configuration
        "scripts": {
            "custom-platform": { //Custom compilation platform configuration, can be invoked through the Cli
                "browser":"",  //The target browser for running, effective only when UNI_PLATFORM is set to h5
                "env": {//Environment variables
                    "UNI_PLATFORM": "",  //Baseline platform
                    "MY_TEST": "", // ... Other custom environment variables
                 },
                "define": { //Custom conditional compilation
                    "CUSTOM-CONST": true //Custom conditional compilation constants, recommended to be in uppercase.
                }
            }
        }    
    }
}
```

Tips：

-   browser is only valid when UNI\_PLATFORM is h5, currently limited to the following enumeration values: chrome, firefox, ie, edge, safari
-   Comments are not allowed in the package.json file, otherwise the extension configuration will be invalid
-   vue-cli needs to be updated to the latest version

Run and publish the project

---
title: "Release cycle"
source_url: https://miniapp.neuxnet.com/component/uniui/changelog.html
---
##  Release cycle

-   Revision number: Daily bugfix updates are made every weekend. **If there is an urgent bugfix, it can be released at any time**
-   Minor version number: A backward compatible version with new features is released every month.
-   Major version number: Contains breaking updates and new features that are not in the release cycle.

##  1.4.6（2021-09-30）

-   uni-data-picker adds the function of clearing the selected option (configure whether to display the button through the clearIcon attribute), and provides the clear method for calling, the two are equivalent
-   uni-data-picker fix the bug of error when readonly is true
-   uni-data-picker fixes the bug that the map attribute was invalid caused by the previous version
-   uni-data-picker adds the ellipsis attribute to support whether to automatically omit the tab option when the length is too long

##  1.4.5（2021-09-24）

-   uni-icons added support to use css icon library to extend components (only vue support)
-   uni-badge fix the bug that styles don't take effect on byte applet
-   uni-calendar fix the bug that startDate and endDate properties are invalid
-   uni-data-picker fixes a bug where cascades were not triggered in some cases
-   uni-data-picker adds show and hide methods, which developers can call through ref
-   uni-data-picker added ellipsis will be added automatically if the content of the option is too long
-   uni-data-picker adds map attribute field mapping to map text/value to other fields in the data

##  1.4.4（2021-09-10）

-   uni-ui modify platform compatibility
-   uni-datetime-picker fix hide-second bug on mobile
-   uni-datetime-picker fixes the bug that the assigned date is not highlighted when the default value is assigned to the radio
-   uni-datetime-picker fixes the bug that the mobile terminal does not display the time correctly when assigning the default value
-   uni-datetime-picker adds hide-second property, which supports only the use of hours and minutes and hides seconds
-   uni-rate optimization The default value is modified to 0 stars

##  1.4.3（2021-09-03）

-   uni-data-checkbox fixes the problem that there is no current field in modelValue in uni-forms, the current field must be filled in and does not participate in verification
-   uni-datetime-picker optimization When unchecked (range selection), the next selection will start directly, avoiding multiple clicks
-   uni-datetime-picker optimization The mobile terminal supports the clear button, and supports calling the clear method of the component through ref
-   uni-datetime-picker optimization Adjust the font size and beautify the calendar interface
-   uni-datetime-picker fixes the bug of placeholder invalidation caused by internationalization
-   uni-file-picker fixes the bug that the file cannot be deleted when return-type="object" and v-model exists
-   uni-file-picker added the return fileID field in the parameter
-   uni-file-picker fixes the bug that Tencent Cloud's incoming fileID cannot be echoed
-   uni-file-picker fixes the problem that the image cannot be enlarged after selecting it
-   uni-link fixes bugs that are not displayed under nvue
-   uni-list fixes the bug that the to attribute in vue3 reported an error when publishing the application
-   uni-search-bar fix the bug that the value attribute is incompatible with the modelValue attribute
-   uni-swipe-action optimizes the close-all method

##  1.4.2（2021-08-20）

-   Added uni-ui component to support internationalization i18n
-   uni-collapse optimization show-arrow property defaults to true
-   uni-collapse adds the show-arrow property to control whether to display the right arrow
-   uni-data-checkbox fixes the problem that the selected icon is not displayed when the icon is left in the single-select list mode
-   uni-easyinput fixes the bug that the default value validation fails in the dynamic form of uni-forms
-   uni-file-picker fixes the bug that the image cannot be echoed due to version 0.2.11
-   uni-file-picker adds the clearFiles(index) method, which can manually delete the specified file
-   uni-file-picker fix the bug that the value of v-model is set to null
-   uni-swipe-action adds a new close-all method to close all opened components
-   uni-swipe-action adds the resize() method, which resets the component when the non-WeChat applet, h5, and app-vue side cannot be swiped
-   uni-swipe-action fixes occasional issues like Page\[x\]\[-x,xx;-x,xx,x,x-x\] on the app side
-   uni-swipe-action optimizes the sliding logic of WeChat applet, h5, and app-vue to avoid the problem of not being able to slide after dynamically adding components

##  1.4.0（2021-08-13）

-   uni-calendar fix the bug that the popup layer is covered by the tabbar
-   uni-data-checkbox fix reset form in uni-forms, error message cannot be cleared
-   uni-dateformat adjustment The default time is no longer the current time, but the '-' character is displayed
-   uni-datetime-picker added for vue3
-   uni-datetime-picker added support as uni-forms subcomponent related functions
-   uni-datetime-picker fixes the bug that when using in uni-forms, select time report NAN error
-   uni-datetime-picker fix the bug of invalid dynamic assignment of type attribute
-   uni-datetime-picker fix "confirm" button is covered by tabbar bug
-   uni-datetime-picker fixes the bug that the left and right calendars are selected in the same range when the component is not assigned a value
-   uni-datetime-picker fixes the bug that the range selection does not display the current value correctly
-   uni-datetime-picker fixes the bug of 'cale' of undefined on h5 platform (mobile terminal)
-   uni-easyinput fixes the problem that the error message cannot be cleared when the form is reset in uni-forms
-   uni-file-picker fix the bug that the file cannot be deleted when return-type="object"
-   uni-file-picker fix the bug that the auto-upload attribute is invalid
-   uni-forms fixed the bug that the field without adding validation rules still reported an error
-   uni-forms fix the problem that the reset form error message cannot be cleared
-   uni-forms optimization component documentation
-   uni-forms fix the problem that form validation only takes effect once
-   When uni-tag type is not default, size is small and the font size is displayed incorrectly

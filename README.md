titanium
========


Installation
-------------


__Appcelerator__

The company that makes Titanium and offers B2B services

- Create an account at https://my.appcelerator.com/ Why? :)

- Titanium: bridge between nativeland and javascript

    - Install: `sudo npm install -g titanium`

    - CLI reference: http://docs.appcelerator.com/titanium/3.0/#!/guide/Titanium_Command-Line_Interface_Reference

- Alloy: Titanium MVC framework
    
    - Install: `sudo npm install -g alloy`

    - Background: http://www.appcelerator.com/blog/2012/11/gtka-one/

- Install Titanium SDK: `ti sdk install`

__Building__

- iOS: you need XCode

- Android: you need Android SDK. http://developer.android.com/sdk/index.html. That will give you an interface from which you can select android versions and install SDK's and other stuff.

    - There are many versions of Android, make sure you install the version one you want to test against. The Titianium Kitchensink app also needs Google APIs so make sure you install those too. I didn't get that to work yet.

- You want at least version 14 of the Android API, which is Android 4.x and higher. Below is 2.3 or lower which we don't support.

- I haven't found any 'Build on save' (like nodemon) plugin yet, so if you find one, please add it here.

- build is triggered by: `ti build -p android`

- if your app doesn't build properly for some reason you can throw away `build` and `Resources` and rebuild. `ti clean` only removes build folder.


__Simulators__

- iOS: comes with XCode
    
- Genymotion: best android simulator

    - if you need another version: 

        - https://shop.genymotion.com/index.php?controller=order-opc
        
    - you need VirtualBox: http://www.oracle.com/technetwork/server-storage/virtualbox/downloads/index.html?ssSourceSiteId=otnjp
    - Enable Genymotion as default Emulator: `ti config genymotion.enabled true`
    
    - Q: how do we run an android build directly in genymotion?
    
        - http://stackoverflow.com/questions/18768489/how-to-start-genymotion-device-with-shell-command

        - http://fokkezb.nl/2013/10/29/genymotion/


__Titanium package management__

- gitTio: Titanium package manager: http://gitt.io/cli

    - screencast: http://youtu.be/Tgyfo8YHKxk


__Editing__

- Sublime Text: preferred IDE :)

    - integration with Titanium: http://blog.codypchristian.net/post/45623739019/titanium-3-0-sublime-text-integration

__Tutorials__

- Introduction to Alloy with Hello world example: http://www.appcelerator.com/blog/2012/11/gtka-one/

- More details on Alloy: http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_XML_Markup

__File structure__

**root dir**

- android.keystore - used to sign the production app
- app - Alloy app source
    - alloy.jmk - hooks for Alloy -> Resources building, e.g. SASS compilation
    - alloy.js - first file executed, basically main function. determine which controller to load
    - assets - all static files: images, fonts (copied to root dir when compiled)
    - config.json - configuration file for Alloy app
        - mixpanel id, facebook secret, etc.
        - separate dev/prod/local configs
    - controllers - controllers
    - lib - all js dependencies (copied to root dir when compiled)
    - models - Backbone models and collections
    - styles - TSS files that style the app
    - views - XML files, templates
    - widgets - reusable, mini apps that have the same structure
- build - the compiled app (from Resources folder)
- i18n - internationalization files: including app icon and splash screen
- modules - native modules, external dependencies for Titanium
- platform - files placed in root of project once it's compiled, eg.: 
    - bundles for iOS
    - android theme
    - etc.
- plugins - no idea
- tiapp.xml - configuration for building the Titanium app. Everything that's normally in your Android manifest file or iOS plist, e.g.:
    - app version
    - app id
    - app name
    - which platforms are supported
    - sdk version
    - push notifications for Android
- Resources - Alloy app compiled to vanilla Titanium code

__Controllers__

- $ refers to controller object
- all elements in view that have id are set on the $ of the controller
- events:
    - Titanium Library objects, such as labels, buttons, windows, httpClient, use `addEventListner`, `removeEventListner` and `fire`
    - Alloy application objects, such as Models, Collections, Controllers, Widgets, etc, use `on`, `off`, `trigger`
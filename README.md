titanium
========


Installation
-------------


__Appcelerator__

The company that makes Titanium and offers B2B services

- Create an account at https://my.appcelerator.com/ You need it to download the Titanium sdk

- Titanium: bridge between nativeland and javascript

	- Install: sudo npm install -g titanium

	- CLI reference: http://docs.appcelerator.com/titanium/3.0/#!/guide/Titanium_Command-Line_Interface_Reference

- Alloy: Titanium MVC framework
	
	- Install: sudo npm install -g alloy

	- Background: http://www.appcelerator.com/blog/2012/11/gtka-one/


__Building__

- iOS: you need XCode

- Android: you need Android SDK. http://developer.android.com/sdk/index.html. That will give you an interface from which you can select android versions and install SDK's and other stuff.

	- There are many versions of Android, make sure you install the version one you want to test against. The Titianium Kitchensink app also needs Google APIs so make sure you install those too. I didn't get that to work yet.

- I haven't found any 'Build on save' (like nodemon) plugin yet, so if you find one, please add it here.

__Simulators__

- iOS: comes with XCode
	
- Genymotion: best android simulator

	- if you need another version: 

		- https://shop.genymotion.com/index.php?controller=order-opc
		
	- you need VirtualBox: http://www.oracle.com/technetwork/server-storage/virtualbox/downloads/index.html?ssSourceSiteId=otnjp
	
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

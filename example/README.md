# SimpleMSM

_Application to control mass mobile messages remotely_



#
## Starting 🚀

These instructions will allow you to get a copy of the project running on your local machine for development and testing purposes.
#
## Pre-requisites 📋

_A mobile development machine or a mobile_

```
android studio
```
#

# Installation 🔧

Before starting you should bear in mind that in Windows you can only compile the application for Android, since in order to have an emulator for an iOS device you can only do it from a computer with MacOS operating system, taking this into account, let's start.

The first thing we need is to install Node.js, Python 2 and JDK which is the Java SE Development Kit.

We will install these dependencies via Chocolatey, a package manager for Windows that is very similar to Brew for Mac.

You must have PowerShell v2 + installed and make sure to open it as administrator.

Now with PowerShell open we run the following command:
```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```
_Once the installation has finished, you can verify that it was installed correctly by running the command:_
```
choco
```

Once we have choco installed and running in PowerShell we will proceed to install the dependencies with the command:

_Note: If you already have Node.js or any of the previously installed dependencies, you can remove it from the command and leave the ones you need. But make sure you have node from version 10 up and the same with the JDK that is greater than or equal to version 8._
```
choco install -y nodejs.install python2 openjdk8
```
### Install Android Studio:
We are going to go to this link: https://developer.android.com/studio/index.html and download the installer, once downloaded we open the installer and in one of the steps it will ask us which items we are going to install we must make sure these are selected:

- Android SDK
- Android SDK Platform
- Android Virtual Device

Once Android Studio is installed, we have to make sure that we also have the Android 10 SDK installed, which is a React Native requirement when compiling "this does not mean that our app will only work on Android 10 and up."

Check this in Preferences → Appearance & Behavior → System Settings → Android SDK and in the SDK Platforms tab:

We check that it is selected at the bottom we will see a check box near the confirmation buttons that will say Show package Details we select it and we will see more options of which we have to make sure they are selected:

![alt text](https://static.platzi.com/media/user_upload/Screen%20Shot%202020-09-11%20at%2012.30.06%20PM-f977aff1-7262-458c-93a5-2a5cba3dbc2f.jpg)

Android SDK Platform 29 y Intel x86 Atom_64 System Image o Google APIs Intel x86 Atom System Image

![alt text](https://static.platzi.com/media/user_upload/Android_10-27a8eccf-ca75-4892-98f1-4875b66a57c4.jpg)

Now, right there within Android SDK we go to the SDK Tools tab and we will make sure that it is selected from Android SDK Build-Tools and we do the same as in the previous step where we will select the option of the Show package Details check box where we will see the list of versions and make sure version 29.0.2 is selected:

![alt text](https://static.platzi.com/media/user_upload/build_tools-e38f1669-807c-444a-baaf-b4a8335e23e8.jpg)

Finally, since we have everything selected, we press the Apply button and if we need something, it will be installed.

Set ANDROID_HOME environment variable:

React native requires that we have some environment variables for that we are going to open the Windows control panel → User Accounts → User Accounts → Change my environment variables

![alt text](https://static.platzi.com/media/user_upload/android_home-121cc9c3-e816-4006-84f0-cdb2dd3da5d8.jpg)




now we open powershell to verify that this variable was installed: We copy and paste this command in the console and execute it:
then we click on the New and add ANDROID_HOM
```
Get-ChildItem -Path Env:\
```
and we make sure that ANDROID_HOME has been added

Now if finally we will add platform-tools to the path:


![alt text](https://static.platzi.com/media/user_upload/variables-294a9b6a-dc53-4c4f-a3f2-245bab1534e0.jpg)

Windows → User Accounts → User Accounts → Change my environment variables and select the Path variable click on Edit and click on New and add:
```
% LOCALAPPDATA% \ Android \ Sdk \ platform-tools
```

_then you go to the root of the project and execute_
```
 npm install
```


### Run on device

_Get a list of all the devices:_

```
 adb devices
 ```


_Then set the which device to run on:_

```
 adb -s <device name> reverse tcp: 8081 tcp: 8081
```

_Then deploy the app:_
```
 react-native run-android
 ```


_then with the development environment working_

```
 npm run android
```

### Note
_If the project is running on linux and metro, it will not automatically run the node.js server in a separate terminal_

- Open a terminal, enter the project folder and execute:
```
npx react-native start
```

- Open another terminal, go to the project folder and
execute:
```
 npx react-native run-android
```

![alt text](https://static.platzi.com/media/user_upload/linux-e79a9c30-1a7e-48f6-aab8-4d6ed5360368.jpg)
#


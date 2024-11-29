<p align="center"><img src="assets/images/praxis-icon.png" width="150"></p>
<h1 align="center"><b>Praxis</b></h1>
<h4 align="center">Orthodox daily prayers, readings, and fasting information</h4>
<p align="center">
<a href="https://github.com/JLucasGaldino/Praxis/releases/tag/v0.4.0">
<img alt="Latest Version" src="https://img.shields.io/badge/tag-v0.4.0-8A2BE2">
</a>
<a href="https://www.gnu.org/licenses/gpl-3.0">
<img src="https://img.shields.io/github/v/release/JLucasGaldino/Praxis">
</a>
<img alt="Latest Version" src="https://img.shields.io/badge/Christ%20is%20risen!-8A2BE2">
</p>
<h4 align="center"><a href='https://ko-fi.com/O5O616HNS2' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi5.png?v=6' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a></h4>

## Description
This is a universal mobile app (Android and iOS) for Orthodox Christians to quickly have access to their daily prayers, scripture readings, and fasting calendar. 
This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Download
- [Latest Release Build](https://github.com/JLucasGaldino/Praxis/releases/download/v0.4.0/Praxis_v0.4.0.apk) in the apk branch

| Source | Version |
|--------|---------|
| <a href="https://apt.izzysoft.de/fdroid/index/apk/com.jlucasgaldino.Praxis"><img alt="IzzyOnDroid" src="https://img.shields.io/endpoint?url=https://apt.izzysoft.de/fdroid/api/v1/shield/com.jlucasgaldino.Praxis"></a> | v0.3.1 |
| <a href="https://github.com/JLucasGaldino/Praxis/releases/download/v0.4.0/Praxis_v0.4.0.apk"><img alt="GitHub Downloads" src="https://img.shields.io/github/v/release/JLucasGaldino/Praxis?logo=GitHub&label=GitHub"></a>

## [Screenshots](https://github.com/JLucasGaldino/Praxis/blob/main/screenshots/screenshots.md)

## Current features
- Orthodox daily prayers and prayers before confession
- Orthodox daily readings, life of the saints, and fasting calendar
- Languages:
  - English
  - Portuguese
- Calendars:
  - Gregorian
  - Julian

## Planned features
- Psalter
- Bible according to the Septuagint
- More prayers!

## Testing and development

1. Clone git repo

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Build

1. Build an Android App Bundle [using EAS](https://docs.expo.dev/build/setup/)

``` bash
npm install -g eas-cli
eas login
eas build:configure
eas build --platform android
```

2. Create a list of apks from the bundle using [Android bundletool](https://developer.android.com/tools/bundletool), then unzip the apks file and enter the 'splits' directory

``` bash
java -jar bundletool-all-1.17.2.jar build-apks --bundle=Praxis_v0.3.1.aab --output=Praxis_v0.3.1.apks
unzip Praxis_v0.3.1.apks
cd splits
```

3. Make a new directory and move your chosen apks to the new directory. Then, use [APKEditor](https://github.com/REAndroid/APKEditor) to merge these apks into a single apk.

``` bash
mkdir selected-apks
mv example.apk example2.apk selected-apks/
java -jar APKEditor.jar m -i selected-apks/
```

4. Sign the apk with [Android apksigner](https://developer.android.com/tools/apksigner) and verify the signature

``` bash
apksigner sign --ks /path/to/keystore.jks merged.apk
apksigner verify -v merged.apk
```

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the Expo community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

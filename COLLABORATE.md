# How to collaborate
As an open-source project, Praxis can be improved by anyone who wants to collaborate. If you have prayers, texts, or any kind of suggestions that you want to add, you can do it by making a pull request or opening an issue.

If you would like to contact me, or collaborate more directly, please email me at dev.lg@mailbox.org.

## Adding prayers
The easiest way to add texts is to send them to me by email. I will then share them with collaborators so we can publish them on the app. Each prayer page is basically a react-native webview component that renders html from a translations.json file. Here is, for example, the code for the morning prayers page:

``` typescript
import { Text, View, StyleSheet, ScrollView } from 'react-native'; // Imports relevant react-native modules
import { useLanguage } from "@/constants/LanguageContext"; // Imports the language settings for the app
import { I18n } from 'i18n-js'; // The i18n-js module allows the app to use multiple translations
import translations from "@/translations.json"; // This is the main translation file
import { WebView } from 'react-native-webview'; // This allows us to render the page as a web browser would do

const i18n = new I18n(translations);

export default function MorningPrayers() {
    const { language } = useLanguage()
    i18n.defaultLocale = "en";
    i18n.locale = language;
    const prayerHtml = i18n.t("prayerContent.morningPrayersV3");
    return(
        <View style={styles.container}>
            <WebView
                originWhitelist={['*']}
                source={{ html: prayerHtml }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
});
```

You can use this as a template to create a new page, and create a new json element to replace prayerContent.morningPrayersV3.
You must then add the new page to the router (app/(tabs)/home/_layout.tsx) and the proper slider element (CommonPrayerSliderData.tsx).

## Modifying the liturgical calendar
All calendar data comes from the orthocal.info API and can be directly modified on the following files on assets/orthocal-fetches:

julian_en.json
julian_pt.json
gregorian_en.json
gregorian_pt.json


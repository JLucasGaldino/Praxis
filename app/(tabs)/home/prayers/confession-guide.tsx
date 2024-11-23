import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { useLanguage } from "@/constants/LanguageContext";
import { I18n } from 'i18n-js';
import translations from "@/translations.json";
import { WebView } from 'react-native-webview';

const i18n = new I18n(translations);

export default function MorningPrayers() {
    const { language } = useLanguage()
    i18n.defaultLocale = "en";
    i18n.locale = language;
    const prayerHtml = i18n.t("prayerContent.confessionGuide");
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

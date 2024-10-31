import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { useLanguage } from "@/constants/LanguageContext";
import { I18n } from 'i18n-js';
import translations from "@/translations.json";
import Markdown from 'react-native-markdown-display';

const i18n = new I18n(translations);

const rules = {
    heading1: (node, children, parent, styles) =>
        <Text key={node.key} style={{textAlign: 'center', marginTop: 30, marginBottom: 20,}}>
            {children}
        </Text>
}

export default function ConfessionGuide() {
    const { language } = useLanguage()
    i18n.defaultLocale = "en";
    i18n.locale = language;
    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrollView} horizontal={false}>
                <Markdown style={styles.markdown} rules={rules}>{i18n.t("prayerContent.morningPrayersV2")}</Markdown>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    markdown: {
        body: {
            color: '#fff',
            fontSize: 18,
            textAlign: 'justify',
        },
        em: {
            color: '#999',
            fontSize: 18,
            fontStyle: 'normal',
            alignSelf: 'stretch',
            textAlign: 'justify',
        },
        strong: {
            fontWeight: '800',
        },
        textgroup: {
            textAlign: 'justify',
        },
        heading1: {
            fontSize: 25,
            fontWeight: '600',
            letterSpacing: 1.5,
        },
    },
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 40,
    },
});

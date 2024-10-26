import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { useLanguage } from "@/constants/LanguageContext";
import { I18n } from 'i18n-js';
import translations from "@/translations.json";

const i18n = new I18n(translations);

export default function MorningPrayers() {
    const { language } = useLanguage()
    i18n.defaultLocale = "en";
    i18n.locale = language;
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}
                        horizontal={false}
            >
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.hoursInstructions.intro1")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.comment}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursInstructions.section1a")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.comment}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursInstructions.section1b")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.comment}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursInstructions.section1c")}
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        // paddingHorizontal: 20,
    },
    textContainer: {
        // borderWidth: 3,
        borderColor: 'red',
        paddingHorizontal: 20,
        alignSelf: 'stretch',
        // padding: 5,
    },
    scrollView: {
        flex: 1,
        // paddingHorizontal: 20,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'justify',
    },
    heading: {
        fontSize: 25,
        marginBottom: 20,
        marginTop: 30,
        textAlign: 'center',
        color: '#ffd33d',
    },
    comment: {
        color: '#ffd33d',
        fontSize: 18,
        fontStyle: 'normal',
        alignSelf: 'stretch',
        textAlign: 'justify',
        marginBottom: 10,
    }
});

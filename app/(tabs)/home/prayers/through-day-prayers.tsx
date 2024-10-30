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
                    <Text style={styles.heading}>{i18n.t("prayerContent.throughDayPrayers.intro1")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.throughDayPrayers.section1")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.throughDayPrayers.intro2")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.throughDayPrayers.section2")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.throughDayPrayers.intro3")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.throughDayPrayers.section3")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.throughDayPrayers.intro4")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.throughDayPrayers.section4")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.throughDayPrayers.intro5")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.throughDayPrayers.section5a1")}
                        <Text style={{fontStyle: 'normal', color: '#999'}}> [</Text>
                        {i18n.t("prayerContent.throughDayPrayers.section5a2")}
                        <Text style={{fontStyle: 'normal', color: '#999'}}>]</Text>
                        {i18n.t("prayerContent.throughDayPrayers.section5a3")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.comment}>
                        {i18n.t("prayerContent.throughDayPrayers.section5b")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.throughDayPrayers.section5c1")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.throughDayPrayers.section5c2")}
                        <Text style={{fontStyle: 'normal', color: '#999'}}> (3x)</Text>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}<Text style={{fontStyle: 'normal', color: '#999'}}>O superior: </Text>
                        {i18n.t("prayerContent.throughDayPrayers.section5c3")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.throughDayPrayers.intro6")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.throughDayPrayers.section6a")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.throughDayPrayers.section6b")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.throughDayPrayers.section6c")}
                        <Text style={{fontStyle: 'normal', color: '#999'}}> (3x)</Text>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}<Text style={{fontStyle: 'normal', color: '#999'}}>O superior: </Text>
                        {i18n.t("prayerContent.throughDayPrayers.section6d")}
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
        color: '#fff',
        fontWeight: '600',
        letterSpacing: 1.5,
    },
    comment: {
        color: '#999',
        fontSize: 18,
        fontStyle: 'normal',
        alignSelf: 'stretch',
        textAlign: 'justify',
        marginBottom: 10,
    }
});

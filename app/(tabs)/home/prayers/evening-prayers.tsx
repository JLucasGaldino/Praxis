import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { useLanguage } from "@/constants/LanguageContext";
import { I18n } from 'i18n-js';
import translations from "@/translations.json";

const i18n = new I18n(translations);

export default function EveningPrayers() {
    const { language } = useLanguage()
    i18n.defaultLocale = "en";
    i18n.locale = language;
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}
                        horizontal={false}
            >
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("pageTitles.eveningPrayers")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section2")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section3")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section4")}
                        <Text style={{fontStyle: 'normal', color: '#999'}}> (3x)</Text>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section6")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.eveningPrayers.intro2")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section9")}
                        <Text style={{fontStyle: 'normal', color: '#999'}}> (3x)</Text>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section11")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section12")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section13")}
                        <Text style={{fontStyle: 'normal', color: '#999'}}> (3x)</Text>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section14")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section15")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section16")}
                        <Text style={{fontStyle: 'normal', color: '#999'}}> [</Text>
                        {i18n.t("prayerContent.eveningPrayers.section17")}
                        <Text style={{fontStyle: 'normal', color: '#999'}}>]</Text>
                        {i18n.t("prayerContent.eveningPrayers.section18")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.eveningPrayers.intro3")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section19")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section20")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section21")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section22")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section23")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section24")}
                        <Text style={{fontStyle: 'normal', color: '#999'}}> (x12)</Text>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.eveningPrayers.intro7")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section35")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.eveningPrayers.intro8")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section36")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.eveningPrayers.intro9")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section37")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.eveningPrayers.intro10")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section38")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.eveningPrayers.intro11")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section39")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.eveningPrayers.intro13")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section41a")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section41b")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section41c")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section41d")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section41e")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section41f")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section41g")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section41h")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section41i")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section41j")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section41k")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section41l")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section41m")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section41n")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section41o")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section41p")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section41q")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section41r")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section41s")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section41t")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section41u")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section41v")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section41w")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section41x")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.eveningPrayers.intro14")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section42")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.eveningPrayers.intro15")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section43")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.eveningPrayers.intro16")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section44")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.eveningPrayers.intro17")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section45")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section46")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.eveningPrayers.intro18")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section47")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section48")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section49")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section50")}
                        <Text style={{fontStyle: 'normal', color: '#999'}}> (3x)</Text>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section51")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.eveningPrayers.intro19")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section52")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.comment}>
                        {i18n.t("prayerContent.eveningPrayers.section53")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section54")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section55")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section56")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section57")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section58")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.comment}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section59")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.eveningPrayers.intro22")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section60")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        <Text style={{fontStyle: 'normal', color: '#999'}}>Ou: </Text>
                        {i18n.t("prayerContent.eveningPrayers.section61")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.comment}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section62")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section63")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section64")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section65")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.eveningPrayers.intro23")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section66")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.comment}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section67")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.eveningPrayers.section68")}
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
        color: '#fff',
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

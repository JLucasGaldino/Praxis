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
                    <Text style={styles.heading}>{i18n.t("pageTitles.morningPrayers")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.comment}>
                        {i18n.t("prayerContent.morningPrayers.section1")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section2")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.comment}>
                        {i18n.t("prayerContent.morningPrayers.section3")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section4")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> (3x)</Text>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section6")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section7")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section8")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.morningPrayers.intro2")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section9")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> (3x)</Text>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section11")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section12")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section13")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> (3x)</Text>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section14")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section15")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section16")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> [</Text>
                        {i18n.t("prayerContent.morningPrayers.section17")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}>]</Text>
                        {i18n.t("prayerContent.morningPrayers.section18")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.morningPrayers.intro3")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section19")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section20")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section21")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section22")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section23")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section24")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> (x12)</Text>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.morningPrayers.intro4")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section25")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section26")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section27")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section28")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.morningPrayers.intro5")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section29")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.morningPrayers.intro6")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section30")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section31")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section32")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section33")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.morningPrayers.intro7")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section35")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.morningPrayers.intro8")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section36")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.morningPrayers.intro9")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section37")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.morningPrayers.intro10")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section38")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.morningPrayers.intro11")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section39")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.morningPrayers.intro12")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section40")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.morningPrayers.intro13")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section41")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.morningPrayers.intro14")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section42")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.morningPrayers.intro15")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section43")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.morningPrayers.intro16")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section44")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.morningPrayers.intro17")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section45")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> (N do santo protetor)</Text>
                        {i18n.t("prayerContent.morningPrayers.section46")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.morningPrayers.intro18")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section47")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.morningPrayers.intro19")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section48")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.morningPrayers.intro20")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section49")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.comment}>
                        {i18n.t("prayerContent.morningPrayers.section50")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.morningPrayers.intro21")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section51")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> (pequena metanóia)</Text>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section52")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> (pequena metanóia)</Text>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section53")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> (N) </Text>
                        {i18n.t("prayerContent.morningPrayers.section54")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> (pequena metanóia)</Text>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section55")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> (NN)</Text>
                        {i18n.t("prayerContent.morningPrayers.section56")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> (pequena metanóia)</Text>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section57")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> (pequena metanóia)</Text>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section58")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> (pequena metanóia)</Text>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section59")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> (pequena metanóia)</Text>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.morningPrayers.intro22")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section60")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> (pequena metanóia)</Text>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section61")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> (NN) </Text>
                        {i18n.t("prayerContent.morningPrayers.section62")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> (pequena metanóia)</Text>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section63")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> (pequena metanóia)</Text>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.morningPrayers.intro23")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section64")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section65")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section66")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> (3x)</Text>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.morningPrayers.section67")}
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

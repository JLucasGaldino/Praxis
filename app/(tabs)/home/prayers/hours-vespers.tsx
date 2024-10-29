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
                    <Text style={styles.heading}>{i18n.t("prayerContent.hoursVespers.intro1")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.comment}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section1a")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section1b1")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section1b2")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>
                        {i18n.t("prayerContent.hoursVespers.intro2")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {i18n.t("prayerContent.hoursVespers.section2a1")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> (3x)</Text>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section2a2")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section2a3")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section2a4")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> (3x)</Text>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section2a5")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section2a6")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section2a7")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> [</Text>
                        {i18n.t("prayerContent.hoursVespers.section2a8")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}>]</Text>
                        {i18n.t("prayerContent.hoursVespers.section2a9")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section2b")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> (12x)</Text>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section2c")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section2d")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section2e")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section2f")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.hoursVespers.intro3")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section3a")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.comment}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section3b")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section3c")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section3d")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section3e")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section3f")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section3g")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section3h")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> (3x)</Text>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>
                        {i18n.t("prayerContent.hoursVespers.section4")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section4a")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section4b")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section4c")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section4d")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section4e")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section4f")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section3d")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section3e")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section3f")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section3g")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section3h")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> (3x)</Text>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>
                        {i18n.t("prayerContent.hoursVespers.intro5")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.comment}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section5a")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section5b1")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> [</Text>
                        {i18n.t("prayerContent.hoursVespers.section5b2")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}>] </Text>
                        {i18n.t("prayerContent.hoursVespers.section5b3")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> [</Text>
                        {i18n.t("prayerContent.hoursVespers.section5b4")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}>]</Text>
                        .
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section5b5")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> [</Text>
                        {i18n.t("prayerContent.hoursVespers.section5b6")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}>]</Text>
                        .
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>
                        {i18n.t("prayerContent.hoursVespers.intro6")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section22")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section23")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section24")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> (x12)</Text>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.hoursVespers.intro7")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section35")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.hoursVespers.intro8")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section36")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.hoursVespers.intro9")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section37")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.hoursVespers.intro10")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section38")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.hoursVespers.intro11")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section39")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.hoursVespers.intro13")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section41a")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section41b")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section41c")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section41d")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section41e")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section41f")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section41g")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section41h")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section41i")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section41j")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section41k")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section41l")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section41m")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section41n")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section41o")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section41p")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section41q")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section41r")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section41s")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section41t")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section41u")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section41v")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section41w")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section41x")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.hoursVespers.intro14")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section42")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.hoursVespers.intro15")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section43")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.hoursVespers.intro16")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section44")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.hoursVespers.intro17")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section45")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section46")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.hoursVespers.intro18")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section47")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section48")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section49")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section50")}
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}> (3x)</Text>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section51")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.hoursVespers.intro19")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section52")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.comment}>
                        {i18n.t("prayerContent.hoursVespers.section53")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section54")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section55")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section56")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section57")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section58")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.comment}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section59")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.hoursVespers.intro22")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section60")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        <Text style={{fontStyle: 'normal', color: '#ffd33d'}}>Ou: </Text>
                        {i18n.t("prayerContent.hoursVespers.section61")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.comment}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section62")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section63")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section64")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section65")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{i18n.t("prayerContent.hoursVespers.intro23")}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section66")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.comment}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section67")}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {'\t\t\t\t'}{i18n.t("prayerContent.hoursVespers.section68")}
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

import { Text, View, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Link, router } from "expo-router";
import NavButton from "@/components/NavButton";
import { useLanguage } from "@/constants/LanguageContext";
import React, { useState } from 'react';
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import translations from "@/translations.json";
import Orthocal from "@/components/Orthocal";
import CommonSlider from "@/components/CommonSlider";
import { ImageSlider, CommunionSlider } from '@/constants/CommonPrayerSliderData';

const i18n = new I18n(translations);
/*
   /Pseudocode
   /
   /There are two in the tabs to begin. Home, and setting.
   /Later there will be more for prayers which are not of the day
   /You will be able to click on top to change the date.
   /To start, create settings page and home page
   /Add to home a button to go to a calendar and change days
   /*/


export default function Index() {
  const { language } = useLanguage();
  let [locale, setLocale] = useState(Localization.locale);
  i18n.defaultLocale = "en";
  i18n.locale = language;

  return (
      <View style={styles.container}>
          <ScrollView style={styles.scrollView} horizontal={false}>
              <Orthocal></Orthocal>
              <View style = {styles.container}>
                <Text style={[styles.heading, {marginTop: 50,}]}>{i18n.t("pageTitles.commonPrayers")}</Text>
                <CommonSlider itemList={ImageSlider} />
                {/* <NavButton label={i18n.t("pageTitles.morningPrayers")} hasIcon={true} icon="sunrise" onPress={() => router.push("/home/prayers/morning-prayers")} />
                    <NavButton label={i18n.t("pageTitles.throughDayPrayers")} hasIcon={true} icon="sun" onPress={() => router.push("/home/prayers/through-day-prayers")} />
                    <NavButton label={i18n.t("pageTitles.eveningPrayers")} hasIcon={true} icon="moon" onPress={() => router.push("/home/prayers/evening-prayers")} /> */}
                {/* <Text style={styles.heading}>{i18n.t("pageTitles.hours")}</Text>
                    <NavButton label={i18n.t("pageTitles.hoursInstructions")} hasIcon={true} icon="info" onPress={() => router.push("/home/prayers/hours-instructions")} />
                    <NavButton label={i18n.t("pageTitles.hoursVespers")} icon="info" onPress={() => router.push("/home/prayers/hours-vespers")} />
                    <NavButton label={i18n.t("pageTitles.hoursSmallCompline")} icon="info" onPress={() => router.push("/home/prayers/hours-instructions")} />
                    <NavButton label={i18n.t("pageTitles.hoursMatins")} icon="info" onPress={() => router.push("/home/prayers/hours-instructions")} />
                    <NavButton label={i18n.t("pageTitles.hoursFirst")} icon="info" onPress={() => router.push("/home/prayers/hours-instructions")} />
                    <NavButton label={i18n.t("pageTitles.hoursThird")} icon="info" onPress={() => router.push("/home/prayers/hours-instructions")} />
                    <NavButton label={i18n.t("pageTitles.hoursSixth")} icon="info" onPress={() => router.push("/home/prayers/hours-instructions")} />
                    <NavButton label={i18n.t("pageTitles.hoursPsalms")} icon="info" onPress={() => router.push("/home/prayers/hours-instructions")} />
                    <NavButton label={i18n.t("pageTitles.hoursNinth")} icon="info" onPress={() => router.push("/home/prayers/hours-instructions")} />
                    <NavButton label={i18n.t("pageTitles.hoursPaschal")} icon="info" onPress={() => router.push("/home/prayers/hours-instructions")} />
                    <Text style={styles.heading}>{i18n.t("pageTitles.canonsAndHymns")}</Text>
                    <NavButton label={i18n.t("pageTitles.penitentialCanon")} icon="info" onPress={() => router.push("/home/prayers/hours-instructions")} />
                    <NavButton label={i18n.t("pageTitles.theotokosCanon")} icon="info" onPress={() => router.push("/home/prayers/hours-instructions")} />
                    <NavButton label={i18n.t("pageTitles.akathistHymn")} icon="info" onPress={() => router.push("/home/prayers/hours-instructions")} /> */}
                <Text style={styles.heading}>{i18n.t("pageTitles.communion")}</Text>
                <CommonSlider itemList={CommunionSlider} />
                {/* <NavButton label={i18n.t("pageTitles.confessionInstruction")} icon="info" onPress={() => router.push("/home/prayers/hours-instructions")} />
                    <NavButton label={i18n.t("pageTitles.confessionGuide")} icon="info" onPress={() => router.push("/home/prayers/hours-instructions")} />
                    <NavButton label={i18n.t("pageTitles.communionOffice")} icon="info" onPress={() => router.push("/home/prayers/hours-instructions")} />
                    <NavButton label={i18n.t("pageTitles.communionThanks")} icon="info" onPress={() => router.push("/home/prayers/hours-instructions")} /> */}
                {/* <Text style={styles.heading}>{i18n.t("pageTitles.glossary")}</Text>
                    <NavButton label={i18n.t("pageTitles.glossaryPage")} icon="info" onPress={() => router.push("/home/prayers/hours-instructions")} /> */}
                <Text style={{marginBottom: 50,}}></Text>
              </View>
          </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // paddingVertical: 50,
  },
  scrollView: {
    flex: 1,
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  heading: {
      color: '#fff',
      fontSize: 25,
      textAlign: 'center',
      marginBottom: 20,
      marginTop: 30,
  },
});

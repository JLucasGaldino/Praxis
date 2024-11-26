import { Text, View, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Link, router } from "expo-router";
import NavButton from "@/components/NavButton";
import { useLanguage } from "@/constants/LanguageContext";
import React, { useState, useEffect } from 'react';
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import translations from "@/translations.json";
import Orthocal from "@/components/Orthocal";
import CommonSlider from "@/components/CommonSlider";
import { ImageSlider, CommunionSlider, ImageSliderEn, CommunionSliderEn, HoursSliderPt } from '@/constants/CommonPrayerSliderData';

const i18n = new I18n(translations);
i18n.locale = 'pt';

export default function Index() {
  const { language } = useLanguage();

  // Set up state for sliders
  const [imageSlider, setImageSlider] = useState(ImageSlider);
  const [communionSlider, setCommunionSlider] = useState(CommunionSlider);

  useEffect(() => {
    i18n.defaultLocale = "pt";
    i18n.locale = language;

    if (language === 'en') {
      setImageSlider(ImageSliderEn);
      setCommunionSlider(CommunionSliderEn);
    } else {
      setImageSlider(ImageSlider);
      setCommunionSlider(CommunionSlider);
    }

  }, [language])


  return (
      <View style={styles.container}>
          <ScrollView style={styles.scrollView} horizontal={false}>
              <Text style={[styles.heading, {marginBottom: -30,}]}>{i18n.t("pageTitles.synaxarion")}</Text>
              <Orthocal></Orthocal>
              <View style={styles.container}>
                <Text style={styles.heading}>{i18n.t("pageTitles.commonPrayers")}</Text>
                <CommonSlider key={language + "1"} itemList={imageSlider} />
                {/* {language === "pt" ? (
                    <View style={{flex: 1,}}>
                    <Text style={styles.heading}>Horas canónicas</Text>
                    <CommonSlider key={language + "0"} itemList={HoursSliderPt} />
                    </View>
                    ) : (
                    <View></View>
                    )} */}
                <Text style={styles.heading}>{i18n.t("pageTitles.communion")}</Text>
                <CommonSlider key={language + "2"} itemList={communionSlider} />
                <Text style={{marginBottom: 10,}}></Text>
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
  heading2: {
    color: '#999',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: -30,
  }
});

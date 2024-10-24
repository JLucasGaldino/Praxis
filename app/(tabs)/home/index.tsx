import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link, router } from "expo-router";
import NavButton from "@/components/NavButton";
import { useLanguage } from "@/constants/LanguageContext";
import { useState } from 'react';
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import translations from "@/translations.json";

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
          <NavButton label={i18n.t("pageTitles.morningPrayers")} icon="sun" onPress={() => router.push("/home/prayers/morning-prayers")} />
          <NavButton label={i18n.t("pageTitles.eveningPrayers")} icon="moon" onPress={() => router.push("/home/prayers/evening-prayers")} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 50,
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});

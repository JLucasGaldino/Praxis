import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useLanguage } from '@/constants/LanguageContext';
import { useState } from 'react';
import { I18n } from 'i18n-js';
import translations from "@/translations.json";
import * as Localization from 'expo-localization';

const i18n = new I18n(translations);

const Settings = () => {
  const { language, setLanguage } = useLanguage();
  let [locale, setLocale] = useState(Localization.locale);
  i18n.defaultLocale = "en";
  i18n.locale = language;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{i18n.t("settingsContent.languages")}</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={language}
          onValueChange={(itemValue) => setLanguage(itemValue)}
          dropdownIconColor='#fff'
          style={{color: "white"}}
          enabled={false}
        >
          <Picker.Item label={i18n.t("settingsContent.languageSelection.english")} value="en" />
          <Picker.Item label={i18n.t("settingsContent.languageSelection.portuguese")} value="pt" />
        </Picker>
      </View>
      <Text style={styles.text}>{i18n.t("settingsContent.notice")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#25292e',
    justifyContent: 'flex-start',
    paddingVertical: 50,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  pickerContainer: {
    width: 200,
  },
});

export default Settings;

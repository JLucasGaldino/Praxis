import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { en, pt } from '@/localizations';
import { useState } from 'react';
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import translations from "@/translations.json";
import { useLanguage } from "@/constants/LanguageContext";

const i18n = new I18n(translations);

export default function TabLayout() {
  const { language } = useLanguage();
  let [locale, setLocale] = useState(Localization.locale);
  i18n.defaultLocale = "en";
  i18n.locale = language;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#25292e',
          height: 60,
          paddingTop: 5,
          paddingBottom: 5,
          borderColor: '#000',
        },
      }}
    >
      <Tabs.Screen
          name="home"
          options={{
              title: i18n.t("pageTitles.prayers"),
              tabBarIcon: ({ color, focused }) => (
                  <Ionicons name={'book'} color={color} size={24} />
              ),
              headerShown: false,
          }}
      />
      <Tabs.Screen
          name="settings"
          options={{
              title: i18n.t("pageTitles.settings"),
              tabBarIcon: ({color, focused}) => (
                  <Ionicons name={'settings-outline'} color={color} size={24} />
              ),
              headerShown: false,
          }}
      />
    </Tabs>
  );
}

import { Stack } from "expo-router";
import { useLanguage } from "@/constants/LanguageContext";
import { I18n } from 'i18n-js';
import translations from "@/translations.json";

const i18n = new I18n(translations);

export default function Layout() {
    const { language } = useLanguage();
    i18n.defaultLocale = "en";
    i18n.locale = language;
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#25292e',
                },
                headerShadowVisible: false,
                headerTintColor: "#fff",
            }}
        >
            <Stack.Screen name="index" options={{
                headerTitle: i18n.t("pageTitles.prayers"),
            }} />
            <Stack.Screen name="prayers/evening-prayers" options={{
                headerTitle: i18n.t("pageTitles.eveningPrayers"),
            }} />
            <Stack.Screen name="prayers/morning-prayers" options={{
                headerTitle: i18n.t("pageTitles.morningPrayers"),
            }} />
            <Stack.Screen name="prayers/through-day-prayers" options={{
                headerTitle: i18n.t("pageTitles.throughDayPrayers"),
            }} />
            <Stack.Screen name="prayers/hours-instructions" options={{
                headerTitle: i18n.t("pageTitles.hoursInstructions"),
            }} />
            <Stack.Screen name="prayers/hours-vespers" options={{
                headerTitle: i18n.t("pageTitles.hoursVespers"),
            }} />
        </Stack>
    );
}

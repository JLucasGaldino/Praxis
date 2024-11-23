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
            <Stack.Screen name="prayers/evening-prayers-v2" options={{
                headerTitle: i18n.t("pageTitles.eveningPrayers"),
            }} />
            <Stack.Screen name="prayers/through-day-prayers-v2" options={{
                headerTitle: i18n.t("pageTitles.throughDayPrayers"),
            }} />
            <Stack.Screen name="prayers/hours-instructions" options={{
                headerTitle: i18n.t("pageTitles.hoursInstructions"),
            }} />
            <Stack.Screen name="prayers/hours-vespers" options={{
                headerTitle: i18n.t("pageTitles.hoursVespers"),
            }} />
            <Stack.Screen name="prayers/confession-instructions" options={{
                headerTitle: i18n.t("pageTitles.confessionInstruction"),
            }} />
            <Stack.Screen name="prayers/confession-guide" options={{
                headerTitle: i18n.t("pageTitles.confessionGuide"),
            }} />
            <Stack.Screen name="prayers/communion-office" options={{
                headerTitle: i18n.t("pageTitles.communionOffice"),
            }} />
            <Stack.Screen name="prayers/communion-thanks" options={{
                headerTitle: i18n.t("pageTitles.communionThanks"),
            }} />
            <Stack.Screen name="prayers/morning-prayers-v2" options={{
                headerTitle: i18n.t("pageTitles.morningPrayers"),
            }} />
            <Stack.Screen name="prayers/midday-prayers" options={{
                headerTitle: "Midday prayers",
            }} />
            <Stack.Screen name="prayers/occasional-prayers" options={{
                headerTitle: "Occasional prayers",
            }} />
            <Stack.Screen name="prayers/self-examination" options={{
                headerTitle: "Self examination",
            }} />
            <Stack.Screen name="prayers/after-confession" options={{
                headerTitle: "After confession",
            }} />
        </Stack>
    );
}

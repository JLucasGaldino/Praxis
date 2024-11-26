import React, { useContext, useState, useEffect, Suspense, useMemo } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Pressable, Dimensions, ImageBackground, ScrollView, ActivityIndicator } from 'react-native';
import { useLanguage } from "@/constants/LanguageContext";
import { useCalendar } from "@/constants/CalContext";
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import translations from "@/translations.json";
import gregen from "@/assets/orthocal-fetches/gregorian_en.json";
import gregpt from "@/assets/orthocal-fetches/gregorian_pt.json";
import julen from "@/assets/orthocal-fetches/julian_en.json";
import julpt from "@/assets/orthocal-fetches/julian_pt.json";
import DateTimePicker from "@react-native-community/datetimepicker";
import DaySlider from "@/components/DaySlider";
import Ionicons from '@expo/vector-icons/Ionicons';

const i18n = new I18n(translations);
// const gregen = JSON.parse(String(gregorianen));
const {width} = Dimensions.get('screen');

const Orthocal = () => {
    //Language variables
    const { language } = useLanguage();
    let [locale, setLocale] = useState(Localization.locale);
    i18n.defaultLocale = "en";
    i18n.locale = language;

    const { calendar } = useCalendar();


    //DateTimePicker variables
    const [appDate, setAppDate] = useState(new Date());
    const firstDay = new Date(2024, 0, 1);
    const [diffIndex, setDiffIndex] = useState(Math.floor(Math.abs(appDate - firstDay) / (1000 * 60 * 60 * 24)))
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    // Changes date when a new one is selected in the picker
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        currentDate.setHours(0);
        setShow(false);
        setAppDate(currentDate);
        setDiffIndex(Math.floor(Math.abs(currentDate - firstDay) / (1000 * 60 * 60 * 24)))
    };

    // Generates a title for the selected day in the synaxarion
    const weekDay = appDate.getDay();
    const dayNumber = appDate.getDate();
    const monthNumber = appDate.getMonth();
    const yearNumber = appDate.getUTCFullYear();

    let weekDayName = "";
    switch(weekDay) {
            case 0:
            weekDayName = i18n.t("calendar.weekDays.sunday");
            break;
            case 1:
            weekDayName = i18n.t("calendar.weekDays.monday");
            break;
            case 2:
            weekDayName = i18n.t("calendar.weekDays.tuesday");
            break;
            case 3:
            weekDayName = i18n.t("calendar.weekDays.wednesday");
            break;
            case 4:
            weekDayName = i18n.t("calendar.weekDays.thursday");
            break;
            case 5:
            weekDayName = i18n.t("calendar.weekDays.friday");
            break;
            case 6:
            weekDayName = i18n.t("calendar.weekDays.saturday");
            break;
            default:
            weekDayName = "Error";
    }

    const monthName = i18n.t("calendar.monthNames." + String(monthNumber));

    let dateTitle = "";
    if (language === 'pt') {
        dateTitle = weekDayName + ", " + String(dayNumber) + " de " + monthName + ", " + String(yearNumber);
    } else if (language === 'en') {
        dateTitle = weekDayName + ", " + monthName + " " + String(dayNumber) + ", " + String(yearNumber);
    }

    // Initiates synaxList variable, which contains all relevant synaxarion information for the chosen day
    const fallbackSynaxList = [
        {
            title: 'Please select a language and calendar',
            image: require('@/assets/images/saints.jpg'),
            description: 'Selecione uma língua e um calendário',
        },
        {
            title: 'Please select a language and calendar',
            image: require('@/assets/images/saints.jpg'),
            description: 'Selecione uma língua e um calendário',
        },
        {
            title: 'Please select a language and calendar',
            image: require('@/assets/images/saints.jpg'),
            description: 'Selecione uma língua e um calendário',
        },
    ];
    const [synaxList, setSynaxList] = useState(fallbackSynaxList);

    // Extracts information from one of the json source files
    const generateDescriptions = (langCal, index) => {
        return({
            titles: langCal[index].titles.join(" • "),
            fasting: langCal[index].fast_exception_desc === "" ? langCal[index].fast_level_desc : langCal[index].fast_level_desc + " — " + langCal[index].fast_exception_desc,
            commemorations: langCal[index].feasts === null || langCal[index].saints === null ? (langCal[index].feasts === null ? langCal[index].saints.join(" • ") : langCal[index].feasts.join(" • ")) : langCal[index].feasts.concat(langCal[index].saints).join(" • "),
            readings: langCal[index].abbreviated_reading_indices.map((i) => langCal[index].readings[i].display).join(" • "),
        });
    };

    // Listens to changes in calendar, language, and date, and updates the content of the synaxarion
    useEffect(() => {
        const newLangCal = () => {
            let langCal = {};
            let langCalString = String(calendar) + String(language);
            switch(langCalString) {
                case 'julen':
                    langCal = julen;
                    break;
                case 'julpt':
                    langCal = julpt;
                    break;
                case 'gregen':
                    langCal = gregen;
                    break;
                case 'gregpt':
                    langCal = gregpt;
            }
            return(langCal);
        };
        const generateSynax = () => {
            return([
                {
                    title: generateDescriptions(newLangCal(), diffIndex).titles,
                    image: require('@/assets/images/title.jpg'),
                    description: generateDescriptions(newLangCal(), diffIndex).fasting,
                },
                {
                    title: i18n.t('cardContent.commemorations'),
                    image: require('@/assets/images/saints.jpg'),
                    description: generateDescriptions(newLangCal(), diffIndex).commemorations,
                },
                {
                    title: i18n.t("cardContent.readings"),
                    image: require('@/assets/images/bible.jpg'),
                    description: generateDescriptions(newLangCal(), diffIndex).readings,
                },
            ]);
        };
        setSynaxList(generateSynax());
    }, [language, calendar, diffIndex]);

    return (
        <View>
            <View style={styles.container}>
                <Pressable onPress={showDatepicker}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Ionicons style={{marginBottom: 10,}} name="calendar" size={25} color="#999" />
                        <Text style={[styles.heading2, {marginTop: 0}]}> {dateTitle}</Text>
                    </View>
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={appDate}
                            mode={mode}
                            is24Hour={true}
                            onChange={onChange}
                            minimumDate={new Date(2024, 0, 1)}
                            maximumDate={new Date(2026, 11, 31)}
                        />
                    )}
                </Pressable>
            </View>
            <Suspense fallback={<ActivityIndicator size="large" color="blue"/>}>
                <DaySlider key={JSON.stringify(synaxList)} itemList={synaxList} />
            </Suspense>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
        borderRadius: 20,
        overflow: 'hidden',
    },
    image: {
        minHeight: 500,
        maxHeight: 1000,
        flex: 1,
        width: 300,
        borderRadius: 20,
        justifyContent: 'flex-start'
        /*         overflow: 'hidden', */
    },
    background: {
        /*         overflow: 'hidden', */
        position: 'absolute',
        minHeight: 500,
        maxHeight: 1000,
        flex: 1,
        width: 300,
        padding: 20,
        borderRadius: 20,
        justifyContent: 'flex-start',
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        letterSpacing: 1.5,
        textAlign: 'center',
    },
    title2: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '400',
        letterSpacing: 1.5,
        textAlign: 'center',
        marginTop: 30,
    },
    container: {
        marginTop:30,
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        padding: 16,
        backgroundColor: '#25292e',
    },
    heading: {
        fontSize: 25,
        marginBottom: 20,
        marginTop: 30,
        textAlign: 'center',
        color: '#fff',
    },
    heading2: {
        fontSize: 18,
        color: '#999',
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 10,
    },
    seeMore: {
        color: '#999',
        textAlign: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
    },
    item: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        marginVertical: 8,
        borderRadius: 8,
    },
});

export default Orthocal;

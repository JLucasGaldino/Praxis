import React, { useState, useEffect, Suspense } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Pressable, Dimensions, ImageBackground, ScrollView } from 'react-native';
import axios from 'axios';
import { useLanguage } from "@/constants/LanguageContext";
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import translations from "@/translations.json";
import DateTimePicker from "@react-native-community/datetimepicker";
import ReadMore from '@fawazahmed/react-native-read-more';
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance, Pagination } from "react-native-reanimated-carousel";
import { LinearGradient } from 'expo-linear-gradient';
import DaySlider from "@/components/DaySlider";
import { ImageSlider } from "@/constants/CommonPrayerSliderData";

const i18n = new I18n(translations);
const {width} = Dimensions.get('screen');

let testerester = [];

//ATTENTION: API REQUEST SHOULD BE DONE AT EVERY BUTTON CLICK

const Orthocal = () => {
    //Language variables
    const { language } = useLanguage()
    let [locale, setLocale] = useState(Localization.locale);
    i18n.defaultLocale = "en";
    i18n.locale = language;


    //DateTimePicker variables
    const [appDate, setAppDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const today = new Date();
    const dayOne = new Date(2024, 8, 28);
    const diffTime = Math.abs(today - dayOne); //Standard diff in time, as fallback
    const dateIndexFallback = Math.floor(diffTime / (1000 * 60 * 60 * 24));


    const praxisApiUrlFallback = `https://praxis-prayers-default-rtdb.europe-west1.firebasedatabase.app/VCALENDAR/0/VEVENT/${dateIndexFallback}.json`
    const [praxisApiUrl, setPraxisApiUrl] = useState(praxisApiUrlFallback);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setAppDate(currentDate);
        fetchDate(`https://praxis-prayers-default-rtdb.europe-west1.firebasedatabase.app/VCALENDAR/0/VEVENT/${Math.floor(Math.abs(currentDate - dayOne) / (1000 * 60 * 60 * 24))}.json`); //Should happen simultaneously
    };

    //Create function declaration that takes takes the url and gets all the information
    const [date, setDate] = useState([]);
    const [fastLevel, setFastLevel] = useState([]);
    const [commemorations, setCommemorations] = useState([]);
    const [readings, setReadings] = useState([]);
    const [summary, setSummary] = useState([]);
    const [tester, setTester] = useState([]);
    const [orthocalInfo, setOrthocalInfo] = useState([]);

    //Day message
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
    } else {
        dateTitle = "Error";
    }

    useEffect(() => {
        fetchDate();
    }, []);

    const fetchDate = async (url = praxisApiUrlFallback) => {
        try {
            const response = await axios.get(url);
            setDate(response.data);
            setSummary(response.data.SUMMARY)

            const fullDescription = response.data.DESCRIPTION;

            // Separators
            const firstSeparator = fullDescription.search(/\\n\\n/) //Separates fast level from the rest

            const fastDescription = fullDescription.slice(0, firstSeparator).toUpperCase();
            setFastLevel(fastDescription);

            const lastSeparator = fullDescription.length - fullDescription.split("").reverse().join("").search(/n\\n\\/); //Separates link at the end from the rest
            const commemorationsAndReadingsDescription = fullDescription.slice(firstSeparator + 4, lastSeparator - 4);
            const beforeLastSeparator = commemorationsAndReadingsDescription.length - commemorationsAndReadingsDescription.split("").reverse().join("").search(/n\\n\\/);

            const readingsDescriptionUnprocessed = commemorationsAndReadingsDescription.slice(beforeLastSeparator);
            const commemorationsDescriptionUnprocessed = commemorationsAndReadingsDescription.slice(0, beforeLastSeparator - 4);

            let commemorationsDescriptionArray = [];
            commemorationsDescriptionArray.push(commemorationsDescriptionUnprocessed);
            while (commemorationsDescriptionArray[commemorationsDescriptionArray.length - 1].search(/\\n\\n/) !== -1) {
                let separatorIndex = commemorationsDescriptionArray[commemorationsDescriptionArray.length - 1].search(/\\n\\n/);
                let firstCommemorations = commemorationsDescriptionArray[commemorationsDescriptionArray.length - 1].slice(0, separatorIndex);
                let nextCommemorations = commemorationsDescriptionArray[commemorationsDescriptionArray.length - 1].slice(separatorIndex + 4);
                commemorationsDescriptionArray.pop();
                commemorationsDescriptionArray.push(firstCommemorations);
                commemorationsDescriptionArray.push(nextCommemorations);
            }

            setCommemorations(commemorationsDescriptionArray.join(" • "));


            // Processing readings
            let readingsDescriptionArray = [];
            readingsDescriptionArray.push(readingsDescriptionUnprocessed);
            while (readingsDescriptionArray[readingsDescriptionArray.length - 1].search(/\\n/) !== -1) {
               // Create an empty array outside. While not true, remove and push first part into an array of strings. Continue with remnant. Repeat.
                //Replace reading description by while lastelement of array has /\\n/
                let separatorIndex = readingsDescriptionArray[readingsDescriptionArray.length - 1].search(/\\n/);
                let firstReadings = readingsDescriptionArray[readingsDescriptionArray.length - 1].slice(0, separatorIndex);
                let nextReadings = readingsDescriptionArray[readingsDescriptionArray.length - 1].slice(separatorIndex + 2);
                readingsDescriptionArray.pop();
                readingsDescriptionArray.push(firstReadings);
                readingsDescriptionArray.push(nextReadings);

            }
            setReadings(readingsDescriptionArray.join(" • "));
            console.log('Summary:', summary);
            console.log('Fast Level:', fastLevel);
            console.log('Commemorations:', commemorations);
            console.log('Readings:', readings);

            setOrthocalInfo([
                {
                    title: String(summary),
                    image: require('@/assets/images/orthodox-date.jpg'),
                    description: String(fastLevel),
                    link: '/home/prayers/morning-prayers'
                },
                {
                    title: "COMEMORAÇÕES",
                    image: require('@/assets/images/orthodox-date.jpg'),
                    description: String(commemorations),
                    link: '/home/prayers/morning-prayers'
                },
                {
                    title: "LEITURAS",
                    image: require('@/assets/images/orthodox-date.jpg'),
                    description: String(readings),
                    link: '/home/prayers/morning-prayers'
                }
            ]);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <View>
            <View style={styles.container}>
                <Pressable onPress={showDatepicker}>
                    <Text style={styles.heading}>{dateTitle}</Text>
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={appDate}
                            mode={mode}
                            is24Hour={true}
                            onChange={onChange}
                        />
                    )}
                </Pressable>
                <View style={styles.itemContainer}>
                    <ImageBackground source={require('@/assets/images/orthodox-date.jpg')} style={styles.image}>
                        <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={styles.background}>
                            <Text style={styles.title}>{String(summary)}</Text>
                            <Text style={styles.title2}>{String(fastLevel)}</Text>
                            <Text style={styles.title2}>COMEMORAÇÕES</Text>
                            <Text style={styles.text}>{String(commemorations)}</Text>
                            <Text style={styles.text}>{String(orthocalInfo)}</Text>
                            {/* <ReadMore
                                numberOfLines={2}
                                style={styles.text}
                                seeMoreStyle={styles.seeMore}
                                seeMoreText={i18n.t("dailyPrayers.seeMore")}
                                seeLessText={i18n.t("dailyPrayers.seeLess")}
                                seeLessStyle={styles.seeMore}
                                seeMoreContainerStyleSecondary={{position: 'relative', alignSelf: 'center'}}
                                ellipsis={""}
                                >
                                {String(commemorations)}
                                </ReadMore> */}
                            <Text style={styles.title2}>LEITURAS</Text>
                            <Text style={styles.text}>{String(readings)}</Text>
                            {/* <ReadMore
                                numberOfLines={2}
                                style={styles.text}
                                seeMoreStyle={styles.seeMore}
                                seeMoreText={i18n.t("dailyPrayers.seeMore")}
                                seeLessText={i18n.t("dailyPrayers.seeLess")}
                                seeLessStyle={styles.seeMore}
                                seeMoreContainerStyleSecondary={{position: 'relative', alignSelf: 'center'}}
                                ellipsis={""}
                                >
                                {String(readings)}
                                </ReadMore> */}
                        </LinearGradient>
                    </ImageBackground>
                </View>
            </View>
            <DaySlider itemList={ImageSlider} />
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
        color: '#ffd33d',
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

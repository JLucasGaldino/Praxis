import { Dimensions, Image, StyleSheet, Text, View, Pressable } from 'react-native';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ImageSliderType } from '@/constants/CommonPrayerSliderData';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { useLanguage } from "@/constants/LanguageContext";
import { I18n } from 'i18n-js';
import translations from "@/translations.json";

const i18n = new I18n(translations);

//Afterwards, make them clickable with item.link as described in the data tsx

type Props = {
    item: ImageSliderType;
    index: number;
    scrollX: ShareValue<number>
};

const {width} = Dimensions.get('screen');

const SliderItem = ({ item, index, scrollX }: Props) => {
    const { language } = useLanguage();
    i18n.defaultLocale = "en";
    i18n.locale= language;

    const rnAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: interpolate(
                        scrollX.value,
                        [(index - 1) * width, index * width, (index + 1) * width],
                        [-width * 0.2, 0, width * 0.2],
                        Extrapolation.CLAMP
                    ),
                },
                {
                    scale: interpolate(
                        scrollX.value,
                        [(index - 1) * width, index * width, (index + 1) * width],
                        [0.9, 1, 0.9],
                        Extrapolation.CLAMP
                    ),
                }
            ]
        }
    });

    const [actualTitle, setActualTitle] = useState(item.title);
    const [actualDescription, setActualDescription] = useState(item.description);

    if (actualTitle === 'Morning Prayers') {
        setActualTitle(i18n.t("pageTitles.morningPrayers"));
    } else if (actualTitle === 'Daily Prayers') {
        setActualTitle(i18n.t("pageTitles.throughDayPrayers"));
    } else if (actualTitle === 'Evening Prayers') {
        setActualTitle(i18n.t("pageTitles.eveningPrayers"));
    } else if (actualTitle === 'confession instructions') {
        setActualTitle(i18n.t("pageTitles.confessionInstruction"));
    } else if (actualTitle === 'confession guide') {
        setActualTitle(i18n.t("pageTitles.confessionGuide"));
    } else if (actualTitle === 'communion office') {
        setActualTitle(i18n.t("pageTitles.communionOffice"));
    } else if (actualTitle === 'communion thanks') {
        setActualTitle(i18n.t("pageTitles.communionThanks"));
    } else if (actualTitle === 'Midday Prayers') {
        setActualTitle(i18n.t("pageTitles.middayPrayers"));
    } else if (actualTitle === 'Occasional Prayers') {
        setActualTitle(i18n.t("pageTitles.occasionalPrayers"))
    }

    if (actualDescription === 'morning prayers') {
        setActualDescription(i18n.t("pageDescriptions.morningPrayers"));
    } else if (actualDescription === 'daily prayers') {
        setActualDescription(i18n.t("pageDescriptions.throughDayPrayers"));
    } else if (actualDescription === 'evening prayers') {
        setActualDescription(i18n.t("pageDescriptions.eveningPrayers"));
    } else if (actualDescription === 'confession instructions') {
        setActualDescription(i18n.t("pageDescriptions.confessionInstruction"));
    } else if (actualDescription === 'confession guide') {
        setActualDescription(i18n.t("pageDescriptions.confessionGuide"));
    } else if (actualDescription === 'communion office') {
        setActualDescription(i18n.t("pageDescriptions.communionOffice"));
    } else if (actualDescription === 'communion thanks') {
        setActualDescription(i18n.t("pageDescriptions.communionThanks"))
    } else if (actualDescription === 'midday prayers') {
        setActualDescription(i18n.t("pageDescriptions.middayPrayers"));
    } else if (actualDescription === 'occasional prayers') {
        setActualDescription(i18n.t("pageDescriptions.occasionalPrayers"));
    }

    return (
        <Animated.View style={[styles.itemContainer, rnAnimatedStyle]}>
            <Pressable onPress={() => router.push(item.link)}>
                <Image source={item.image} style={{width: 300, height: 500, borderRadius: 20,}} />
                <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={styles.background}>
                    <View style={{gap: 10,}}>
                        <Text style={styles.title}>{actualTitle}</Text>
                        <Text style={styles.description}>{actualDescription}</Text>
                    </View>
                </LinearGradient>
            </Pressable>
        </Animated.View>
    );
}

export default SliderItem

const styles=StyleSheet.create({
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        width: width,
    },
    background: {
        position: 'absolute',
        height: 500,
        width: 300,
        padding: 20,
        borderRadius: 20,
        justifyContent: 'flex-end',
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        letterSpacing: 1.5,
    },
    description: {
        color: '#fff',
        fontSize: 12,
        letterSpacing: 1.2,
    },
});

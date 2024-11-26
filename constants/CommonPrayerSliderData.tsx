import { ImageSourcePropType } from "react-native";
import translations from "@/translations.json";
import { I18n } from 'i18n-js';

const i18n = new I18n(translations);

export type ImageSliderType = {
    title: string;
    image: ImageSourcePropType;
    description: string;
};

export const ImageSlider = [
    {
        title: 'Matinais',
        image: require('@/assets/images/orthodox-morning.jpg'),
        description: 'Orações matinais',
        link: '/home/prayers/morning-prayers-v2'
    },
    {
        title: 'Ao longo do dia',
        image: require('@/assets/images/orthodox-day.jpg'),
        description: 'Orações a serem ditas ao longo do dia',
        link: '/home/prayers/through-day-prayers-v2'
    },
    {
        title: 'Antes de dormir',
        image: require('@/assets/images/orthodox-night.jpg'),
        description: 'Orações para antes de dormir',
        link: '/home/prayers/evening-prayers-v2'
    },
];

export const ImageSliderEn = [
    {
        title: 'Morning Prayers',
        image: require('@/assets/images/orthodox-morning.jpg'),
        description: '',
        link: '/home/prayers/morning-prayers-v2'
    },
    {
        title: 'Midday Prayers',
        image: require('@/assets/images/orthodox-day.jpg'),
        description: '',
        link: '/home/prayers/midday-prayers'
    },
    {
        title: 'Evening Prayers',
        image: require('@/assets/images/orthodox-night.jpg'),
        description: '',
        link: '/home/prayers/evening-prayers-v2'
    },
    {
        title: 'Occasional Prayers',
        image: require('@/assets/images/orthodox-day.jpg'),
        description: 'Prayers for every occasion',
        link: '/home/prayers/occasional-prayers'
    },
];

export const CommunionSlider = [
    {
        title: 'Breve instrução',
        image: require('@/assets/images/orthodox-confession-instruction.jpg'),
        description: 'sobre a confissão',
        link: '/home/prayers/confession-instructions'
    },
    {
        title: 'Guia',
        image: require('@/assets/images/orthodox-confession-guide.jpg'),
        description: 'para a confissão',
        link: '/home/prayers/confession-guide'
    },
    {
        title: 'Ofício particular preparatório',
        image: require('@/assets/images/orthodox-communion-office.jpg'),
        description: 'para a Sagrada Comunhão',
        link: '/home/prayers/communion-office'
    },
    {
        title: 'Orações de ação de graças',
        image: require('@/assets/images/orthodox-communion-thanks.jpg'),
        description: 'pela Sagrada Comunhão',
        link: '/home/prayers/communion-thanks'
    },
];

export const CommunionSliderEn = [
    {
        title: 'Self examination',
        image: require('@/assets/images/orthodox-confession-instruction.jpg'),
        description: 'before confession',
        link: '/home/prayers/self-examination'
    },
    {
        title: 'Prayers after confession',
        image: require('@/assets/images/orthodox-confession-guide.jpg'),
        description: '',
        link: '/home/prayers/after-confession'
    },
    {
        title: 'Prayers in preparation',
        image: require('@/assets/images/orthodox-communion-office.jpg'),
        description: 'for Holy Communion',
        link: '/home/prayers/communion-office'
    },
    {
        title: 'Prayers of thanksgiving',
        image: require('@/assets/images/orthodox-communion-thanks.jpg'),
        description: 'after Holy Communion',
        link: '/home/prayers/communion-thanks'
    },
];

export const HoursSliderPt = [
    {
        title: "Introdução",
        image: require('@/assets/images/orthodox-communion-thanks.jpg'),
        description: 'ao ofício das horas canónicas',
        link: '/home/prayers/hours-instructions'
    },
    {
        title: "Ofício de vésperas",
        image: require('@/assets/images/orthodox-communion-thanks.jpg'),
        description: '',
        link: '/home/prayers/hours-vespers'
    },
    {
        title: "Introdução3",
        image: require('@/assets/images/orthodox-communion-thanks.jpg'),
        description: 'ao ofício das horas canónicas',
        link: '/home/prayers/hours-instructions'
    },
];

import { ImageSourcePropType } from "react-native";

export type ImageSliderType = {
    title: string;
    image: ImageSourcePropType;
    description: string;
};

export const ImageSlider = [
    {
        title: 'Morning Prayers',
        image: require('@/assets/images/orthodox-morning.jpg'),
        description: 'morning prayers',
        link: '/home/prayers/morning-prayers-v2'
    },
    {
        title: 'Daily Prayers',
        image: require('@/assets/images/orthodox-day.jpg'),
        description: 'daily prayers',
        link: '/home/prayers/through-day-prayers-v2'
    },
    {
        title: 'Evening Prayers',
        image: require('@/assets/images/orthodox-night.jpg'),
        description: 'evening prayers',
        link: '/home/prayers/evening-prayers-v2'
    },
];

export const ImageSliderEn = [
    {
        title: 'Morning Prayers',
        image: require('@/assets/images/orthodox-morning.jpg'),
        description: 'morning prayers',
        link: '/home/prayers/morning-prayers-v2'
    },
    {
        title: 'Midday Prayers',
        image: require('@/assets/images/orthodox-day.jpg'),
        description: 'midday prayers',
        link: '/home/prayers/through-day-prayers-v2'
    },
    {
        title: 'Evening Prayers',
        image: require('@/assets/images/orthodox-night.jpg'),
        description: 'evening prayers',
        link: '/home/prayers/evening-prayers-v2'
    },
    {
        title: 'Occasional Prayers',
        image: require('@/assets/images/orthodox-day.jpg'),
        description: 'occasional prayers',
        link: '/home/prayers/evening-prayers-v2'
    },
];

export const CommunionSlider = [
    {
        title: 'confession instructions',
        image: require('@/assets/images/orthodox-confession-instruction.jpg'),
        description: 'confession instructions',
        link: '/home/prayers/confession-instructions'
    },
    {
        title: 'confession guide',
        image: require('@/assets/images/orthodox-confession-guide.jpg'),
        description: 'confession guide',
        link: '/home/prayers/confession-guide'
    },
    {
        title: 'communion office',
        image: require('@/assets/images/orthodox-communion-office.jpg'),
        description: 'communion office',
        link: '/home/prayers/communion-office'
    },
    {
        title: 'communion thanks',
        image: require('@/assets/images/orthodox-communion-thanks.jpg'),
        description: 'communion thanks',
        link: '/home/prayers/communion-thanks'
    },
];

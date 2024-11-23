import { Dimensions, StyleSheet, View, LayoutChangeEvent } from 'react-native';
import React, { useState } from 'react';
import { ImageSliderType } from '@/constants/CommonPrayerSliderData';
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';

type Props = {
    items: ImageSliderType[];
    paginationIndex: number;
    scrollX: SharedValue<number>;
};

const { width } = Dimensions.get('screen');

// Define a fixed maximum number of items that can be rendered in the slider
const MAX_ITEMS = 10;

const Pagination = ({ items, paginationIndex, scrollX }: Props) => {
    const [containerWidth, setContainerWidth] = useState(0);

    const handleLayout = (event: LayoutChangeEvent) => {
        const { width } = event.nativeEvent.layout;
        setContainerWidth(width);
    };

    // Pad the items array to ensure it's always a fixed length
    const paddedItems = [...items, ...new Array(MAX_ITEMS - items.length).fill(null)];

    // Calculate the total width of the visible dots (including margins)
    const totalPaginationWidth = items.length * 12; // 12 = 8 (dot width) + 2*2 (margins)

    // Calculate the available space on the left and right to center the dots
    const marginLeft = (containerWidth - totalPaginationWidth) / 2;

    return (
        <View
            style={styles.container}
            onLayout={handleLayout} // Capture the layout of the parent container
        >
            {/* Dynamically center the pagination dots */}
            <View
                style={[
                    styles.paginationWrapper,
                    {
                        // Adjusting the marginLeft to center the visible dots correctly
                        marginLeft: marginLeft > 0 ? marginLeft : 0, // Ensure no negative margin
                    },
                ]}
            >
                {paddedItems.map((_, index) => {
                    const animatedStyle = useAnimatedStyle(() => {
                        const dotWidth = interpolate(
                            scrollX.value,
                            [(index - 1) * width, index * width, (index + 1) * width],
                            [8, 20, 8],
                            Extrapolation.CLAMP
                        );
                        return { width: dotWidth };
                    });

                    const opacityStyle = useAnimatedStyle(() => {
                        const opacity = index < items.length ? 1 : 0;
                        return { opacity };
                    });

                    return (
                        <Animated.View
                            key={index}
                            style={[
                                styles.dot,
                                animatedStyle,
                                opacityStyle,
                                { backgroundColor: paginationIndex === index ? '#fff' : '#888' },
                            ]}
                        />
                    );
                })}
            </View>
        </View>
    );
};

export default Pagination;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginRight: 65,
    },
    dot: {
        backgroundColor: '#aaa',
        height: 8,
        width: 8,
        marginHorizontal: 2,
        borderRadius: 8,
    },
    paginationWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
});

import { FlatList, StyleSheet, Text, View, ViewToken } from 'react-native';
import React, { useState, useRef } from 'react';
import { ImageSlider, ImageSliderType } from '@/constants/CommonPrayerSliderData';
/* import Pagination from '@/components/Pagination'; */
import SliderItem from './SliderItem';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';

type Props = {
    itemList: ImageSliderType[]
}

const CommonSlider = ({itemList} : Props) => {
    const scrollX = useSharedValue(0);
    const [paginationIndex, setPaginationIndex] = useState(0);

    const onScrollHandler = useAnimatedScrollHandler({
        onScroll: (e) => {
            scrollX.value = e.contentOffset.x;
        }
    });

    const onViewableItemsChanged = ({viewableItems} : {viewableItems: ViewToken[]}) => {
        if (viewableItems[0].index !== undefined && viewableItems[0].index !== null) {
            setPaginationIndex(viewableItems[0].index);
        }
    }

    const viewabilityConfig = {
        itemVisiblePercentThreshold: 50
    }

    const viewabilityConfigCallbackPairs = useRef([
        {viewabilityConfig, onViewableItemsChanged}
    ]);

    return (
        <View style={{flex: 1}}>
            <Animated.FlatList
                data={itemList}
                renderItem={({item, index}) => (
                    <SliderItem item={item} index={index} scrollX={scrollX} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={onScrollHandler}
                scrollEventThrottle={16}
                removeClippedSubviews={false}
                viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
            />
            {/* <Pagination items={itemList} scrollX={scrollX} paginationIndex={paginationIndex} /> */}
        </View>
    );
}

export default CommonSlider

const styles = StyleSheet.create({});

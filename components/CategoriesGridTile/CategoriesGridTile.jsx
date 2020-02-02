import React from 'react';
import { View, Text, TouchableOpacity, Platform, TouchableNativeFeedback  } from 'react-native';
import { style } from './style';

const CategoriesGridTile = props => {
    const { title, color } = props.catogery.item;

    let TouchableComponent = TouchableOpacity;

    if(Platform.OS === "android" && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <View style={style.gridItem}>
            <TouchableComponent style={{ flex: 1 }} onPress={props.onSelect}>
                <View style={{ ...style.container, backgroundColor: color }}>
                    <Text style={style.title}>{title}</Text>
                </View>
            </TouchableComponent>
        </View>
    );
}

export default CategoriesGridTile;
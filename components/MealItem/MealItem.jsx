import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { style } from './style';
import DefualtText from '../DefualtText/DefualtText';

const MealItem = props => {
    const { title, duration, complexity, affordability, imageUrl } = props.itemData.item;
    return (
        <View style={style.mealItemContainer}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{...style.mealRow, ...style.mealHeader}}>
                        <ImageBackground source={{ uri: imageUrl }} style={style.bgImage}>
                            <View style={style.titleContainer}>
                                <Text numberOfLines={1} style={style.title}>{title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...style.mealRow, ...style.mealDeatils}} >
                        <DefualtText>{`${duration} m`}</DefualtText>
                        <DefualtText>{complexity.toUpperCase()}</DefualtText>
                        <DefualtText>{affordability.toUpperCase()}</DefualtText>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default MealItem;
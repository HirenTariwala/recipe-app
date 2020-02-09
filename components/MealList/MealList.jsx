import React from 'react';
import { FlatList } from 'react-native';
import { style } from './style';
import MealItem from '../MealItem/MealItem';

const MealList = props => {
    
    /**
     * Render Meal items
     * @param {*} itemData
     */
    const renderMealData = itemData => {
        return <MealItem itemData={itemData} onSelectMeal={() => props.onSelectMeal(itemData)} />;
    }

    return (
        <FlatList
            style={style.mealList} 
            data={props.displayedMeals} 
            keyExtractor={(item) => item.id} 
            renderItem={renderMealData}
        />
    ) 

}

export default MealList;
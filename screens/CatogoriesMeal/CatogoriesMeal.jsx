import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import MealList from '../../components/MealList/MealList'; 
import { style } from './style';
import DefualtText from '../../components/DefualtText/DefualtText';

// We can use props.navigation.goBack() as well but it is only work for stack navigation.
// props.navigation.getParam() get value of any param which set during navaigation.

const CatogoriesMeal = props => {

    // meal reducer
    const mealReducer = useSelector(state => state.mealReducer);

    // catogery
    const catogery = props.navigation.getParam('catogery');

    // filter by category
    const displayedMeals = mealReducer.filteredMeals.filter(meal => meal.catIds.includes(catogery.id));

    /**
     * Handle on select meal
     * @param {*} mealDetails 
     */
    const onSelectMeal = (mealDetails) => {
        props.navigation.navigate('MealDetails', { mealDetails });
    }

    return (
        <View style={style.screen}>
            { displayedMeals.length ? <MealList displayedMeals={displayedMeals} onSelectMeal={onSelectMeal} /> 
            : <DefualtText>No Meals Found.</DefualtText>
            }
        </View>
    );
}

// Set navigation options dynamic. 
CatogoriesMeal.navigationOptions = ({ navigation }) => ({
    headerTitle: `${navigation.getParam('catogery').title} `,
})

export default CatogoriesMeal;
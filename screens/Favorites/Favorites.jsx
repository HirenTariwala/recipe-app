import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import MealList from '../../components/MealList/MealList';
import { style } from './style';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/HeaderButton/HeaderButton';
import DefualtText from '../../components/DefualtText/DefualtText';

const Favorites = props => {

    // get favoritesMeals from meal Reducer
    const favoritesMeals = useSelector(state => state.mealReducer.favoritesMeals);

    /**
     * Handle on select meal
     * @param {*} mealDetails 
     */
    const onSelectMeal = (mealDetails) => {
        props.navigation.navigate('MealDetails', { mealDetails });
    }

    return (
        <View style={style.screen}>
            { favoritesMeals.length ? <MealList displayedMeals={favoritesMeals} onSelectMeal={onSelectMeal} /> 
                : <DefualtText>No Favorite Meal Found</DefualtText>
            }
        </View>
    );
}

// Set navigation options dynamic. 
// using HeaderButtons we can register multiple header icon button
Favorites.navigationOptions = ({ navigation }) => ({
    headerTitle: 'Your Favorites',
    headerLeft: <HeaderButtons
        HeaderButtonComponent={HeaderButton}
    >
        <Item iconName='ios-menu' title='menu' onPress={() => { navigation.toggleDrawer(); }} />
    </HeaderButtons>
})


export default Favorites;
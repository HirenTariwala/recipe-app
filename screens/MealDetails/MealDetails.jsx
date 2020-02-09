import React, { useCallback, useEffect } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/HeaderButton/HeaderButton';
import DefualtText from '../../components/DefualtText/DefualtText'; 
import { style } from './style'
import { toggleFavMeal } from '../../store/actions/mealActions';

const ListItem = props => <View style={style.listItem}><Text>{props.children}</Text></View>

const MealDetails = props => {

    const { navigation } = props;

    // Meal Details
    const mealDetails = props.navigation.getParam('mealDetails');

    const { id, duration, complexity, affordability, imageUrl, ingridients, steps } = mealDetails.item;

    // create dispatcher to create any action
    const dispatch = useDispatch();
   
    const favoritesList = useSelector(state => state.mealReducer.favoritesMeals);

    // check is already in favorite list
    const isFav = favoritesList.find(meal => meal.id === id);

    useEffect(() => {
        // set param isFav to check meal already favorite so we can change icon according on header
        navigation.setParams({ isFav });
    }, [isFav])

    /**
     * Handle toggle fav 
     */
    const onToggleFav = useCallback(() => {
        dispatch(toggleFavMeal(id));
    }, [mealDetails]);

    useEffect(() => {
        // set param onToggleFav so we can use on click favorite
        navigation.setParams({ onToggleFav });
    }, [onToggleFav]) 

    return (
        <ScrollView style={style.screen}>
            <Image style={style.image} source={{ uri: imageUrl }} />
            <View style={style.details}>
                <DefualtText>{`${duration} m`}</DefualtText>
                <DefualtText>{complexity.toUpperCase()}</DefualtText>
                <DefualtText>{affordability.toUpperCase()}</DefualtText>
            </View>
            <Text style={style.title}>Ingredeints</Text>
            {ingridients.map(ingridient => <ListItem key={ingridient}>{ingridient}</ListItem>)}
            <Text style={style.title}>Steps</Text>
            {steps.map(step => <ListItem key={step}>{step}</ListItem>)}
        </ScrollView>   
    );
}

// Set navigation options dynamic. 
// using HeaderButtons we can register multiple header icon button
MealDetails.navigationOptions = ({ navigation }) => ({
    headerTitle: `${navigation.getParam('mealDetails').item.title} `,
    headerRight: <HeaderButtons
        HeaderButtonComponent={HeaderButton}
    >
        <Item iconName={!navigation.getParam('isFav') ? 'ios-star-outline' : 'ios-star'} title='favorite' onPress={navigation.getParam('onToggleFav')} />
    </HeaderButtons>
})

export default MealDetails;
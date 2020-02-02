import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Catogories from '../screens/Catogories/Catogories';
import CatogoriesMeals from '../screens/CatogoriesMeal/CatogoriesMeal';
import MealDeatils from '../screens/MealDetails/MealDetails';
import Colors from '../common/styles/Colors';

/**
 * createAppContainer to wrap root navigation.
 * Register All screen here on which want to navigate.
 * initialRouteName as first screen which load first on app load.
 * defaultNavigationOptions is defualt settings for all screen.
 */

export default createAppContainer(createStackNavigator({
    Catogories: {
        screen: Catogories,
        navigationOptions: {
            headerTitle: 'Meal Categories'
        }
    },
    CatogoriesMeals,
    MealDeatils
},{
    initialRouteName: 'Catogories',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === "android" ? Colors.accentColor : Colors.primaryColor,
        headerTitleAlign: 'center'
    }
}))
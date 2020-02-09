import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import Catogories from '../screens/Catogories/Catogories';
import CatogoriesMeals from '../screens/CatogoriesMeal/CatogoriesMeal';
import MealDetails from '../screens/MealDetails/MealDetails';
import Favorites from '../screens/Favorites/Favorites';
import Filter from '../screens/Filter/Filter';
import Colors from '../common/styles/Colors';

/**
 * createAppContainer to wrap root navigation.
 * Register All screen here on which want to navigate.
 * initialRouteName as first screen which load first on app load.
 * defaultNavigationOptions is defualt settings for all screen.
 */

 const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : '',
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerBackTitle: 'Back',
    headerTintColor: Platform.OS === "android" ? Colors.accentColor : Colors.primaryColor,
    headerTitleAlign: 'center'
}
// https://reactnavigation.org/docs/en/native-stack-navigator.html
 const MealStackNavigator = createStackNavigator({
    Catogories: {
        screen: Catogories,
        navigationOptions: {
            headerTitle: 'Meal Categories '
        }
    },
    CatogoriesMeals,
    MealDetails
},{
    initialRouteName: 'Catogories',
    defaultNavigationOptions
});

const FavoriteStackNavigator = createStackNavigator({
    Favorites,
    MealDetails
},{
    initialRouteName: 'Favorites',
    defaultNavigationOptions
});

const FilterStackNavigator = createStackNavigator({
    Filter
},{
    initialRouteName: 'Filter',
    defaultNavigationOptions
} 
)

/**
* register all screen for bottom bar use can use any existing navigator as well
* tabBarOptions to set tabs defualt setting for all tabs
* tabBarLabel use set tab name other wise take key(Identifier) name as tab name
* tabBarIcon use to set tab icon 
*/

/**
 * Note: For createMaterialBottomTabNavigator no such label style instaed you have to add Text component of react-native
 * Make Sure that you check with Paltform.OS for android before setting as navigationOption 
 * Ex. tabBarLable: <Text style={yourStyle}></Text>
 */

const tabConfig = {
    Meals: { 
        screen: MealStackNavigator, 
        navigationOptions: {
            tabBarLabel: 'Meals',
            tabBarIcon: tabInfo => <Ionicons name='ios-restaurant' size={24} color={tabInfo.tintColor} />,
        }
    },
    Favorites: {
        screen: FavoriteStackNavigator,
        MealStackNavigator, 
        navigationOptions: {
            tabBarIcon: tabInfo => <Ionicons name='ios-star' size={24} color={tabInfo.tintColor} />,
        }
    }
 }

// https://reactnavigation.org/docs/en/bottom-tab-navigator.html
// https://reactnavigation.org/docs/en/material-bottom-tab-navigator.html
 const MealBottomNavigator = Platform.OS === "android" ? createMaterialBottomTabNavigator(tabConfig, {
    activeColor: Colors.primaryColor,
    inactiveColor: '#ccc',
    barStyle: { backgroundColor: Colors.accentColor }
 }) : createBottomTabNavigator(tabConfig,{
     tabBarOptions: {
         labelStyle: {
            fontFamily: 'open-sans',
         },
         activeTintColor: Colors.primaryColor
     }
 });

 // drawerLabel use to set drawer labels defualt is key(Identifier)
 // contentOptions use to set drawer option 
 // https://reactnavigation.org/docs/en/drawer-navigator.html
 const RootNavigator = createDrawerNavigator({
    MealBottomNavigator: {
        screen: MealBottomNavigator,
        navigationOptions: {
            drawerLabel: 'Meals '
        }
    },
    FilterStackNavigator: {
        screen: FilterStackNavigator,
        navigationOptions: {
            drawerLabel: 'Filters '
        }
    }
 }, {
     contentOptions: {
         activeTintColor: Colors.primaryColor,
         labelStyle: {
             fontFamily: 'open-sans-bold',
         }
     }
 })

export default createAppContainer(RootNavigator);
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Switch } from 'react-native';
import { useDispatch } from 'react-redux';
import { style } from './style';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/HeaderButton/HeaderButton';
import Colors from '../../common/styles/Colors';
import { setFilter } from '../../store/actions/mealActions';

const FilterSwitch = props => {
    return (
        <View style={style.filterContainer}>
            <Text>{props.label}</Text>
            <Switch 
                thumbColor={Colors.accentColor}
                trackColor={{ true: Colors.primaryColor }} 
                value={props.value} 
                onValueChange={props.onValueChange}
            />
        </View>
    )
}

const Filter = props => {

    const { navigation } = props;

    const [isGlutenFree, setISGlutenFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isLoctaseFree, setIsLoctaseFree] = useState(false);
    const [isVagetrian, setIsVagetrian] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            isGlutenFree,
            isVegan,
            isLoctaseFree,
            isVagetrian
        }
        dispatch(setFilter(appliedFilters));
    }, [isGlutenFree, isLoctaseFree, isVagetrian, isVegan]);

    useEffect(() => {
        /**
         * Notes:- 
         * setParam use to set params for navigation
         * setParam merge given param with existing params
         * here we use setParam to access our component function on header save button click
         * using setParam we can communicate component with navigationOption
         */
        navigation.setParams({ save: saveFilters });
    }, [saveFilters]);

    return (
        <View style={style.screen}>
            <Text style={style.title}> Available Filter </Text>
            <FilterSwitch 
                onValueChange={newValue => setISGlutenFree(newValue)} 
                label='Gluten Free'
                value={isGlutenFree}
            />
            <FilterSwitch 
                onValueChange={newValue => setIsVegan(newValue)} 
                label='Vegan' 
                value={isVegan}
            />
            <FilterSwitch 
                onValueChange={newValue => setIsLoctaseFree(newValue)} 
                label='LocTase-Free'
                value={isLoctaseFree}
            />
            <FilterSwitch 
                onValueChange={newValue => setIsVagetrian(newValue)} 
                label='Vagetrian' 
                value={isVagetrian} 
            />
        </View>
    );
}

// Set navigation options dynamic. 
// using HeaderButtons we can register multiple header icon button
Filter.navigationOptions = ({ navigation }) => ({
    headerTitle: 'Filter Meals',
    headerLeft: <HeaderButtons
        HeaderButtonComponent={HeaderButton}
    >
        <Item iconName='ios-menu' title='menu' onPress={() => { navigation.toggleDrawer(); }} />
    </HeaderButtons>,
    headerRight: <HeaderButtons
        HeaderButtonComponent={HeaderButton}
    >
        <Item iconName='ios-save' title='menu' onPress={navigation.getParam('save')} />
    </HeaderButtons>

})

export default Filter;
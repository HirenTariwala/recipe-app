import React from 'react';
import { FlatList } from 'react-native';
import { CATEGORIES } from '../../data/dummyData';
import CategoriesGridTile from '../../components/CategoriesGridTile/CategoriesGridTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/HeaderButton/HeaderButton';

const Catogories = props => {

    /**
     * Render grid
     * @param {*} catogery 
     */
    const renderGrid = (catogery) => {
        return <CategoriesGridTile catogery={catogery} onSelect={() => props.navigation.navigate('CatogoriesMeals', {
            catogery: catogery.item
        })} />
    }

    return <FlatList data={CATEGORIES} renderItem={renderGrid} numColumns={2} />;
}

// Set navigation options dynamic. 
// using HeaderButtons we can register multiple header icon button
Catogories.navigationOptions = ({ navigation }) => ({
    headerLeft: <HeaderButtons
        HeaderButtonComponent={HeaderButton}
    >
        <Item iconName='ios-menu' title='menu' onPress={() => { navigation.toggleDrawer(); }} />
    </HeaderButtons>
})

export default Catogories;
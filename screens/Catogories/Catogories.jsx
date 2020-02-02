import React from 'react';
import { FlatList } from 'react-native';
import { CATEGORIES } from '../../data/dummyData';
import CategoriesGridTile from '../../components/CategoriesGridTile/CategoriesGridTile';

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

export default Catogories;
import React from 'react';
import { View, Text, Button } from 'react-native';
import { style } from './style';

// We can use props.navigation.goBack() as well but it is only work for stack navigation.
// props.navigation.getParam() get value of any param which set during navaigation.

const CatogoriesMeal = props => {

    // catogery
    const catogery = props.navigation.getParam('catogery');

    return (
        <View style={style.screen}>
            <Text>CatogoriesMeal Screen {catogery.title}</Text>
            <Button
                title="Open Meal Details"
                onPress={() => props.navigation.navigate('MealDeatils')}
            />
            <Button
                title="Go Backbtn"
                onPress={() => props.navigation.goBack()}
            />
        </View>
    );
}

// Set navigation options dynamic. 
CatogoriesMeal.navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('catogery').title,
})

export default CatogoriesMeal;
import React from 'react';
import { View, Text, Button } from 'react-native';
import { style } from './style'

const MealDetails = props => {
    return (
        <View style={style.screen}>
            <Text>MealDetails Screen</Text>
            <Button 
                title="Go to catogories" 
                onPress={() => props.navigation.popToTop()} 
            />
        </View>
    );
}

export default MealDetails;
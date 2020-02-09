import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Color from '../../common/styles/Colors';

const customHeaderButton = props => {
    return <HeaderButton 
                {...props}
                IconComponent={Ionicons}
                iconSize={24}
                color={ Platform.OS === "android" ? Color.accentColor : Color.primaryColor}
            />
}

export default customHeaderButton;
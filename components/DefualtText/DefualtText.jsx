import React from 'react';
import { Text } from 'react-native';
import { style } from './style';

const DefualtText = props => <Text style={{ ...style.defualtFont, ...props.style }}>{props.children}</Text>;

export default DefualtText;
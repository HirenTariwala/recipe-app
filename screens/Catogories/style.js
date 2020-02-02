import { StyleSheet } from 'react-native';
import { commonStyle } from '../../common/styles/style';

export const style = StyleSheet.create({
    ...commonStyle,
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
})
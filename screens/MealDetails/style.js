import { StyleSheet } from 'react-native';
import { commonStyle } from '../../common/styles/style';

export const style = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        textAlign: 'center'
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',
    },
    listItem: {
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1
    }
})
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    mealItemContainer: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDeatils: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    bgImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0, 0.5)',
        paddingVertical: 5,
        paddingHorizontal: 10,
    }
});
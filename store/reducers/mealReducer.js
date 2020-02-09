import { TOGGLE_FAV, SET_FILTER } from '../actionTypes/meals';
import { MEALS } from '../../data/dummyData';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoritesMeals: []
} 
/**
 * Handle meal reducer
 * @param {*} state 
 * @param {*} action 
 */
const mealReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAV:
            let { favoritesMeals } = state;
            const index = favoritesMeals.findIndex(meal => meal.id === action.mealId);
            if(index >= 0) {
                favoritesMeals.splice(index, 1);
            } else {
                favoritesMeals = [...favoritesMeals, state.meals.find(meal => meal.id === action.mealId)]
            }
            return { ...state, favoritesMeals: [...favoritesMeals] };
        case SET_FILTER:
            const filteredMeals = state.meals.filter(meal => {
                for(let key in action.filters) {
                    if(!meal[key] && action.filters[key]){
                        return false;
                    }
                }
                return true;
            })
            return { ...state, filteredMeals }
    }
    return state;
}

export default mealReducer;
import { TOGGLE_FAV, SET_FILTER } from '../actionTypes/meals';

/**
 * Handle toggle fav meal
 * @param {string} mealId 
 */
export const toggleFavMeal = mealId => {
    return {
        type: TOGGLE_FAV,
        mealId
    }
}

/**
 * Set filters
 * @param {*} filter 
 */
export const setFilter = filters => {
    return {
        type: SET_FILTER,
        filters
    }
}
import { TouchableNativeFeedback } from "react-native-gesture-handler";

class Meal {
    constructor(
        id,
        catIds,
        title,
        affordability,
        complexity,
        imageUrl,
        duration, 
        ingridients, 
        steps, 
        isGlutenFree, 
        isVegan, 
        isVagetrian, 
        isLoctaseFree
        ) 
        {
            this.id = id;
            this.catIds = catIds;
            this.title = title;
            this.affordability = affordability;
            this.complexity = complexity;
            this.imageUrl = imageUrl;
            this.duration = duration;
            this.ingridients = ingridients;
            this.steps = steps;
            this.isGlutenFree = isGlutenFree;
            this.isVegan = isVegan;
            this.isVagetrian = isVagetrian;
            this.isLoctaseFree = isLoctaseFree;
        }
}

export default Meal;
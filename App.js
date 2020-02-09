import React, { useState } from 'react';
import MealsNavigator from './navigation/MealsNavigator';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import { createStore } from 'redux';
import rootReducer from './store/reducers/index';
import { Provider } from 'react-redux';

// It will use native screen and improve perfomance.
enableScreens();


const store = createStore(rootReducer);

/**
 * To load custom fonts 
 */
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

const App = () => {
  const [fontsLoaded, setFontLoaded] = useState(false);

  // Load our custom fonts
  if (!fontsLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
  }

  return <Provider store={store}><MealsNavigator /></Provider>;
}

export default App;
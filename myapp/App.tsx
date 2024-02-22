import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, {persistor} from './src/store';

import Home from './src/pages/Home';

const HomeStackNavigator = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <HomeStackNavigator.Navigator initialRouteName='Home'>
            <HomeStackNavigator.Screen name="Home" component={Home}></HomeStackNavigator.Screen>
          </HomeStackNavigator.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
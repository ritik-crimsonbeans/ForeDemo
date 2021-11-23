import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabsNavigator from './Navigation/TabNavigator';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './redux/reducer';

export default function App() {
  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabsNavigator />
      </NavigationContainer>
    </Provider>
  );
}

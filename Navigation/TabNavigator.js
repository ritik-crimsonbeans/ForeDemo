import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';

const Tabs = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        options={{
          header: () => null,
        }}
        component={StackNavigator}
      />
      <Tabs.Screen name="Profile" component={Profile} />
      <Tabs.Screen name="Settings" component={Settings} />
    </Tabs.Navigator>
  );
};

export default TabsNavigator;

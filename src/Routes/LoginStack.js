import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login'

import DrawerRoute from './DrawerRoute'

const Stack = createStackNavigator();

export default function Routes () {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={DrawerRoute} />
      </Stack.Navigator>
  )
}
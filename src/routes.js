import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Dashboard from './pages/Dashboard'
import Frequency from './pages/Frequency'
import Grade from './pages/Grade'
import Group from './pages/Group'
import Login from './pages/Login'
import Subject from './pages/Subject'

export default function Routes() {
  return (
    <NavigationContainer>
      
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Frequency" component={Frequency} />
        <Drawer.Screen name="Grade" component={Grade} />
        <Drawer.Screen name="Group" component={Group} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Subject" component={Subject} />
      </Drawer.Navigator>

    </NavigationContainer>
  );
}
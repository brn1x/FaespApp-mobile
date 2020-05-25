import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

import Dashboard from './pages/Dashboard'
import GradeFreq from './pages/GradeFreq'
import Group from './pages/Group'
import Login from './pages/Login'
import Subject from './pages/Subject'

function Home() {
  return (
    <NavigationContainer independent={true}>

      <Drawer.Navigator initialRouteName="Dashboard">
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Grade/Frequency" component={GradeFreq} />
        <Drawer.Screen name="Group" component={Group} />
        <Drawer.Screen name="Subject" component={Subject} />
      </Drawer.Navigator>

    </NavigationContainer>
  );
}

export default function Routes () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
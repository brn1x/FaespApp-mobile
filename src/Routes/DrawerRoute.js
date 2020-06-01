import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'

import DrawerContent from '../components/DrawerContent'

import Dashboard from '../pages/Dashboard'
import GradeFreq from '../pages/GradeFreq'
import Subject from '../pages/Subject'
import Group from '../pages/Group'
import GroupDescription from '../pages/GroupDescription'
import GroupList from '../pages/GroupList'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function GroupsRoute () {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GroupHome" initialParams={{ refresh: false }} component={Group} />
      <Stack.Screen name="GroupDescription" component={GroupDescription} />
      <Stack.Screen name="GroupList" component={GroupList} />
    </Stack.Navigator>
  )
}

export default function DrawerRoute() {
  return (
      <Drawer.Navigator initialRouteName="Dashboard" drawerContent={props => <DrawerContent {...props} />} >
        <Drawer.Screen name="Dashboard" component={Dashboard} options={{ title: 'Notícias' }} />
        <Drawer.Screen name="Grade/Frequency" component={GradeFreq} options={{ title: 'Notas e Frequência' }} />
        <Drawer.Screen name="Group" component={GroupsRoute} options={{ title: 'Grupos' }} />
        <Drawer.Screen name="Subject" component={Subject} options={{ title: 'Disciplinas' }} />
      </Drawer.Navigator>
  );
}
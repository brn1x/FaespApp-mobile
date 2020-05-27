import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from '../components/DrawerContent'

import Dashboard from '../pages/Dashboard'
import GradeFreq from '../pages/GradeFreq'
import Group from '../pages/Group'
import Subject from '../pages/Subject'

const Drawer = createDrawerNavigator();

export default function DrawerRoute() {
  return (
      <Drawer.Navigator initialRouteName="Dashboard" drawerContent={props => <DrawerContent {...props} />} >
        <Drawer.Screen name="Dashboard" component={Dashboard} options={{ title: 'Notícias' }} />
        <Drawer.Screen name="Grade/Frequency" component={GradeFreq} options={{ title: 'Notas e Frequência' }} />
        <Drawer.Screen name="Group" component={Group} options={{ title: 'Grupos' }} />
        <Drawer.Screen name="Subject" component={Subject} options={{ title: 'Matérias' }} />
      </Drawer.Navigator>
  );
}
import React from 'react';
import { View, Text } from 'react-native';

import { Feather } from '@expo/vector-icons/'

import styles from './styles'

export default function Header({ navigation, titleText }) {
  return (
    <View style={styles.header} >
      <Feather onPress={() => navigation.openDrawer()} name="menu" size={25} color="#d0242a" />
      <Text style={styles.pageTitle}>{titleText}</Text>
    </View>
  );
}
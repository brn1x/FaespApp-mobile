import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons/'

import styles from './styles'

export default function Header({ btnType, navigation, titleText }) {
  return (
    <View style={styles.header} >
      <View style={styles.menuButton}>
        { btnType === 'goBack' ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={25} color="#FFF" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Feather name="menu" size={32} color="#FFF" />
          </TouchableOpacity>
        ) 
        }
      </View>
      <View style={styles.title}>
        <Text style={styles.pageTitle}>{titleText}</Text>
      </View>
    </View>
  );
}
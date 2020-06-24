import React from 'react';
import { View, Text } from 'react-native';

import { Feather } from '@expo/vector-icons/'

import styles from './styles';

export default function infoCard({ info, infoTitle }){
  return(
  <View style={styles.cardLayout}>
    <Text style={styles.cardTitle}>{infoTitle}</Text>
    <Text style={styles.cardDescription}>{info}</Text>
    <Text>Detalhar</Text>
  </View>
)}
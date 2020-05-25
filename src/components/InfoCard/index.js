import React from 'react';
import { View, Text } from 'react-native';

import { Feather } from '@expo/vector-icons/'

import styles from './styles';

export default function infoCard(){
  return(
  <View style={styles.cardLayout}>
    <Text style={styles.cardTitle}>Ipsum Lore</Text>
    <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet, purto illum accumsan mei ne. 
    Per an percipitur sadipscing, tollit complectitur ne pri.</Text>
    <Text>Detalhar</Text>
  </View>
)}
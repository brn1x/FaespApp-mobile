import React from 'react';
import { View, Text } from 'react-native';

import { Feather } from '@expo/vector-icons/'

import InfoCard from '../../components/InfoCard'
import Header from '../../components/Header'

import styles from './styles'

export default function Dashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} titleText={'UniFaespApp'} />
      <View style={styles.cardView} >
        <View style={styles.cardTitle}>
          <Feather name="wifi" size={15} color="#000000"/>
          <Text style={styles.cardTitleText}>Últimos Avisos</Text>
        </View>
        <InfoCard />
      </View>
    </View>
  );
}

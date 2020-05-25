import React from 'react';
import { View, Text } from 'react-native';

<<<<<<< HEAD
<<<<<<< HEAD
import { Feather } from '@expo/vector-icons/'

import InfoCard from '../../components/InfoCard'
import Header from '../../components/Header'

import styles from './styles'

export default function Dashboard({ navigation }) {
=======
export default function Dashboard() {
>>>>>>> ae23411a55f55994b58e14e737f3c4cf55104a97
=======
export default function Dashboard() {
>>>>>>> ae23411a55f55994b58e14e737f3c4cf55104a97
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

import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons/'

import InfoCard from '../../components/InfoCard'
import Header from '../../components/Header'

import styles from './styles'

export default function Dashboard({ navigation }) {
  return (
    <>
      <Header navigation={navigation} titleText={'UniFaespApp'} />
      <View style={styles.container}>
        <View style={styles.cardView} >
          <View style={styles.cardTitle}>
            <Feather name="wifi" size={15} color="#000000"/>
            <Text style={styles.cardTitleText}>Últimos Avisos</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false} >
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </ScrollView>
        </View>
      </View>
    </>
  );
}

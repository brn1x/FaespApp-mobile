import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Platform } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';

import { Feather } from '@expo/vector-icons/';

import InfoCard from '../../components/InfoCard';
import Header from '../../components/Header';

import api from '../../services/api';

import styles from './styles'

export default function Dashboard({ navigation }) {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [ra, setRa] = useState('');
  const [token, setToken] = useState('');

  async function registerForPushNotificationsAsync () {
    try {
      await SecureStore.getItemAsync('ra')
        .then(result => {
          setRa(result);
        })
      
      await SecureStore.getItemAsync('token')
        .then(result => {
          setToken(result);
        })
    } catch (error) {
      console.log(error);
    }

    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        return;
      }
      const token = await Notifications.getExpoPushTokenAsync();

      setExpoPushToken(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.createChannelAndroidAsync('default', {
        name: 'default',
        sound: true,
        priority: 'max',
        vibrate: [0, 250, 250, 250],
      });
    }

    const data = {
      ra,
      token: expoPushToken
    }

    await api.post('/notification/token', data, {
      headers: {
        authorization: token
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    registerForPushNotificationsAsync();
  }, [ra, token]);

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
            <InfoCard infoTitle="Aulas EAD" info="Devido a pandemia do Corona Vírus, a faculdade está funcionado com aulas ead" />
            <InfoCard infoTitle="Provas" info="A prova será feita de forma EAD, pois os alunos não poderão estar presentes na salas de aulas" />
            <InfoCard infoTitle="Secretaria" info="Para contato com a secretaria, os alunos poderão entrar em contato via whatsapp / telefone" />
          </ScrollView>
        </View>
      </View>
    </>
  );
}

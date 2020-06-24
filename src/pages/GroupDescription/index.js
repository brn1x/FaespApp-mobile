import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';

import * as SecureStore from 'expo-secure-store';
import api from '../../services/api';

import Header from '../../components/Header'
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather'

export default function GroupDescription ({ navigation }) {
  const [ra, setRa] = useState('');
  const [token, setToken] = useState('');
  const route = useRoute();

  const group = route.params.group;
  const type = route.params.type;

  useEffect(() => {
    async function fillRa() {
      try {
        await SecureStore.getItemAsync('token')
          .then(result => {
            setToken(result);
          });

        await SecureStore.getItemAsync('ra')
          .then(result => {
            setRa(result);
          })
      } catch (error) {
        console.log(error);
      }
    }
    fillRa();
  }, [])

  async function handleSubscribe (groupId) {
    // Alert: Deseja mesmo se inscrever nesse grupo?
    const data = {
      ra
    }
    try {
      await api.post(`subscription/${groupId}`, data, {
        headers: {
          authorization: token
        }
      })
      navigation.navigate('GroupHome', { refresh: true })
    } catch (error) {
      console.log(error)
    }
  }

  async function handleUnsubscribe (groupId) {
    // Alert: Deseja mesmo se desinscrever desse grupo?
    try {
      await api.delete(`subscription/${groupId}`, {
        data: {
          ra
        },
        headers: {
          authorization: token
        } 
      })
      navigation.navigate('GroupHome', { refresh: true })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Header btnType='goBack' navigation={navigation} titleText={'Detalhes Grupo'} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerDesc}>
            <Icon style={styles.headerImage} name="award" color="#000" size={150} />
          </View>
          <View style={styles.groupInfo}>
            <Text style={styles.groupNameText}>{group.name}</Text>
            <Text style={styles.groupCategoryText}>{group.category.name}</Text>
            <Text style={styles.groupDescText}>Descrição</Text>
            <Text style={styles.groupDescriptionText}>{group.description}</Text>
            <Text style={styles.groupInfoText}><Text style={{ fontWeight: 'bold' }}>Participantes: </Text> {group.students.length}/{group.qtt_max_students}</Text>
            <Text style={styles.groupInfoText}><Text style={{ fontWeight: 'bold' }}>Campus: </Text>{group.campus.name}</Text>
            <Text style={styles.groupInfoText}><Text style={{ fontWeight: 'bold' }}>Periodo: </Text> {group.period}</Text>
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
            { type === 'register' ? (
              <TouchableOpacity style={styles.button} onPress={() => handleSubscribe(group.id)}>
                <Text style={styles.buttonText}>Cadastrar</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.button} onPress={() => handleUnsubscribe(group.id)}>
                <Text style={styles.buttonText}>Sair do Grupo</Text>
              </TouchableOpacity>
            ) }
          </View>
      </View>
    </>
  );
}
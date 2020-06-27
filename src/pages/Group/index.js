import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import Header from '../../components/Header'
import GroupCard from '../../components/GroupCard'

import * as SecureStore from 'expo-secure-store';
import api from '../../services/api'

import validateSubscriptionDate from '../../utils/validateSubscriptionDate';

import styles from './styles'
import Icon from 'react-native-vector-icons/Feather'

export default function Group ({ navigation, route }) {
  const [groups, setGroups] = useState([]);
  const [ra, setRa] = useState('');
  const [token, setToken] = useState('');

  const { refresh } = route.params

  useEffect(() => {
    async function fillGroups() {
      try {
        await SecureStore.getItemAsync('token')
          .then(result => {
            setToken(result);
          });

        await SecureStore.getItemAsync('ra')
          .then(result => {
            setRa(result);
          });

        await api.get('/subscription', {
          headers: { 
            'X-LOGGED-USER': ra,
            authorization: token
          } 
        })
          .then(result => {
            setGroups(result.data.groups);
          })
      } catch (error) {
        console.log(error)
      }        
    }
    fillGroups();
    route.params.refresh = false;
  }, [ra, refresh])

  async function moveToGroupList () {
    await validateSubscriptionDate(token)
      .then(date => {
        if(date){
          return navigation.navigate('GroupList')
        }
        return Alert.alert('Data para inscrição aos grupos expirou!')
      })
  }

  function moveToDescGroup (group) {
    navigation.navigate('GroupDescription', { group })
  }

  return (
    <>
      <Header navigation={navigation} titleText={'Grupos'}/>
      <View style={styles.container}>
        { !groups ? (
          <View style={styles.noGroups}>
            <Text style={styles.noGroupsText}>Você não está cadastrado(a) em nenhum grupo</Text>
            <Icon name="frown" color="#000" size={40} />
          </View>
        ) : (
          <View style={styles.groupList}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={groups}
              keyExtractor={(group) => group.id.toString()}
              renderItem={({ item }) => (
                <GroupCard group={item} move={moveToDescGroup} />
              )}
            />
          </View>
        ) }
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => moveToGroupList()}>
            <Text style={styles.buttonText}>Adicionar Grupo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

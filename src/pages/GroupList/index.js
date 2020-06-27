import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, TextInput, Text, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import styles from './styles';
import Icon from 'react-native-vector-icons/Feather'

import GroupCard from '../../components/GroupCard'
import Header from '../../components/Header'
import DismissKeyboard from '../../components/DismissKeyboard'

import api from '../../services/api';

import validateCreateDate from '../../utils/validateCreateDate';

export default function GroupList ({ navigation }) {
  const [groups, setGroups] = useState([]);
  const [ra, setRa] = useState('');
  const [filter, setFilter] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    async function fillRaStudent () {
      try {
        await SecureStore.getItemAsync('token')
          .then(result => {
            setToken(result);
          });

        await SecureStore.getItemAsync('ra')
          .then(result => {
            setRa(result);
          })

        await api.get('/groups', {
          headers: {
            'X-LOGGED-USER': ra,
            authorization: token
          }
        })
          .then(result => {
            setGroups(result.data);
          })
      } catch (error) {
        console.log(error);
      }
    }
    fillRaStudent();
  }, [ra])

  function moveToDescGroup (group) {
    const type = 'register'
    navigation.navigate('GroupDescription', { group, type });
  }

  async function createGroupForm () {
    await validateCreateDate(token)
      .then(date => {
        if(date){
          return navigation.navigate('GroupFormCreate');
        }
        return Alert.alert('Data para criação de grupos expirou!')
      })
  }

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Header btnType='goBack' navigation={navigation} titleText={'Adicionar Grupo'} />
        <View style={styles.filterBox}>
          <Icon style={styles.filterIcon} name="search" size={20} color="#999" />
          <TextInput
            style={styles.filter} 
            onChangeText={setFilter}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Pesquisar"
          />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(group) => group.id.toString()}
          data={groups.filter(group => group.name.toLowerCase().includes(filter.toLowerCase()))}
          renderItem={({ item }) => (
            <GroupCard group={item} move={moveToDescGroup} />
          )}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={createGroupForm}>
            <Text style={styles.buttonText}>Criar Novo Grupo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DismissKeyboard>
  );
}
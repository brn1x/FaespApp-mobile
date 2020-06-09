import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import styles from './styles';
import Icon from 'react-native-vector-icons/Feather'

import GroupCard from '../../components/GroupCard'
import Header from '../../components/Header'

import api from '../../services/api';

export default function GroupList ({ navigation }) {
  const [groups, setGroups] = useState([])
  const [ra, setRa] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    async function fillRaStudent () {
      try {
        await SecureStore.getItemAsync('ra')
          .then(result => {
            setRa(result);
          })

        await api.get('/groups', { headers: { 'X-LOGGED-USER': ra } })
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
    navigation.navigate('GroupDescription', { group, type })
  }

  return (
    <>
      <Header btnType='goBack' navigation={navigation} titleText={'Adicionar Grupo'} />
      <View style={styles.container}>
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
      </View>
    </>
  );
}
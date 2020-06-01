import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';

import styles from './styles';
import { Feather } from '@expo/vector-icons/'

import GroupCard from '../../components/GroupCard'
import Header from '../../components/Header'

import api from '../../services/api';

export default function GroupList ({ navigation, route }) {
  const [groups, setGroups] = useState([])

  useEffect(() => {
    async function fillGroups () {
      await api.get('/groups')
        .then(result => {
          setGroups(result.data);
        });
    }
  fillGroups();    
  }, [])
  
  function moveToDescGroup (group) {
    const type = 'register'
    navigation.navigate('GroupDescription', { group, type })
  }

  return (
    <>
      <Header btnType='goBack' navigation={navigation} titleText={'Adicionar Grupo'} />
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(group) => group.id.toString()}
          data={groups}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => moveToDescGroup(item)}>
              <GroupCard group={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
}
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from '../../components/Header'

import styles from './styles'
import { Feather } from '@expo/vector-icons/'

import api from '../../services/api';

export default function Subject({ navigation }) {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    async function fillSubjects() {
      try {
        await api.get('/subjects/')
          .then(response => {
            setSubjects(response.data.list)
          })
      } catch (error) {
        console.log('Erro ao buscar as matérias');
      }
    }
    fillSubjects()
  }, []);

  return (
    <>
      <Header navigation={navigation} titleText={'Disciplinas'}/>
      <View style={styles.container}>
        { subjects.map(sub => (
          <Text key={sub.idDisciplina}>{sub.descricao}</Text>
        )) }
        { subjects.map(sub => (
          <Text key={sub.idDisciplina}>{sub.descricao}</Text>
        )) }
      </View>
    </>
  );
}

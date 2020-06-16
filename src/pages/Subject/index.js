import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../../components/Header'

import styles from './styles'

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
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          { subjects.map(sub => (
            <View style={styles.card} key={sub.idDisciplina}>
              <Text style={styles.subject}>{sub.descricao}</Text>
            </View>
          )) }
        </ScrollView>
      </View>
    </>
  );
}

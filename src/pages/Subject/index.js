import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../../components/Header'

import styles from './styles'

import api from '../../services/api';
import * as SecureStore from 'expo-secure-store';

export default function Subject({ navigation }) {
  const [subjects, setSubjects] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    async function fillSubjects() {
      try {
        await SecureStore.getItemAsync('token')
          .then(result => {
            setToken(result);
          })

        await api.get('/subjects/', {
          headers: {
            authorization: token
          }
        })
          .then(response => {
            setSubjects(response.data.list);
          })
      } catch (error) {
        console.log(error);
      }
    }
    fillSubjects();
  }, [token]);

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

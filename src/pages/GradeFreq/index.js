import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import * as SecureStore from 'expo-secure-store';

import api from '../../services/api';

export default function GradeFreq() {
  const [grades, setGrades] = useState([]);
  const [idAluno, setIdAluno] = useState('')

  useEffect(() => {
    async function fillGrades () {
      try {
        await SecureStore.getItemAsync('idAluno')
          .then(result => {
            setIdAluno(result)
          })

        await api.get('/grades/', { headers: { 'X-LOGGED-USER': idAluno } })
          .then(response => {
            setGrades(response.data)
          })
      } catch (error) {
        console.log(error)
      }
    }
    fillGrades()
  }, [idAluno])
  return (
    <View>
      { grades.map(grade => (
        <View key={grade.idMatriculaDisciplina}>
          <Text>{grade.disciplina}</Text>
          <Text>{grade.notaFinal}</Text>
          <Text>Frequencia: {grade.frequencia}</Text>
        </View>
      )) }
    </View>
  );
}

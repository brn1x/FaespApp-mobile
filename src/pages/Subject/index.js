import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import api from '../../services/api';

export default function Subject() {
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
    <View>
      { subjects.map(sub => (
        <Text key={sub.idDisciplina}>{sub.descricao}</Text>
      )) }
      { subjects.map(sub => (
        <Text key={sub.idDisciplina}>{sub.descricao}</Text>
      )) }
    </View>
  );
}

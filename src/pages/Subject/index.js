<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { View, Text } from 'react-native';
=======
=======
>>>>>>> ae23411a55f55994b58e14e737f3c4cf55104a97
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import api from '../../services/api';
<<<<<<< HEAD
>>>>>>> ae23411a55f55994b58e14e737f3c4cf55104a97
=======
>>>>>>> ae23411a55f55994b58e14e737f3c4cf55104a97

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
<<<<<<< HEAD
<<<<<<< HEAD
      <Text>Disciplina</Text>
=======
      { subjects.map(sub => (
        <Text key={sub.idDisciplina}>{sub.descricao}</Text>
      )) }
>>>>>>> ae23411a55f55994b58e14e737f3c4cf55104a97
=======
      { subjects.map(sub => (
        <Text key={sub.idDisciplina}>{sub.descricao}</Text>
      )) }
>>>>>>> ae23411a55f55994b58e14e737f3c4cf55104a97
    </View>
  );
}

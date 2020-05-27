import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';

import styles from './styles'

import api from '../../services/api'

export default function Group() {
  
  const [groups, setGroups] = useState([])

  useEffect(() => {
    async function fillGroups(){
      try {
        await api.get('/groups')
          .then(response => { 
            setGroups(response.data)
            console.log(`Response:${response.data}`)
            console.log(`Groups:${groups}`)

          });
      } catch (error) {
        console.log('Erro ao buscar grupos')
      }
    }
    fillGroups()
  }, [])
    
  return (
  <View style={styles.container}>
    <Text>Grupos</Text>
    <Button 
      title='Listagem de Grupos'
    />
    <View>
      { groups.map(group =>(
        <Text key={group.id}>{group.name}</Text>
      ))}
    </View>
  </View>
  );
}

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles'
import Icon from 'react-native-vector-icons/Feather'

export default function GroupCard ({ group, move }) {
  return (
    <View style={styles.container}>
      <View style={styles.groupDesc}>
        <Text style={styles.textGroupName}>{group.name}</Text>
        <Text style={styles.textGroupInfo}>{group.category.name}</Text>
        <Text style={styles.textGroupInfo}>Quantidade de Alunos: <Text style={styles.textGroupInfoValues}>{group.students.length}/{group.qtt_max_students}</Text></Text>
        <TouchableOpacity style={styles.textTouchableOpacity} onPress={() => move(group)}>
          <Icon name="arrow-left" size={22} color="#294485"/>
          <Text style={styles.detailsText}>Ver Mais Detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
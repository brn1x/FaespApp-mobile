import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles'

export default function GroupCard ({ group }) {
  return (
    <View style={styles.container}>
      <View style={styles.groupDesc}>
        <Text style={styles.textGroupName}>{group.name}</Text>
        <Text style={styles.textCategoryGroup}>{group.category.name}</Text>
        <Text style={styles.textGroupInfo}>Quantidade de Alunos: <Text style={styles.textGroupInfoValues}>{group.students.length}/{group.qtt_max_students}</Text></Text>
        <Text style={styles.textLink}>Ver Detalhes</Text>
      </View>
    </View>
  )
}
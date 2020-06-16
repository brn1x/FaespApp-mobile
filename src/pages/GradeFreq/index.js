import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../../components/Header'

import * as SecureStore from 'expo-secure-store';

import styles from './styles'

import api from '../../services/api';

export default function GradeFreq({ navigation }) {

  const [grades, setGrades] = useState([]);
  const [semester, setSemester] = useState('');
  const [idAluno, setIdAluno] = useState('');

  useEffect(() => {
    async function fillGrades () {
      try {
        await SecureStore.getItemAsync('idAluno')
          .then(result => {
            setIdAluno(result);
          })

        await api.get('/grades/', { headers: { 'X-LOGGED-USER': idAluno } })
          .then(response => {
            setGrades(response.data);
          })

        await api.get('/semesters/')
          .then(response => {
            setSemester(response.data.name)
          })
      } catch (error) {
        console.log(error)
      }
    }
    fillGrades()
  }, [idAluno])
  return (
    <>
      <Header navigation={navigation} titleText={'Frequência / Notas'}/>
      <View style={styles.container}>
        <Text style={styles.title}>{semester}</Text>
        <ScrollView 
          style={styles.cardList}
          showsVerticalScrollIndicator={false}
        >
          { grades.map(grade => (
            <View style={styles.gradeCard} key={grade.idMatriculaDisciplina}>
              <Text style={styles.cardTitle}>{grade.disciplina}</Text>
              <Text style={styles.cardGrade}>Nota 1º Bimestre <Text style={styles.grade}>{grade.notaFinal.toFixed(1)}</Text></Text>
              <Text style={styles.cardGrade}>Nota 2º Bimestre <Text style={styles.grade}>{grade.notaFinal.toFixed(1)}</Text></Text>
              <Text style={styles.cardGrade}>Nota Final <Text style={styles.grade}>{grade.notaFinal.toFixed(1)}</Text></Text>
              <Text style={styles.cardGrade}>Frequência <Text style={styles.grade}>{grade.frequencia}%</Text> - Faltas <Text style={styles.grade}>{grade.quantidadeFaltas}</Text></Text>
            </View>
          )) }
        </ScrollView>
      </View>
    </>
  );
}

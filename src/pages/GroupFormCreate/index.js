import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import DropDown from 'react-native-picker-select';

import styles from './styles';
import Header from '../../components/Header';
import DismissKeyboard from '../../components/DismissKeyboard';

import * as SecureStore from 'expo-secure-store';
import api from '../../services/api';

export default function GroupFormCreate ({ navigation }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [qttMinStudents, setQttMinStudents] = useState(0);
  const [qttMaxStudents, setQttMaxStudents] = useState(0);
  const [qttMeetings, setQttMeetings] = useState(0);
  const [period, setPeriod] = useState('');
  const [campus, setCampus] = useState('');
  const [ra, setRa] = useState('');

  const [categories, setCategories] = useState([]);
  const [campuses, setCampuses] = useState([]);

  useEffect(() => {
    async function fillInfo () {
      try {
        await SecureStore.getItemAsync('ra')
          .then(result => {
            setRa(result)
          })
  
        api.get('/categories')
          .then(result => {
            setCategories(result.data);
          });
    
        api.get('/campus')
          .then(result => {
            setCampuses(result.data);
          });
      } catch (error) {
        console.log(error);
      }
    }
    fillInfo();
  }, [ra]);

  async function createGroup () {
    const data = {
      name,
      description,
      category_id: category,
      qtt_min_students: qttMinStudents,
      qtt_max_students: qttMaxStudents,
      qtt_meetings: qttMeetings,
      campus_id: campus,
      period,
    }

    console.log(data)
    api.post('/groups', data, { headers: { 'x-logged-user': ra } })
  }

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Header btnType='goBack' navigation={navigation} titleText={'Criação de Grupo'} />
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Nome do Grupo" placeholderTextColor="#888" 
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={setName}
          />

          <DropDown
            style={{ viewContainer: styles.dropDown, inputAndroid: { color: '#000' } }}
            onValueChange={(value) => setCategory(value)}
            items={categories.map(category => {
              return {
                label: category.name,
                value: category.id
              }
            })}
          />

          <TextInput style={styles.inputDescription} placeholder="Descrição" placeholderTextColor="#888" 
            autoCapitalize="none"
            multiline={true}
            numberOfLines={5}
            autoCorrect={false}
            value={description}
            onChangeText={setDescription}
          />

          <Text style={styles.infoText}>Quantidades:</Text>

          <View style={styles.rowFlex}>
            <TextInput style={styles.selectInput} placeholder="Mín de Alunos" placeholderTextColor="#888" 
              autoCapitalize="none"
              autoCorrect={false}
              value={qttMinStudents}
              onChangeText={setQttMinStudents}
            />

            <TextInput style={styles.selectInput} placeholder="Máx de Alunos" placeholderTextColor="#888" 
              autoCapitalize="none"
              autoCorrect={false}
              value={qttMaxStudents}
              onChangeText={setQttMaxStudents}
            />
          </View>

          <TextInput style={styles.selectInput} placeholder="Encontros" placeholderTextColor="#888" 
            autoCapitalize="none"
            autoCorrect={false}
            value={qttMeetings}
            onChangeText={setQttMeetings}
          />

          <View style={styles.rowFlex}>
            <DropDown
              style={{ viewContainer: styles.dropDownDouble, inputAndroid: { color: '#000' } }}
              onValueChange={(value) => setPeriod(value)}
              items={[
                {
                  label: 'MANHÃ',
                  value: 'M'
                },
                {
                  label: 'TARDE',
                  value: 'T'
                },
                {
                  label: 'NOITE',
                  value: 'N'
                }
              ]}
            />
            
            <DropDown
              style={{ viewContainer: styles.dropDownDouble, inputAndroid: { color: '#000' } }}
              onValueChange={(value) => setCampus(value)}
              items={campuses.map(campus => {
                return {
                  label: campus.name,
                  value: campus.id
                }
              })}
            />
          </View>

        </View>

        <TouchableOpacity style={styles.button} onPress={createGroup}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </DismissKeyboard>
  );
}
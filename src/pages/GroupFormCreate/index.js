import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import DropDown from 'react-native-picker-select';
import { Formik } from 'formik'

import styles from './styles';
import Header from '../../components/Header';
import DismissKeyboard from '../../components/DismissKeyboard';

import * as SecureStore from 'expo-secure-store';
import * as yup from 'yup'
import api from '../../services/api';
import { ScrollView } from 'react-native-gesture-handler';

const groupSchema = yup.object({
  name: yup.string().required('O Nome do Grupo é Obrigatório').min(4),
  category_id: yup.string().required('A Categoria é Obrigatória').test('is-number', 'Categoria deve ser numerica', value => { return !isNaN(value) }),
  description: yup.string().required('A Descrição do Grupo é Obrigatória').min(24),
  qtt_min_students: yup.string().required('Quantidades são obrigatórias').test('is-number', 'Quantidades devem ser numericas', value => { return !isNaN(value) }),
  qtt_max_students: yup.string().required('Quantidades são obrigatórias').test('is-number', 'Quantidades devem ser numericas', value => { return !isNaN(value) }),
  qtt_meetings: yup.string().required('Quantidades são obrigatórias').test('is-number', 'Quantidades devem ser numericas', value => { return !isNaN(value) }),
  period: yup.string().required('O Periodo é Obrigatório').max(1).test('verify-period', 'Periodo deve ser M-T-N', value => { return value === 'M' || value === 'T' || value === 'N' }),
  campus_id: yup.string().required('O Campus é Obrigatório').test('is-number', 'Campus deve ser numero', value => { return !isNaN(value) })
})

export default function GroupFormCreate ({ navigation }) {
  const [ra, setRa] = useState('');
  const [token, setToken] = useState('');

  const [categories, setCategories] = useState([]);
  const [campuses, setCampuses] = useState([]);

  useEffect(() => {
    async function fillInfo () {
      try {
        await SecureStore.getItemAsync('token')
          .then(result => {
            setToken(result);
          });

        await SecureStore.getItemAsync('ra')
          .then(result => {
            setRa(result);
          });
  
        await api.get('/categories', {
          headers: {
            authorization: token
          }
        })
          .then(result => {
            setCategories(result.data);
          });
    
        await api.get('/campus', {
          headers: {
            authorization: token
          }
        })
          .then(result => {
            setCampuses(result.data);
          });
      } catch (error) {
        console.log(error);
      }
    }
    fillInfo();
  }, [ra]);

  async function createGroup (data) {
    await api.post('/groups', data, {
      headers: { 
        'x-logged-user': ra,
        authorization: token
      } 
    })

    Alert.alert(
      `${data.name}`,
      'Criação do grupo enviado para aprovação!',
      [{ text: 'OK', onPress: () => '' }]
    )
    navigation.goBack();
  }

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Header btnType='goBack' navigation={navigation} titleText={'Criação de Grupo'} />
        <Formik
          validationSchema={groupSchema}
          initialValues={{
            name: '',
            category_id: '',
            description: '',
            qtt_min_students: '',
            qtt_max_students: '',
            qtt_meetings: '',
            period: '',
            campus_id: ''
          }}
          onSubmit={ values => {
              createGroup(values)
            }
          }
        >
          {props => (
            <ScrollView contentContainerStyle={{ height: 650 }}>
              <View style={styles.form}>
                <TextInput style={ props.errors.name ? styles.errorInput : styles.input } placeholder="Nome do Grupo" placeholderTextColor="#888" 
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={props.values.name}
                  onChangeText={props.handleChange('name')}
                />
                <Text style={ styles.errorText }>{ props.errors.name }</Text>
                
                <DropDown
                  style={{ viewContainer: props.errors.category_id ? styles.errorDropDown : styles.dropDown, inputAndroid: { color: '#000' } }}
                  placeholder={{ label: 'Categoria', value: 0 }}
                  onValueChange={value => {
                    props.values.category_id = value
                    props.handleChange('category_id')
                  }}
                  items={categories.map(category => {
                    return {
                      label: category.name,
                      value: category.id
                    }
                  })}
                />
                <Text style={ styles.errorText }>{ props.errors.category_id }</Text>

                <TextInput style={props.errors.description ? styles.errorInputDescription : styles.inputDescription} placeholder="Descrição" placeholderTextColor="#888" 
                  autoCapitalize="none"
                  multiline={true}
                  numberOfLines={5}
                  autoCorrect={false}
                  value={props.values.description}
                  onChangeText={props.handleChange('description')}
                />
                <Text style={ styles.errorText }>{ props.errors.description }</Text>

                <Text style={styles.infoText}>Quantidades:</Text>

                <View style={styles.rowFlex}>
                  <TextInput style={props.errors.qtt_min_students ? styles.errorNumberInput : styles.numberInput} placeholder="Mín de Alunos" placeholderTextColor="#888" 
                    value={props.values.qtt_min_students}
                    onChangeText={props.handleChange('qtt_min_students')}
                    keyboardType='numeric'
                  />

                  <TextInput style={props.errors.qtt_max_students ? styles.errorNumberInput : styles.numberInput} placeholder="Máx de Alunos" placeholderTextColor="#888" 
                    value={props.values.qtt_max_students}
                    onChangeText={props.handleChange('qtt_max_students')}
                    keyboardType='numeric'
                  />
                </View>

                <TextInput style={props.errors.qtt_meetings ? styles.errorNumberInput : styles.numberInput} placeholder="Encontros" placeholderTextColor="#888" 
                  value={props.values.qtt_meetings}
                  onChangeText={props.handleChange('qtt_meetings')}
                  keyboardType='numeric'
                />
                <Text style={ styles.errorText }>{ props.errors.qtt_min_students || props.errors.qtt_max_students || props.errors.qtt_meeting }</Text>

                <View style={styles.rowFlex}>
                    <DropDown
                      style={{ viewContainer: props.errors.period ? styles.errorDropDownDouble : styles.dropDownDouble, inputAndroid: { color: '#000' } }}
                      placeholder={{ label: 'Periodo', value: 0 }}
                      onValueChange={value => {
                        props.values.period = value
                        props.handleChange('period')
                      }}
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
                      style={{ viewContainer: props.errors.category_id ? styles.errorDropDownDouble : styles.dropDownDouble, inputAndroid: { color: '#000' } }}
                      placeholder={{ label: 'Campus', value: 0 }}
                      onValueChange={value => {
                        props.values.campus_id = value
                        props.handleChange('campus_id')
                      }}
                      items={
                        campuses.map(campus => {
                        return {
                          label: campus.name,
                          value: campus.id,
                        }
                      })}
                    />
                </View>
                <View style={styles.rowFlex}>
                  <Text style={ styles.errorText }>{ props.errors.period }</Text>
                  <Text style={ styles.errorText }>{ props.errors.campus_id }</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.button} onPress={props.handleSubmit}>
                <Text style={styles.buttonText}>Cadastrar</Text>
              </TouchableOpacity>
            </ScrollView>
          )}
        </Formik>
      </View>
    </DismissKeyboard>
  );
}
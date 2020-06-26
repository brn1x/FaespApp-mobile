import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import DropDown from 'react-native-picker-select';
import { Formik } from 'formik'

import styles from './styles';
import Header from '../../components/Header';
import DismissKeyboard from '../../components/DismissKeyboard';

import * as SecureStore from 'expo-secure-store';
import * as yup from 'yup'
import api from '../../services/api';

const groupSchema = yup.object({
  name: yup.string().required('O Nome do Grupo é Obrigatório').min(4),
  category_id: yup.string().required('A Categoria é Obrigatória').test('is-number', 'Categoria deve ser numerica', value => {
    return !isNaN(value)
  }),
  description: yup.string().required('A Descrição do Grupo é Obrigatória').min(24),
  qtt_min_students: yup.string().required().test('is-number', 'Quantidades devem ser numericas', value => {
    return !isNaN(value)
  }),
  qtt_max_students: yup.string().required().test('is-number', 'Quantidades devem ser numericas', value => {
    return !isNaN(value)
  }),
  qtt_meetings: yup.string().required().test('is-number', 'Quantidades devem ser numericas', value => {
    return !isNaN(value)
  }),
  period: yup.string().required('O Periodo é Obrigatório').max(1).test('verify-period', 'Periodo deve ser M-T-N', value => {
    return value === 'M' || value === 'T' || value === 'N'
  }),
  campus_id: yup.string().required('O Campus é Obrigatório').test('is-number', 'Campus deve ser numero', value => {
    return !isNaN(value)
  })
})

export default function GroupFormCreate ({ navigation }) {
  const [ra, setRa] = useState('');
  const [token, setToken] = useState('');

  const [categoryId, setCategoryId] = useState(0);
  const [campusId, setCampusId] = useState(0);
  const [period, setPeriod] = useState('');

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

    // Alert: Group creation request created
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
          onSubmit={values => {
            createGroup(values)
          }}
          
        >
          {props => (
            <>
            <View style={styles.form}>
              <TextInput style={ props.errors.name ? styles.errorInput : styles.input } placeholder="Nome do Grupo" placeholderTextColor="#888" 
                autoCapitalize="none"
                autoCorrect={false}
                value={props.values.name}
                onChangeText={props.handleChange('name')}
                onBlur={props.handleBlur('name')}
              />

              <DropDown
                style={{ viewContainer: categoryId === 0 ? styles.errorDropDown : styles.dropDown, inputAndroid: { color: '#000' } }}
                onValueChange={value => {
                  props.values.category_id = value
                  props.handleChange('category_id')
                  setCategoryId(value)
                }}
                items={categories.map(category => {
                  return {
                    label: category.name,
                    value: category.id
                  }
                })}
              />

              <TextInput style={props.errors.description ? styles.errorInputDescription : styles.inputDescription} placeholder="Descrição" placeholderTextColor="#888" 
                autoCapitalize="none"
                multiline={true}
                numberOfLines={5}
                autoCorrect={false}
                value={props.values.description}
                onChangeText={props.handleChange('description')}
                onBlur={props.handleBlur('description')}
              />

              <Text style={styles.infoText}>Quantidades:</Text>

              <View style={styles.rowFlex}>
                <TextInput style={props.errors.qtt_min_students ? styles.errorNumberInput : styles.numberInput} placeholder="Mín de Alunos" placeholderTextColor="#888" 
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={props.values.qtt_min_students}
                  onChangeText={props.handleChange('qtt_min_students')}
                  onBlur={props.handleBlur('qtt_min_students')}
                />

                <TextInput style={props.errors.qtt_max_students ? styles.errorNumberInput : styles.numberInput} placeholder="Máx de Alunos" placeholderTextColor="#888" 
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={props.values.qtt_max_students}
                  onChangeText={props.handleChange('qtt_max_students')}
                  onBlur={props.handleBlur('qtt_max_students')}
                />
              </View>

              <TextInput style={props.errors.qtt_meetings ? styles.errorNumberInput : styles.numberInput} placeholder="Encontros" placeholderTextColor="#888" 
                autoCapitalize="none"
                autoCorrect={false}
                value={props.values.qtt_meetings}
                onChangeText={props.handleChange('qtt_meetings')}
                onBlur={props.handleBlur('qtt_meetings')}
              />

              <View style={styles.rowFlex}>
                  <DropDown
                    style={{ viewContainer: period === '' ? styles.errorDropDownDouble : styles.dropDownDouble, inputAndroid: { color: '#000' } }}
                    onValueChange={value => {
                      props.values.period = value
                      props.handleChange('period')
                      setPeriod(value)
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
                    style={{ viewContainer: campusId === 0 ? styles.errorDropDownDouble : styles.dropDownDouble, inputAndroid: { color: '#000' } }}
                    onValueChange={value => {
                      props.values.campus_id = value
                      props.handleChange('campus_id')
                      setCampusId(value)
                    }}
                    items={campuses.map(campus => {
                      return {
                        label: campus.name,
                        value: campus.id
                      }
                    })}
                  />
              </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={props.handleSubmit}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </DismissKeyboard>
  );
}
import React, { useState } from 'react';
import { KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import { AuthContext } from '../../components/context';

import logo from '../../assets/logo.png';

import styles from './styles';

import * as yup from 'yup';

export default function Login() {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const [errs, setErrs] = useState([])

  const { signIn } = React.useContext(AuthContext);

  const loginSchema = yup.object().shape({
    login: yup.string().required('login'),
    password: yup.string().required('password')
  })

  async function handleLogin () {
    Keyboard.dismiss();

    const loginFormData = { login, password, }

    loginSchema.validate(loginFormData, { abortEarly: false })
      .then(valid => {
        signIn(login, password);
      }).catch((err) => {
        Alert.alert(
          'Login Faesp',
          'Campos obrigatórios não preenchidos',
        )
        setErrs(err.errors)
      })
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding"
        enabled={Platform.OS === 'ios'}
      >
          <Image source={logo} />

          <TextInput 
            style={errs.includes('login') ? styles.inputErr : styles.formInput}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu RA"
            placeholderTextColor="#999"
            value={login}
            onChangeText={setLogin}
          />

          <TextInput 
            style={errs.includes('password') ? styles.inputErr : styles.formInput}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite sua Senha"
            placeholderTextColor="#999"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => {handleLogin()}} style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

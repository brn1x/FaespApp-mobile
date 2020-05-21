import React, { useState } from 'react';
import { KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api'

import logo from '../../assets/logo.png';

import styles from './styles';

export default function Login() {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const navigation = useNavigation();

  async function handleLogin () {
    const response = await api.post('/session', { login, password });

    if (!response.authorized === true) {
      Keyboard.dismiss();
      navigation.navigate('Home');
    }
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
            style={styles.formInput}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu RA"
            placeholderTextColor="#999"
            value={login}
            onChangeText={setLogin}
          />

          <TextInput 
            style={styles.formInput} 
            style={styles.formInput}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite sua Senha"
            placeholderTextColor="#999"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

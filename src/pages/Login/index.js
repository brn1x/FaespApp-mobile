import React, { useState } from 'react';
import { KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../components/context';

import logo from '../../assets/logo.png';

import styles from './styles';

export default function Login() {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const navigation = useNavigation();

  const { signIn } = React.useContext(AuthContext);

  async function handleLogin () {
    Keyboard.dismiss();
    signIn(login, password);
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
          <TouchableOpacity onPress={() => {handleLogin()}} style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

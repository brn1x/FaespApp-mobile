import React, { useEffect, useMemo, useReducer } from 'react';
import { ActivityIndicator, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import LoginStack from './LoginStack'
import DrawerRoute from './DrawerRoute'

import { AuthContext } from '../components/context'

import * as SecureStore from 'expo-secure-store';
import api from '../services/api';

import { API_SECRET_KEY } from 'react-native-dotenv'

export default function Routes () {
  const initialLoginState = {
    isLoading: true,
    logged: false,
    token: null
  }

  const loginReducer = (prevState, action) => {
    switch ( action.type ) {
      case 'LOGIN':
        return {
          ...prevState,
          token: action.token,
          logged: action.logged,
          isLoading: false
        };
      case 'LOGOUT':
        return {
          ...prevState,
          token: null,
          logged: false,
          isLoading: false
        };
      case 'REGISTER':
        return {
          ...prevState,
          token: action.token,
          logged: action.logged,
          isLoading: false
        }
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(() => ({
    signIn: async (login, password) => {
      const response = await api.post('/session', { login, password });

      if (response.data.authorized === true) {
        const userToken = API_SECRET_KEY;

        try {
          await SecureStore.setItemAsync('idAluno', response.data.idAluno.toString());
          await SecureStore.setItemAsync('username', response.data.name);
          await SecureStore.setItemAsync('avatar', response.data.avatar);
          await SecureStore.setItemAsync('token', userToken);
        } catch (error) {
          console.log(error);
        }

        dispatch({ type: 'LOGIN', token: userToken, logged: true });
      } else {
        dispatch({ type: 'LOGOUT' });
      }
    },
    signOut: async () => {
      try {
        await SecureStore.deleteItemAsync('idAluno');
        await SecureStore.deleteItemAsync('username');
        await SecureStore.deleteItemAsync('avatar');
        await SecureStore.deleteItemAsync('token');
      } catch (error) {
        console.log(error);
      }

      dispatch({ type: 'LOGOUT' });
    }
  }));

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await SecureStore.getItemAsync('token');
      } catch (error) {
        console.log(error);
      }
      dispatch({  type: 'REGISTER', token: userToken, logged: false });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return(
      <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
          { loginState.token === null ? ( <LoginStack /> ) : ( <DrawerRoute /> ) }
      </NavigationContainer>
    </AuthContext.Provider>
  )
}
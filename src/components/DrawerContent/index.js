import React, { useEffect, useState } from 'react';
import { View } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Avatar, Title, Caption, Drawer } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { AuthContext } from '../context'

import * as SecureStore from 'expo-secure-store';

import styles from './styles'

export default function DrawerContent (props) {
  const { signOut } = React.useContext(AuthContext)
  const [avatar, setAvatar] = useState('')
  const [username, setUsername] = useState('')
  const [course, setCourse] = useState('Sistemas de Informação')

  useEffect(() => {
    async function fillUserInfo () {
      try {
        await SecureStore.getItemAsync('username')
          .then(result => {
            setUsername(result)
          })

        await SecureStore.getItemAsync('avatar')
          .then(result => {
            setAvatar(result)
          })
      } catch (error) {
        console.log(error)
      }
    }
    fillUserInfo();
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} >
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={styles.headerContent}>
              <Avatar.Image source={{ uri: avatar || 'https://faesp.jacad.com.br/academico/images/perfil/6749/100' }} size={50} />
              <View style={styles.headerTexts}>
                <Title style={styles.title}>{ username }</Title>
                <Caption style={styles.caption}>{ course }</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection, styles.topDrawerSection}>
            <DrawerItem
              label="Notícias"
              onPress={() => {props.navigation.navigate('Dashboard')}}
              icon={({color, size}) => (
                <Icon name="newspaper" color={color} size={size} />
              )}
            />

            <DrawerItem
              label="Notas & Frequência"
              onPress={() => {props.navigation.navigate('Grade/Frequency')}}
              icon={({color, size}) => (
                <Icon name="format-list-checkbox" color={color} size={size} />
              )}
            />

            <DrawerItem
              label="Grupos"
              onPress={() => {props.navigation.navigate('Group')}}
              icon={({color, size}) => (
                <Icon name="account-multiple" color={color} size={size} />
              )}
            />

            <DrawerItem
              label="Matérias"
              onPress={() => {props.navigation.navigate('Subject')}}
              icon={({color, size}) => (
                <Icon name="text-subject" color={color} size={size} />
              )}
            />
          </Drawer.Section>

        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          label="Sair"
          onPress={() => {signOut()}}
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
        />
      </Drawer.Section>
    </View>
  )
}
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  header:{
    height: Constants.statusBarHeight + 50,
    backgroundColor: '#294485',
    flexDirection: 'row',
    alignItems: 'center'
  },

  title: {
    flex: 1,
    alignItems: 'center',
    marginRight: 32,
    marginTop: 10,
  },

  pageTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF'
  },

  menuButton: {
    marginTop: 10,
    marginLeft: 7
  }
})
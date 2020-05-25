import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf1f8',
  },
  cardView:{
    position: 'absolute',
    padding: 5,
    borderColor: '#000000',
    backgroundColor: '#c4c4c4',
    borderRadius: 10,
    borderWidth: 2,
    bottom: 10,
    marginHorizontal: 10,
    height: 450,
    width: 340,
  },
  cardTitle:{
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: 30,
    paddingVertical: 5,
    paddingHorizontal: 7,
    alignItems: 'center',
    borderRadius: 7,
  },
  cardTitleText:{
    paddingHorizontal: 10,
  },
})
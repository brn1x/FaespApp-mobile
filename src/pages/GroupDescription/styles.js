import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1
  },

  headerDesc: {
    margin: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },

  headerImage: {
    backgroundColor: '#999',
    padding: 10,
    borderRadius: 5,
  },

  groupInfo: {
    flex: 1,
    marginLeft: 25,
    marginRight: 25,
  },

  groupNameText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },

  groupCategoryText: {
    fontSize: 16,
    fontWeight: '300',
    color: '#999',
    marginBottom: 15
  },

  groupDescText: {
    fontSize: 15,
    fontWeight: 'bold'
  },

  groupDescriptionText: {
    fontSize: 14,
    color: '#222',
    marginBottom: 10,
  },

  groupInfoText: {
    fontSize: 14,
    color: '#666',
  },

  button: {
    height: 46,
    width: 300,
    alignSelf: 'center',
    backgroundColor: '#183196',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  buttonContainer: {
    margin: 15,
  },
});
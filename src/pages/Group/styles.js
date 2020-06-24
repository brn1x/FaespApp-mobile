import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf1f8',
  },

  noGroups: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  noGroupsText: {
    margin: 15,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
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
    marginBottom: 15
  },

  groupList: {
    flex: 1,
    marginBottom: 15
  }
})
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf1f8',
  },

  filterBox: {
    width: 150,
    marginTop: 10,
    marginRight: 15,
    marginBottom: 10,
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#999',

    alignItems: 'center',
    alignSelf: 'flex-end'
  },

  filter: {
    marginLeft: 5,
    marginRight: 30,
  },

  filterIcon: {
    marginLeft: 4
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
    marginTop: 15,
    marginBottom: 15
  },
});
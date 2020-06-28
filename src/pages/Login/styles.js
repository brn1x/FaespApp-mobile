import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf1f8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  formInput: {
    height: 46,
    width: 300,
    alignSelf: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 2.20,
    elevation: 3,
  },

  button: {
    height: 46,
    width: 300,
    alignSelf: 'center',
    backgroundColor: '#183196',
    borderRadius: 4,
    marginTop: 15,
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

  inputErr:{
    height: 46,
    width: 300,
    alignSelf: 'center',
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: 'crimson',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 2.20,
    elevation: 3,
  }
})
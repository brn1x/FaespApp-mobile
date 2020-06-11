import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  form: {
    flex: 1,
    minHeight: 270,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  input: {
    flex: 1,
    minHeight: 25,
    maxHeight: 50,
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 5,
    width: 250,
    margin: 8,
    paddingHorizontal: 8,
    textAlign: 'center'
  },

  inputDescription: {
    flex: 1,
    minHeight: 25,
    maxHeight: 190,
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 5,
    width: 250,
    margin: 8,
    paddingHorizontal: 8,
    textAlign: 'center'
  },

  button: {
    marginBottom: 15,
    paddingHorizontal: 15,
    height: 45,
    width: 250,
    backgroundColor: '#183196',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },

  rowFlex: {
    flexDirection: 'row'
  },

  buttonText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 16,
  },

  selectInput: {
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 5,
    paddingHorizontal: 15,
    height: 30,
    width: 120,
    margin: 5,
    textAlign: 'center',
    alignSelf: 'center'
  },

  dropDown: {
    flex: 1,
    minHeight: 25,
    maxHeight: 50,
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 5,
    width: 250,
    margin: 8,
    paddingHorizontal: 8,
    textAlign: 'center',
    alignSelf: 'center'
  },

  dropDownDouble: {
    flex: 1,
    color: '#000',
    minHeight: 25,
    maxHeight: 50,
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 5,
    width: 120,
    margin: 8,
    paddingHorizontal: 8,
    textAlign: 'center',
    alignSelf: 'center'
  },

  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5
  }
})
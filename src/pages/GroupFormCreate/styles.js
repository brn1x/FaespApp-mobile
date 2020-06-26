import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf1f8'
  },

  form: {
    flex: 1,
    minHeight: 270,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#666',
    flex: 1,
    minHeight: 25,
    maxHeight: 50,
    borderRadius: 5,
    width: 250,
    margin: 8,
    paddingHorizontal: 8,
    textAlign: 'center'
  },

  inputDescription: {
    borderWidth: 1,
    borderColor: '#666',
    flex: 1,
    minHeight: 60,
    maxHeight: 140,
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

  numberInput: {
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 5,
    paddingHorizontal: 15,
    height: 35,
    width: 120,
    margin: 5,
    textAlign: 'center',
    alignSelf: 'center'
  },

  dropDown: {
    borderWidth: 1,
    borderColor: '#666',
    flex: 1,
    minHeight: 25,
    maxHeight: 50,
    borderRadius: 5,
    width: 250,
    margin: 8,
    paddingHorizontal: 8,
    textAlign: 'center',
    alignSelf: 'center'
  },

  dropDownDouble: {
    borderWidth: 1,
    borderColor: '#666',
    flex: 1,
    color: '#000',
    minHeight: 25,
    maxHeight: 50,
    borderRadius: 5,
    width: 140,
    margin: 8,
    paddingHorizontal: 8,
    textAlign: 'center',
    alignSelf: 'center'
  },

  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5
  },

  errorInput:{
    borderWidth: 1,
    borderColor: 'crimson', 
    flex: 1,
    minHeight: 25,
    maxHeight: 50,
    borderRadius: 5,
    width: 250,
    margin: 8,
    paddingHorizontal: 8,
    textAlign: 'center'
  },

  errorDropDown:{
    borderWidth: 1,
    borderColor: 'crimson',
    flex: 1,
    minHeight: 25,
    maxHeight: 50,
    borderRadius: 5,
    width: 250,
    margin: 8,
    paddingHorizontal: 8,
    textAlign: 'center',
    alignSelf: 'center'
  },

  errorInputDescription: {
    borderWidth: 1,
    borderColor: 'crimson',
    flex: 1,
    minHeight: 60,
    maxHeight: 140,
    borderRadius: 5,
    width: 250,
    margin: 8,
    paddingHorizontal: 8,
    textAlign: 'center'
  },

  errorNumberInput: {
    borderWidth: 1,
    borderColor: 'crimson',
    borderRadius: 5,
    paddingHorizontal: 15,
    height: 35,
    width: 120,
    margin: 5,
    textAlign: 'center',
    alignSelf: 'center'
  },

  errorDropDownDouble: {
    borderWidth: 1,
    borderColor: 'crimson',
    flex: 1,
    color: '#000',
    minHeight: 25,
    maxHeight: 50,
    borderRadius: 5,
    width: 140,
    margin: 8,
    paddingHorizontal: 8,
    textAlign: 'center',
    alignSelf: 'center'
  },
})
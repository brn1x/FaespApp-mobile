import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf1f8',
  },

  card: {
    alignContent: 'center',
    justifyContent: 'center',
    padding: 24,

    backgroundColor: '#FBFBFB',
    borderRadius: 8,
    margin: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  subject: {
    textAlign: 'center',
    color: '#333',
    fontSize: 14,
  }
})
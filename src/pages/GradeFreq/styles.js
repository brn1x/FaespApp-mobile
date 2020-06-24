import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf1f8',
  },

  title: {
    color: '#333',
    marginVertical: 20,
    fontSize: 18,
    fontWeight: '700',
    alignSelf: 'center'
  },

  cardList: {
    flex: 1,
    marginBottom: 20,
  },

  gradeCard: {
    alignContent: 'center',
    justifyContent: 'center',
    padding: 8,

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

  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#999',
    marginBottom: 5,
  },

  grade: {
    color: '#333',
    fontWeight: '700'
  },

  cardGrade: {
    fontSize: 16,
    fontWeight: '300',
    color: '#444'
  }
})
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf1f8',
    alignItems: 'center',
  },

  title: {
    color: '#333',
    marginVertical: 20,
    fontSize: 18,
    fontWeight: '700',
  },

  cardList: {
    flex: 1,
    marginBottom: 20,
  },

  gradeCard: {
    backgroundColor: '#dfe3f0',
    flex: 1,
    minWidth: 280,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 10,
  },

  cardTitle: {
    fontSize: 16,
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
    fontSize: 14,
    fontWeight: '300',
    color: '#444'
  }
})
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
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
  }
});
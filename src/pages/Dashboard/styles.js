import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf1f8',
    justifyContent: 'center',
    alignItems: 'center'
  },

  cardView:{
    padding: 8,
    borderColor: '#000000',
    backgroundColor: '#c4c4c4',
    borderRadius: 10,
    borderWidth: 2,
    maxHeight: 450,
    width: 340,
  },
  cardTitle:{
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: 35,
    paddingVertical: 5,
    paddingHorizontal: 7,
    alignItems: 'center',
    borderRadius: 7,
  },
  cardTitleText:{
    paddingHorizontal: 10,
  },
})
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    minWidth: 200,
    minHeight: 50,

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

  groupDesc: {
    margin: 8,
  },

  textGroupName: {
    margin: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },

  textGroupInfo: {
    margin: 5,
    fontSize: 14,
    fontWeight: "300",
    color: '#666'
  },

  textTouchableOpacity: {
    alignItems: 'center',
    marginTop: 10,
    padding: 5,
    flexDirection: "row"
  },

  detailsText: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 12,
    color: '#000'
  }
})
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  drawerContent: {
    flex: 1
  },
  headerContent: {
    flexDirection: 'row',
    marginTop: 15
  },
  headerTexts: {
    marginLeft: 15,
    flexDirection: 'column'
  },
  userInfoSection: {
    paddingLeft: 20
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold'
  },
  caption: {
    fontSize: 14,
    lineHeight: 14
  },
  drawerSection: {
    marginTop: 15
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#F4F4F4',
    borderTopWidth: 1
  },
  topDrawerSection: {
    marginTop: 15,
    borderTopColor: '#F4F4F4',
    borderTopWidth: 1
  }
});
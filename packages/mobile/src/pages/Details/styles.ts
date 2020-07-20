import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  areaView: {
    flex: 1,
    paddingTop: 20,
  },

  container: {
    flex: 1,
    padding: 32,
    paddingTop: 20,
  },

  pointImage: {
    width: '100%',
    height: 120,
    marginTop: 32,
    borderRadius: 10,
    resizeMode: 'cover',
  },

  pointName: {
    marginTop: 24,
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 28,
    color: '#322153',
  },

  pointItems: {
    marginTop: 8,
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#6C6C80',
  },

  address: {
    marginTop: 32,
  },

  addressTitle: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
    color: '#322153',
  },

  addressContent: {
    marginTop: 8,
    fontFamily: 'Roboto_400Regular',
    lineHeight: 24,
    color: '#6C6C80',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#999',
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingVertical: 20,
    paddingHorizontal: 32,
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    height: 50,
    backgroundColor: '#34CB79',
    borderRadius: 10,
  },

  buttonText: {
    marginLeft: 8,
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
    color: '#FFF',
  },
});

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    maxWidth: 260,
    marginTop: 64,
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 32,
    color: '#322153',
  },

  description: {
    maxWidth: 260,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#6C6C80',
  },

  input: {
    height: 60,
    marginBottom: 8,
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    marginTop: 8,
    overflow: 'hidden',
    backgroundColor: '#34CB79',
    borderRadius: 10,
  },

  buttonIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
  },
});

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  areaView: {
    flex: 1,
    paddingTop: 20,
  },

  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 20,
  },

  title: {
    marginTop: 24,
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 20,
  },

  description: {
    marginTop: 4,
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    color: '#6C6C80',
  },

  mapContainer: {
    flex: 1,
    width: '100%',
    marginTop: 16,
    overflow: 'hidden',
    borderRadius: 10,
  },

  map: {
    width: '100%',
    height: '100%',
  },

  mapMarker: {
    width: 90,
    height: 80,
  },

  mapMarkerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 90,
    height: 70,
    overflow: 'hidden',
    backgroundColor: '#34CB79',
    borderRadius: 8,
  },

  mapMarkerImage: {
    width: 90,
    height: 45,
    resizeMode: 'cover',
  },

  mapMarkerTitle: {
    flex: 1,
    fontFamily: 'Roboto_400Regular',
    fontSize: 13,
    lineHeight: 23,
    color: '#FFF',
  },

  itemsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 32,
  },

  item: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 120,
    height: 120,
    paddingTop: 20,
    paddingBottom: 16,
    marginRight: 8,
    textAlign: 'center',
    backgroundColor: '#fff',
    borderColor: '#eee',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 16,
  },

  selectedItem: {
    borderColor: '#34CB79',
    borderWidth: 2,
  },

  itemTitle: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 13,
    textAlign: 'center',
  },
});

import React, { useState, useEffect } from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SvgUri } from 'react-native-svg';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Location from 'expo-location';
import {
  CollectionPointIndexResult,
  WasteItemIndexResult,
} from '@ecoleta/core';
import styles from './styles';
import { PointParams, SearchParams } from '../../models';
import api from '../../services/api';

type MapPosition = [number, number];

interface CurrentLocationResult {
  ok: boolean;
  position?: MapPosition;
}

const DefaultPosition: MapPosition = [0, 0];

const Points = () => {
  const [items, setItems] = useState<WasteItemIndexResult[]>([]);
  const [points, setPoints] = useState<CollectionPointIndexResult[]>([]);
  const [selectedItemsId, setSelectedItemsId] = useState<number[]>([]);
  const [initialPosition, setInitialPosition] = useState(DefaultPosition);
  const navigation = useNavigation();
  const route = useRoute();

  const routeParams = route.params as SearchParams;

  useEffect(() => {
    api.items.all().then((response) => {
      setItems(response.data);
    });
  }, []);

  useEffect(() => {
    const data = {
      state: routeParams.state,
      city: routeParams.city,
      items: selectedItemsId,
    };

    api.points.search(data).then((response) => {
      setPoints(response.data);
    });
  }, [selectedItemsId]);

  useEffect(() => {
    loadCurrentCoordinates();
  }, []);

  async function loadCurrentCoordinates() {
    const { status } = await Location.requestPermissionsAsync();

    if (status !== Location.PermissionStatus.GRANTED) {
      Alert.alert(
        'Ops',
        'Precisamos de sua permissão para obter sua localização atual',
      );

      return;
    }

    const location = await Location.getCurrentPositionAsync();
    const { latitude, longitude } = location.coords;

    setInitialPosition([latitude, longitude]);
  }

  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleNavigateToDetails(pointId: number) {
    navigation.navigate('Details', { pointId } as PointParams);
  }

  function isItemSelected(itemId: number) {
    return selectedItemsId.findIndex((id) => id === itemId) >= 0;
  }

  function handleItemSelection(itemId: number) {
    if (isItemSelected(itemId)) {
      setSelectedItemsId(selectedItemsId.filter((id) => id !== itemId));
    } else {
      setSelectedItemsId([...selectedItemsId, itemId]);
    }
  }

  return (
    <SafeAreaView style={styles.areaView}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>

        <Text style={styles.title}>Bem Vindo.</Text>
        <Text style={styles.description}>
          Encontre no mapa um ponto de coleta.
        </Text>

        <View style={styles.mapContainer}>
          {initialPosition[0] !== 0 && (
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: initialPosition[0],
                longitude: initialPosition[1],
                latitudeDelta: 0.014,
                longitudeDelta: 0.014,
              }}
            >
              {points.map((point) => (
                <Marker
                  key={String(point.id)}
                  onPress={() => handleNavigateToDetails(point.id)}
                  coordinate={{
                    latitude: point.latitude,
                    longitude: point.longitude,
                  }}
                  style={styles.mapMarker}
                >
                  <View style={styles.mapMarkerContainer}>
                    <Image
                      source={{ uri: point.imageUrl }}
                      style={styles.mapMarkerImage}
                    />
                    <Text style={styles.mapMarkerTitle}>{point.name}</Text>
                  </View>
                </Marker>
              ))}
            </MapView>
          )}
        </View>
      </View>
      <View style={styles.itemsContainer}>
        <ScrollView
          horizontal
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          {items.map((item) => (
            <TouchableOpacity
              key={String(item.id)}
              activeOpacity={0.6}
              style={[
                styles.item,
                isItemSelected(item.id) ? styles.selectedItem : {},
              ]}
              onPress={() => handleItemSelection(item.id)}
            >
              <SvgUri width={42} height={42} uri={item.imageUrl} />
              <Text style={styles.itemTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Points;

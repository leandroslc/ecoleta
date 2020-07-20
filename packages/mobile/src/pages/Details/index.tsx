import React, { useEffect, useState } from 'react';
import {
  Linking,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { AppLoading } from 'expo';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import MailComposer from 'expo-mail-composer';
import { CollectionPointShowResult } from '@ecoleta/core';
import { PointParams } from '../../models';
import api from '../../services/api';
import styles from './styles';

const Details = () => {
  const [point, setPoint] = useState<CollectionPointShowResult>();
  const navigation = useNavigation();
  const route = useRoute();
  const routeParams = route.params as PointParams;

  useEffect(() => {
    api.points.show(routeParams.pointId).then((response) => {
      setPoint(response.data);
    });
  }, []);

  function handleNavigateBack() {
    navigation.goBack();
  }

  async function handleMailSend() {
    if (point) {
      await MailComposer.composeAsync({
        subject: 'Interesse na coleta de resíduos',
        recipients: [point.email],
      });
    }
  }

  async function handleWhatsappSend() {
    if (point) {
      await Linking.openURL(`whatsapp://send?phone=${point.whatsapp}`);
    }
  }

  if (!point) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.areaView}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>

        <Image source={{ uri: point.imageUrl }} style={styles.pointImage} />
        <Text style={styles.pointName}>{point.name}</Text>
        <Text style={styles.pointItems}>
          {point.items.map((item) => item.title).join(', ')}
        </Text>

        <View style={styles.address}>
          <Text style={styles.addressTitle}>Endereço</Text>
          <Text style={styles.addressContent}>
            {point.city}, {point.state}
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleWhatsappSend}>
          <FontAwesome name="whatsapp" size={20} color="#fff" />
          <Text style={styles.buttonText}>whatsapp</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={handleMailSend}>
          <Icon name="mail" size={20} color="#fff" />
          <Text style={styles.buttonText}>E-mail</Text>
        </RectButton>
      </View>
    </SafeAreaView>
  );
};

export default Details;

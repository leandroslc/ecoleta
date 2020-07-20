import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Select, { PickerStyle } from 'react-native-picker-select';
import { array } from '@ecoleta/core';
import styles from './styles';
import ibge from '../../services/ibge';

import logoImg from '../../assets/logo.png';
import backgroundImg from '../../assets/home-background.png';

const selectStyles = {
  inputAndroid: styles.input,
  inputIOS: styles.input,
  iconContainer: {
    top: 20,
    right: 12,
  },
} as PickerStyle;

const Home = () => {
  const [states, setStates] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedState, setSelectedState] = useState<string>();
  const [selectedCity, setSelectedCity] = useState<string>();
  const navigation = useNavigation();

  useEffect(() => {
    ibge.states().then((response) => {
      if (!Array.isArray(response.data)) {
        return;
      }

      const names = response.data.map((state) => state.sigla);

      setStates(array.sort(names));
    });
  }, []);

  useEffect(() => {
    if (selectedState) {
      ibge.citiesByState(selectedState).then((response) => {
        const names = response.data.map((city) => city.nome);

        setCities(names);
      });
    }
  }, [selectedState]);

  function handleNavigateToPoints() {
    navigation.navigate('Points', { state: selectedState, city: selectedCity });
  }

  return (
    <ImageBackground
      source={backgroundImg}
      imageStyle={{ width: 274, height: 368 }}
      style={styles.container}
    >
      <View style={styles.main}>
        <Image source={logoImg} />
        <Text style={styles.title}>Seu marketplace de coleta de resíduos.</Text>
        <Text style={styles.description}>
          Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
        </Text>
      </View>

      <View>
        <Select
          onValueChange={setSelectedState}
          style={selectStyles}
          placeholder={{ key: '0', label: 'Selecione um estado', value: '' }}
          value={selectedState}
          items={states.map((state) => {
            return { key: state, label: state, value: state };
          })}
          Icon={() => <Icon name="chevron-down" size={20} />}
        />

        <Select
          onValueChange={setSelectedCity}
          style={selectStyles}
          disabled={!selectedState}
          placeholder={{ key: '0', label: 'Selecione uma cidade', value: '' }}
          value={selectedCity}
          items={cities.map((city) => {
            return { key: city, label: city, value: city };
          })}
          Icon={() => <Icon name="chevron-down" size={20} />}
        />

        <RectButton
          style={styles.button}
          onPress={handleNavigateToPoints}
          enabled={!!selectedState && !!selectedCity}
        >
          <View style={styles.buttonIcon}>
            <Icon name="arrow-right" size={24} color="#fff" />
          </View>
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>
      </View>
    </ImageBackground>
  );
};

export default Home;

import React, { useState, useEffect, ChangeEvent } from 'react';
import { Field, FieldGroup } from '../../components';
import ibge from '../../services/ibge';
import array from '../../utils/array';

interface AddressProps {
  selectedState: string;
  selectedCity: string;
  setSelectedState: (state: string) => void;
  setSelectedCity: (city: string) => void;
}

const AddressLocation = (props: AddressProps) => {
  const {
    selectedState,
    selectedCity,
    setSelectedState,
    setSelectedCity,
  } = props;

  const [states, setStates] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    ibge.states().then((response) => {
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

  function handleStateChange(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedState(event.target.value);
  }

  function handleCityChange(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedCity(event.target.value);
  }

  return (
    <FieldGroup>
      <Field
        as="select"
        label="Estado"
        id="state"
        name="state"
        value={selectedState}
        onChange={handleStateChange}
      >
        <option value="">Selecione um estado</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </Field>

      <Field
        as="select"
        label="Cidade"
        id="city"
        name="city"
        value={selectedCity}
        onChange={handleCityChange}
      >
        <option value="">Selecione uma cidade</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </Field>
    </FieldGroup>
  );
};

export default AddressLocation;

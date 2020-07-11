/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState, FormEvent, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiCheckCircle } from 'react-icons/fi';
import { LatLngTuple } from 'leaflet';
import {
  Button,
  Dropzone,
  FieldSet,
  Form,
  Header,
  Layout,
  LinkButton,
  PageContent,
  Success,
} from '../../components';
import api from '../../services/api';
import AddressLocation from './AddressLocation';
import AddressMap from './AddressMap';
import Contact, { ContactData } from './Contact';
import Items from './Items';
import * as styles from './styles';

const DefaultLatLng = [0.0, 0.0] as LatLngTuple;
const DefaultContactData = {
  name: '',
  email: '',
  whatsapp: '',
} as ContactData;

const CreatePoint = () => {
  const [selectedImage, setSelectedImage] = useState<File>();
  const [contactData, setContactData] = useState(DefaultContactData);
  const [selectedMapPosition, setSelectedMapPosition] = useState(DefaultLatLng);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [success, setSuccess] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
        history.push('/');
      }, 2000);
    }
  }, [success, history]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      name: contactData.name,
      email: contactData.email,
      whatsapp: contactData.whatsapp,
      latitude: String(selectedMapPosition[0]),
      longitude: String(selectedMapPosition[1]),
      state: selectedState,
      city: selectedCity,
      items: selectedItems.join(','),
      image: selectedImage,
    };

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('whatsapp', data.whatsapp);
    formData.append('latitude', data.latitude);
    formData.append('longitude', data.longitude);
    formData.append('state', data.state);
    formData.append('city', data.city);
    formData.append('items', data.items);

    if (data.image) {
      formData.append('image', data.image);
    }

    await api.createPoint(formData);

    setSuccess(true);
  }

  return (
    <Layout>
      <Header>
        <LinkButton as={Link} icon={FiArrowLeft} to="/">
          Voltar para home
        </LinkButton>
      </Header>

      <PageContent type="card">
        <Form title="Cadastro do ponto de coleta" onSubmit={handleSubmit}>
          <Dropzone onFileUploaded={setSelectedImage} />

          <FieldSet legend="Dados">
            <Contact
              contactData={contactData}
              setContactData={setContactData}
            />
          </FieldSet>

          <FieldSet legend="Endereço" help="Selecione o endereço no mapa">
            <AddressMap
              selectedPosition={selectedMapPosition}
              setSelectedPosition={setSelectedMapPosition}
            />

            <AddressLocation
              selectedState={selectedState}
              setSelectedState={setSelectedState}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
            />
          </FieldSet>

          <FieldSet
            legend="Ítens de coleta"
            help="Selecione um ou mais itens abaixo"
          >
            <Items
              selectedItemsId={selectedItems}
              setSelectedItemsId={setSelectedItems}
            />
          </FieldSet>

          <div css={styles.buttonContainer}>
            <Button as="button" type="submit" size="medium">
              Cadastrar ponto de coleta
            </Button>
          </div>
        </Form>
      </PageContent>

      {success && <Success message="Cadastro cocluído!" icon={FiCheckCircle} />}
    </Layout>
  );
};

export default CreatePoint;

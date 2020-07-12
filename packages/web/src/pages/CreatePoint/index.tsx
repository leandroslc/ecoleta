/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState, FormEvent, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiCheckCircle } from 'react-icons/fi';
import { LatLngTuple } from 'leaflet';
import {
  Button,
  Dropzone,
  ErrorSummary,
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
import validate from './validation';
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
  const [error, setError] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
        history.push('/');
      }, 2000);
    }
  }, [success, history]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [error]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      name: contactData.name,
      email: contactData.email,
      whatsapp: contactData.whatsapp,
      latitude: selectedMapPosition[0],
      longitude: selectedMapPosition[1],
      state: selectedState,
      city: selectedCity,
      items: selectedItems,
      image: selectedImage,
    };

    const [isValid, validationError] = await validate(data);

    if (!isValid) {
      setError(validationError);

      return;
    }

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('whatsapp', data.whatsapp);
    formData.append('latitude', String(data.latitude));
    formData.append('longitude', String(data.longitude));
    formData.append('state', data.state);
    formData.append('city', data.city);
    formData.append('items', data.items.join(','));

    if (data.image) {
      formData.append('image', data.image);
    }

    try {
      await api.createPoint(formData);
      setSuccess(true);
    } catch {
      setError('Houve um erro ao enviar os dados');
    }
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
          <ErrorSummary message={error} />

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

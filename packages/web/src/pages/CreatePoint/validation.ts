import * as yup from 'yup';

const latLngTest = {
  test: (value) => value !== 0,
  message: 'É necessário selecionar uma localização no mapa',
} as yup.AssertingTestOptions<number>;

const schema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  email: yup
    .string()
    .email('O email não é válido')
    .required('O email é obrigatório'),
  whatsapp: yup.string().required('O whatsapp é obrigatório'),
  latitude: yup.number().test(latLngTest),
  longitude: yup.number().test(latLngTest),
  state: yup.string().required('O estado é obrigatório'),
  city: yup.string().required('A cidade é obrigatória'),
  items: yup
    .array()
    .min(1, 'É necessário selecionar ao menos um item de coleta'),
  image: yup.mixed().required('A imagem é obrigatória'),
});

async function validate(data: unknown) {
  try {
    await schema.validate(data);
  } catch (error) {
    return [false, error.message];
  }

  return [true];
}

export default validate;

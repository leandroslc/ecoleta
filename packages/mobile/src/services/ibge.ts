import axios from 'axios';

interface UF {
  sigla: string;
}

interface Cidade {
  nome: string;
}

const api = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api',
});

const service = {
  states: () => api.get<UF[]>('v1/localidades/estados'),
  citiesByState: (state: string) =>
    api.get<Cidade[]>(`v1/localidades/estados/${state}/municipios`),
};

export default service;

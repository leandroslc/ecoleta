import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

const service = {
  items: () => api.get('items'),
  createPoint: (data: FormData) => api.post('points', data),
};

export default service;

import Constants from 'expo-constants';
import axios from 'axios';

const { manifest } = Constants;
const port = '3333';

let address: string | undefined = 'https://example.com';

if (typeof manifest.packagerOpts === 'object' && manifest.packagerOpts.dev) {
  const ip = manifest.debuggerHost?.split(':').shift();

  address = `http://${ip}:${port}`;
}

const api = axios.create({
  baseURL: address,
});

const service = {
  items: {
    all: () => api.get('items'),
  },
  points: {
    show: (pointId: number) => api.get(`points/${pointId}`),
    search: (params: unknown) => api.get('points', { params }),
  },
};

export default service;

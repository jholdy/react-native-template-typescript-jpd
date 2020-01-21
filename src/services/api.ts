import axios from 'axios';

const baseURL = __DEV__ ? 'https://localhost/' : 'https://production.com/';

const api = axios.create({
  baseURL,
  timeout: 10000,
});

export default api;

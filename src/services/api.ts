import axios from 'axios';

const baseURL = __DEV__ ? 'http://localhost/' : 'https://production.com/';

axios.defaults.baseURL = baseURL;
const api = axios;

export default api;

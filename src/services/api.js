import axios from 'axios';

import { API_SERVER } from 'react-native-dotenv';

const api = axios.create({
  baseURL: 'http://192.168.100.5:3333/' //API_SERVER
});

export default api;
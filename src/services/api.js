import axios from 'axios';

import { API_SERVER } from 'react-native-dotenv';

const api = axios.create({
  baseURL: API_SERVER
});

export default api;
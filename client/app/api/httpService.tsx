import axios from 'axios';
import {Platform} from 'react-native';

const API_URL = 'http://localhost:3000';

const httpService = axios.create({
  baseURL: Platform.OS === 'android' ? 'http://10.0.2.2:3000' : API_URL,
});

export default httpService;

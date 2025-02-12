import axios from 'axios';
import { Alert } from 'react-native';

const api = axios.create({
  baseURL: 'http://192.168.1.101:3333'
});

const request = api.interceptors.request.use(
  (config) => {
    console.log('INTERCEPTOR REQUEST', config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  });

const response = api.interceptors.response.use(
  (response) => {
    console.log('INTERCEPTOR RESPONSE', response);
    return response;
  },
  (error) => {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data.message;
      Alert.alert(message);
    }
    return Promise.reject(error);
  });


export { api, request, response };
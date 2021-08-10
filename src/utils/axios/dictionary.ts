import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.dictionaryapi.dev/api/v2/entries',
  timeout: 1000,
});

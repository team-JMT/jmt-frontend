import axios from 'axios';

export const Instance = axios.create({
  baseURL: 'https://api.jmt-matzip.dev',
});

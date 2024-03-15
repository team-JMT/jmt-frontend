import axios from 'axios';

import BridgeApi from '@utils/Bridge.ts';
import { nativeInfo } from '@utils/storage.ts';

export const Instance = axios.create({
  baseURL: 'https://api.jmt-matzip.dev',
});

Instance.interceptors.request.use((config) => {
  const token = nativeInfo.getData().accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

Instance.interceptors.response.use(
  (res) => res,
  async (error) => {
    /** 1 */
    if (error.response?.status === 401) {
      BridgeApi.token();
    }

    return Promise.reject(error);
  },
);

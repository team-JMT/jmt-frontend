import axios from 'axios';

import { nativeInfo } from '@utils/storage';

export const Instance = axios.create({
  baseURL: 'https://api.jmt-matzip.dev',
  headers: {
    authorization: `Bearer ${nativeInfo.getData().accessToken}`,
  },
});

import axios from 'axios';

import { PostGroupRequest } from './data/PostGroup.ts';

export const postGroup = (payload: PostGroupRequest) => {
  return axios.post('/api/v1/group', payload);
};

import { changeToFormData } from '@utils/changeToFormData.ts';

import { Instance } from '../Instance.ts';

import { PostGroupRequest } from './data/PostGroup.ts';

export const postGroup = (payload: PostGroupRequest) => {
  const formData = changeToFormData(payload);
  return Instance.post('/api/v1/group', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

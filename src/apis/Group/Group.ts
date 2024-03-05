import { changeToFormData } from '@utils/changeToFormData.ts';

import { Instance } from '../Instance.ts';

import { GetGroupResponse } from './data/GetGroup.ts';
import { PostGroupRequest, PostGroupResponse } from './data/PostGroup.ts';

export const postGroup = (payload: PostGroupRequest) => {
  const formData = changeToFormData(payload);
  return Instance.post<PostGroupResponse>('/api/v1/group', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const getGroup = async (groupId: number) => {
  return await Instance.get<GetGroupResponse>(`/api/v1/group/${groupId}`);
};

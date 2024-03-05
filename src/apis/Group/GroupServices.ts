import { changeToFormData } from '@utils/changeToFormData.ts';

import { Instance } from '../Instance.ts';

import { GetGroupResponse } from './data/GetGroup.ts';
import { GetMyGroupsResponse } from './data/getMyGroups.ts';
import { PostGroupRequest, PostGroupResponse } from './data/PostGroup.ts';

export const postGroup = (payload: PostGroupRequest) => {
  const formData = changeToFormData(payload);
  return Instance.post<PostGroupResponse>('/api/v1/group', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
export const getMyGroups = () => {
  return Instance.get<GetMyGroupsResponse>(`/api/v1/group/my`);
};

export const getGroup = async (groupId: number) => {
  return await Instance.get<GetGroupResponse>(`/api/v1/group/${groupId}`);
};

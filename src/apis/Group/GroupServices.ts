import { changeToFormData } from '@utils/changeToFormData.ts';

import { Instance } from '../Instance.ts';

import { ApiResponse } from './ApiResponse.ts';
import { GetGroupResponse } from './data/GetGroup.ts';
import { GetMyGroupsResponse } from './data/getMyGroups.ts';
import { PostGroupRequest, PostGroupResponse } from './data/PostGroup.ts';
import { PostRestaurantSearch, RestaurantRequest } from './data/restaurant.ts';

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

export const getGroup = (groupId: number) => {
  return Instance.get<GetGroupResponse>(`/api/v1/group/${groupId}`);
};

export const searchRestaurant = async (page: number, body: RestaurantRequest) =>
  await Instance.post<PostRestaurantSearch>(`/api/v1/restaurant/search/map?page=${page}&size=20`, body);

export const postJoinGroup = async (groupId: number) => {
  return await Instance.post<ApiResponse<object>>(`/api/v1/group/${groupId}/user`);
};

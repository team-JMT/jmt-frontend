import { ApiResponse } from '../ApiResponse.ts';
export interface GroupData {
  groupId: number;
  groupName: string;
  groupIntroduce: string;
  groupProfileImageUrl: string;
  groupBackgroundImageUrl: string;
  isPrivateGroup: boolean;
  memberCnt: number;
  restaurantCnt: number;
}

export type GetGroupResponse = ApiResponse<GroupData>;

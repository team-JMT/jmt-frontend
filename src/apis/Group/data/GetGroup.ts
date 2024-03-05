export interface GroupData {
  groupId: number;
  groupName: string;
  groupIntroduce: string;
  groupProfileImage?: string;
  groupBackgroundImage?: string;
  isPrivateGroup: boolean;
}
export interface GetGroupResponse {
  data: GroupData;
  message: string;
  code: string;
}

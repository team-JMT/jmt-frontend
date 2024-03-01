export interface PostGroupRequest {
  groupName: string;
  groupIntroduce: string;
  groupProfileImage?: File;
  groupBackgroundImage?: File;
  isPrivateGroup: boolean;
}
export interface PostGroupResponse {
  data: {
    groupCode: string;
  };
}

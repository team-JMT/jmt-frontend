import { Group } from '../../../models/Group.ts';
import { ApiResponse } from '../ApiResponse.ts';

export type GetMyGroupsResponse = ApiResponse<Group[]>;

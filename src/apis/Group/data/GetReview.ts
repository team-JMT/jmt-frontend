import { ApiResponse } from '../ApiResponse.ts';

import { PageMeta } from './restaurant';

export interface ReviewData {
  reviewId: 0;
  recommendRestaurantId: 0;
  userName: string;
  reviewContent: string;
  reviewImages: string[];
  reviewerImageUrl: string;
  groupId: 0;
  groupName: string;
}

export type GetReviewResponse = {
  reviewList: ReviewData[];
  page: PageMeta;
};

export type GetRestaurantReview = ApiResponse<GetReviewResponse>;

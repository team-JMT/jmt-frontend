import { ApiResponse } from '../ApiResponse.ts';
//request type

export type Coordinate = { x: string; y: string };
export type Filter = { categoryFilter: string; isCanDrinkLiquor: boolean | undefined };
export type RestaurantRequest = {
  userLocation: Coordinate;
  startLocation: Coordinate;
  endLocation: Coordinate;
  groupId: number;
  filter?: Filter;
};

//response type
export type Restaurant = {
  id: number;
  name: string;
  placeUrl: string;
  phone: string;
  address: string;
  roadAddress: string;
  x: number;
  y: number;
  restaurantImageUrl: string;
  introduce: string;
  category: string;
  userNickName: string;
  userProfileImageUrl: string;
  canDrinkLiquor: boolean;
  differenceInDistance: string;
};
export type PageMeta = {
  totalPages: number;
  currentPage: number;
  totalElements: number;
  size: number;
  empty: boolean;
  numberOfElements: number;
  pageFirst: boolean;
  pageLast: boolean;
};

export type PostRestaurantSearchResponse = {
  restaurants: Restaurant[];
  page: PageMeta;
};

export type PostRestaurantSearch = ApiResponse<PostRestaurantSearchResponse>;

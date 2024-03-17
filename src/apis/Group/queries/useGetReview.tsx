import { useQuery } from '@tanstack/react-query';

import { getRestaurantReview } from '../GroupServices';

export const useGetReview = (placeId: number) => {
  const { data, ...rest } = useQuery({
    queryFn: async () => await getRestaurantReview(placeId),
    queryKey: ['REVIEW'],
  });

  const reviewList = data?.data?.data?.reviewList;
  const lastReview = reviewList ? reviewList[reviewList.length - 1] : null;

  return {
    lastReview: lastReview,
    ...rest,
  };
};

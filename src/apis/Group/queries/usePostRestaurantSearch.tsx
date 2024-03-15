import { useQuery } from '@tanstack/react-query';

import { RestaurantRequest } from '../data/restaurant';
import { searchRestaurant } from '../GroupServices';

export const usePostRestaurantSearch = (page: number, body: RestaurantRequest, deps: any[]) => {
  const { data, ...rest } = useQuery({
    queryFn: () => searchRestaurant(page, body),
    queryKey: ['RESTAURANT', ...deps],
  });

  return {
    restaurant: data?.data.data.restaurants,
    message: data?.data.message,
    ...rest,
  };
};

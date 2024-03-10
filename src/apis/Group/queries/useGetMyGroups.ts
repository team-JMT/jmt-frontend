import { useQuery } from '@tanstack/react-query';

import { getMyGroups } from '../GroupServices.ts';

export const useGetMyGroups = () => {
  const { data, ...rest } = useQuery({
    queryFn: () => getMyGroups(),
    queryKey: ['MY_GROUPS'],
  });

  return {
    myGroupsData: data?.data.data,
    ...rest,
  };
};

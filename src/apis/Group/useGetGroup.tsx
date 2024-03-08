import { useQuery } from '@tanstack/react-query';

import { getGroup } from './GroupServices';

const useGetGroup = (groupId: number) => {
  const { data, ...rest } = useQuery({
    queryKey: ['group', groupId],
    queryFn: () => getGroup(groupId),
  });

  return {
    Group: data?.data.data,
    ...rest,
  };
};

export default useGetGroup;

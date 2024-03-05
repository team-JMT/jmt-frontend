import { useQuery } from '@tanstack/react-query';

import { getGroup } from './GroupServices';

const useGetGroup = (groupId: number) => {
  const { isLoading, isError, data } = useQuery(
    {
      queryKey: ['group', groupId], // 쿼리 식별자(key)와 변수 (groupId)로 구성된 배열
      queryFn: () => getGroup(groupId),
    }, // 여기서 groupId는 어딘가에서 가져와야 합니다.
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }
  return {
    Group: data?.data.data,
    message: data?.data.message,
    isError: isError,
  };
};

export default useGetGroup;

import { useMutation } from '@tanstack/react-query';

import { postGroup } from '../GroupServices.ts';

export const usePostGroupMutate = () => {
  const { mutateAsync, mutate, ...rest } = useMutation({
    mutationFn: postGroup,
  });

  return {
    postGroup: mutate,
    postGroupAsync: mutateAsync,
    ...rest,
  };
};

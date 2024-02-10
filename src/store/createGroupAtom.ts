import { atom } from 'jotai';

type CreateGroupAtom = {
  name: string;
  introduce: string;
  profileImage: File | null;
  backgroundImage: File | null;
};

export const createGroupAtom = atom<CreateGroupAtom>({
  name: '',
  introduce: '',
  profileImage: null,
  backgroundImage: null,
});

export const handleSetNameAtom = atom(null, (get, set, name: string) => {
  set(createGroupAtom, {
    ...get(createGroupAtom),
    name: name,
  });
});

export const handleSetDescriptionAtom = atom(null, (get, set, description: string) => {
  set(createGroupAtom, {
    ...get(createGroupAtom),
    description,
  });
});

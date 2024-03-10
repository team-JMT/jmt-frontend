import { ReactNode } from 'react';

import RightArrowIconButton from '@components/common/RightArrowIcon.tsx';
import CreateGroupButton from '@components/Main/CreateGroupButton.tsx';
import MyGroupCard from '@components/Main/MyGroupCard.tsx';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useMainFlow } from '@stacks/StackFlow';
import { MainContainer, MyGroupList, MyGroupListContainer, MyGroupListHeader } from '@styles/pages/Main.tsx';
import { textStyles } from '@styles/theme/typographies.ts';

import { useGetMyGroups } from '../apis/Group/queries/useGetMyGroups.ts';

const Main = (): ReactNode => {
  const { push } = useMainFlow();
  const { myGroupsData } = useGetMyGroups();

  return (
    <AppScreen
      appBar={{
        height: '48px',
        renderRight: () => <CreateGroupButton onClick={() => push('GroupName', {})} />,
      }}
    >
      <MainContainer>
        <MyGroupListContainer>
          <MyGroupListHeader>
            <span style={textStyles.title_S_Bold}>나의 맛집 그룹</span>
            <RightArrowIconButton onClick={() => push('GroupList', {})} />
          </MyGroupListHeader>
          <MyGroupList>
            {myGroupsData?.map(({ groupId, groupName, groupProfileImageUrl }) => (
              <MyGroupCard key={groupId} image={groupProfileImageUrl} name={groupName} />
            ))}
          </MyGroupList>
        </MyGroupListContainer>
        <button onClick={() => push('GroupDetail', { groupId: 1 })}>그룹 상세</button>
        <button onClick={() => push('GroupList', {})}>그룹 리스트</button>
      </MainContainer>
    </AppScreen>
  );
};

export default Main;

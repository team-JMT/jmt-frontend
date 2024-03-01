import { ReactNode } from 'react';

import CreateGroupButton from '@components/Main/CreateGroupButton.tsx';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useMainFlow } from '@stacks/StackFlow';

const Main = (): ReactNode => {
  const { push } = useMainFlow();
  return (
    <AppScreen
      appBar={{
        height: '48px',
        renderRight: () => <CreateGroupButton onClick={() => push('GroupName', {})} />,
      }}
    >
      <button onClick={() => push('GroupDetail', { groupId: 1 })}>그룹 상세</button>
      <button onClick={() => push('GroupList', {})}>그룹 리스트</button>
    </AppScreen>
  );
};

export default Main;

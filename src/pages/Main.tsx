import { ReactNode } from 'react';

import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useMainFlow } from '@stacks/StackFlow';

const Main = (): ReactNode => {
  const { push } = useMainFlow();
  return (
    <AppScreen
      appBar={{
        title: <div>아마도</div>,

        height: '48px',
      }}
    >
      <div>메인입니다</div>
      <button onClick={() => push('GroupName', {})}>그룹 생성</button>
      <button onClick={() => push('GroupDetail', { groupId: 1 })}>그룹 상세</button>
      <button onClick={() => push('GroupList', {})}>그룹 리스트</button>
    </AppScreen>
  );
};

export default Main;

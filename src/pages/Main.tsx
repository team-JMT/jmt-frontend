import React from 'react';

import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useMainFlow } from '@stacks/StackFlow';

const Main = () => {
  const { push } = useMainFlow();
  return (
    <AppScreen
      appBar={{
        title: <div>아마도</div>,
        // backButton: {
        //   render: () => <button>뒤</button>,
        // },

        //https://github.com/daangn/stackflow/blob/main/demo/src/activities/Main.tsx
        height: '48px',
      }}
    >
      <div>메인입니다</div>
      <div className={'name-box'} onClick={() => push('CreateGroup', {})}>
        그룹 생성
      </div>
    </AppScreen>
  );
};

export default Main;

import React from 'react';

import { styled } from '@linaria/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useMainFlow } from '@stacks/StackFlow';

const Please = styled.div`
  background-color: #555;
`;
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
      <Please>되라</Please>
    </AppScreen>
  );
};

export default Main;

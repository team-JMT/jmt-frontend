import { ReactNode } from 'react';

import { styled } from '@linaria/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useMainFlow } from '@stacks/StackFlow';

import { colors } from '../styles/theme/color';
import { textStyles } from '../styles/theme/typographies';

const Please = styled.div`
  background-color: #555;
  color: ${colors.main700};
  ${textStyles.title_L_Bold};
`;
const Main = (): ReactNode => {
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
      <div onClick={() => push('CreateGroup', {})}>그룹 생성</div>
      <div onClick={() => push('GroupDetail', { groupId: 1 })}>그룹 상세</div>
      <Please>되라</Please>
    </AppScreen>
  );
};

export default Main;

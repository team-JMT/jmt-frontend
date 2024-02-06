import { ReactNode } from 'react';

import BackIcon from '@assets/BackIcon';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useMainFlow } from '@stacks/StackFlow';
import { BackBox } from '@styles/global';

const CreateGroup = (): ReactNode => {
  const { pop } = useMainFlow();

  return (
    <AppScreen
      appBar={{
        backButton: {
          render: () => (
            <BackBox onClick={pop}>
              <BackIcon />
            </BackBox>
          ),
        },
        borderColor: '#00ff0000',
        backgroundColor: '#00ff0000',
        height: '48px',
      }}
    >
      <div>그룹생성입니다</div>
    </AppScreen>
  );
};

export default CreateGroup;

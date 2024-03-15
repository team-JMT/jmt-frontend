import React, { useEffect, useState } from 'react';

import { useSetAtom } from 'jotai/index';

import BackIcon from '@assets/BackIcon.tsx';
import Button from '@components/common/Button.tsx';
import Footer from '@components/Footer.tsx';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useMainFlow } from '@stacks/StackFlow.ts';
import { handleSetDescriptionAtom } from '@store/createGroupAtom.ts';
import { BackBox } from '@styles/global.tsx';
import { Container, TextArea, Title } from '@styles/pages/CreateGroup.styled.ts';
import { textStyles } from '@styles/theme/typographies.ts';
import BridgeApi from '@utils/Bridge.ts';

const IntroduceGroup = () => {
  const { pop, replace } = useMainFlow();
  const [inputValue, setInputValue] = useState<string>('');

  const handleSetDescription = useSetAtom(handleSetDescriptionAtom);
  const handleClick = (): void => {
    handleSetDescription(inputValue);
    replace('GroupImage', {});
  };
  useEffect(() => {
    BridgeApi.navigation(false);
  }, []);
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
        height: '48px',
      }}
    >
      <Container>
        <Title>그룹을 소개해주세요</Title>
        <TextArea placeholder={'그룹을 소개해주세요'} onChange={(e) => setInputValue(e.target.value)} />
      </Container>
      <Footer>
        <Button onClick={handleClick} disabled={inputValue.length === 0}>
          <span style={textStyles.text_L_Bold}>다음</span>
        </Button>
      </Footer>
    </AppScreen>
  );
};

export default IntroduceGroup;

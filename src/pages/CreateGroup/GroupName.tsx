import { ReactNode, useState } from 'react';

import { useSetAtom } from 'jotai';

import BackIcon from '@assets/BackIcon.tsx';
import Button from '@components/common/Button.tsx';
import Footer from '@components/Footer.tsx';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useMainFlow } from '@stacks/StackFlow.ts';
import { handleSetNameAtom } from '@store/createGroupAtom.ts';
import { BackBox } from '@styles/global.tsx';
import { Container, Input, Title } from '@styles/pages/CreateGroup.styled.ts';
import { textStyles } from '@styles/theme/typographies.ts';

const GroupName = (): ReactNode => {
  const { pop, replace } = useMainFlow();
  const [inputValue, setInputValue] = useState<string>('');

  const handleSetName = useSetAtom(handleSetNameAtom);
  const handleClick = (): void => {
    handleSetName(inputValue);
    replace('IntroduceGroup', {});
  };
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
        <Title>
          맛집 그룹을 새롭게 만들게요.
          <br /> 어떤 이름으로 부르면 될까요?
        </Title>
        <Input placeholder={'특수문자(0000) 사용불가'} onChange={(e) => setInputValue(e.target.value)} />
      </Container>
      <Footer>
        <Button onClick={handleClick} disabled={inputValue.length === 0}>
          <span style={textStyles.text_L_Bold}>다음</span>
        </Button>
      </Footer>
    </AppScreen>
  );
};

export default GroupName;

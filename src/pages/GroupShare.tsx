import { ReactNode } from 'react';

import BackIcon from '@assets/BackIcon';
import ImageBox from '@components/common/ImageBox';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useMainFlow } from '@stacks/StackFlow';
import { BackBox } from '@styles/global';
import { ButtonBox, KakaoBtn, Main500Btn, MainText } from '@styles/pages/GroupShare';

import useShareToKakao from '../hooks/useShareToKakao';

const GroupShare = (): ReactNode => {
  const { pop } = useMainFlow();

  const copyToClipboard = (text: string) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  const linkShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '타이틀',
        text: 'Hello World',
        url: 'https://github.com/team-JMT/jmt-frontend',
      });
    } else {
      //alert('공유하기가 지원되지 않는 환경 입니다.');
      copyToClipboard('https://github.com/team-JMT/jmt-frontend');
    }
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
        borderColor: '#00ff0000',
        backgroundColor: '#00ff0000',
        //https://github.com/daangn/stackflow/blob/main/demo/src/activities/Main.tsx
        height: '48px',
      }}
    >
      <MainText>
        친구를 초대해서
        <br />
        서로의 맛집을 탐방하세요!
      </MainText>
      <ImageBox width={'100%'} height={'300px'} radius_px={0} />
      <ButtonBox>
        <KakaoBtn onClick={useShareToKakao}>카톡으로 공유하기</KakaoBtn>
        <Main500Btn onClick={linkShare}>그룹 링크 공유하기</Main500Btn>
      </ButtonBox>
    </AppScreen>
  );
};

export default GroupShare;

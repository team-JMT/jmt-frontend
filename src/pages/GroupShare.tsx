import { ReactNode } from 'react';

import BackIcon from '@assets/BackIcon';
import ImageBox from '@components/common/ImageBox';
import { styled } from '@linaria/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useMainFlow } from '@stacks/StackFlow';
import { colors } from '@styles/theme/color';
import { textStyles } from '@styles/theme/typographies';

const BackBox = styled.div`
  display: flex;
  margin-left: 12px;
  align-items: center;
`;
const MainText = styled.div`
  margin: 16px 0 48px 20px;
  ${textStyles.title_M_Bold}
  color: ${colors.gray900};
`;
const GroupShare = (): ReactNode => {
  const { pop } = useMainFlow();

  const shareKakao = () => {
    // window.Kakao.Link.sendCustom({
    //   templateId: 103292, // 내가 만든 템플릿 아이디
    //   templateArgs: {
    //     title: '제목 영역입니다.',
    //     description: '설명 영역입니다.',
    //   },
    // });
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '그룹 이름',
        description: '그룹에 대한 설명을 쓰는 곳입니다. 근데 여기에 그룹 사진이 없으면 어떻게 되죠',
        imageUrl: 'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://jmt-frontend-ad7b8.web.app/group-detail/1/',
        },
      },
      buttons: [
        {
          title: '웹으로 이동',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://jmt-frontend-ad7b8.web.app/group-detail/1/',
          },
        },
        {
          title: '앱으로 이동',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://jmt-frontend-ad7b8.web.app/group-detail/1/',
          },
        },
      ],
    });
  };

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

      <button onClick={shareKakao}>카톡으로 공유하기</button>
      <button onClick={linkShare}>그룹 링크 공유하기</button>
    </AppScreen>
  );
};

export default GroupShare;

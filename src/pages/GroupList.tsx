import { ReactNode } from 'react';

import BackIcon from '@assets/BackIcon';
import VerticalBar from '@assets/VerticalBar';
import ImageBox from '@components/common/ImageBox';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useMainFlow } from '@stacks/StackFlow';
import { BackBox } from '@styles/global';
import { Title, MyGroup, TextBox, MyGroupWrapper } from '@styles/pages/GroupList';

const GroupList = (): ReactNode => {
  const { pop, push } = useMainFlow();

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
        renderRight: () => <BackBox onClick={() => push('GroupListEdit', {})}>편집</BackBox>,
        borderColor: '#00ff0000',
        backgroundColor: '#00ff0000',
        height: '48px',
      }}
    >
      <Title>나의 맛집 그룹</Title>
      <MyGroupWrapper>
        <MyGroup>
          <ImageBox width="80px" height="80px" radius_px={12} />
          <TextBox>
            <div className="place-name">가가가</div>
            <div className="numbers">
              멤버 111 <VerticalBar /> 맛집 11
            </div>
            <div className="intro">가나다라마바사아자차카타파하아야어여오요우유으이</div>
          </TextBox>
        </MyGroup>
        <MyGroup>
          <ImageBox width="80px" height="80px" radius_px={12} />
          <TextBox>
            <div className="place-name">가가가</div>
            <div className="numbers">
              멤버 111 <VerticalBar /> 맛집 11
            </div>
            <div className="intro">가나다라마바사아자차카타파하아야어여오요우유으이</div>
          </TextBox>
        </MyGroup>
      </MyGroupWrapper>
    </AppScreen>
  );
};

export default GroupList;

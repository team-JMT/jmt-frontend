import React from 'react';

import VerticalBar from '@assets/VerticalBar';
import ImageBox from '@components/common/ImageBox';
import { styled } from '@linaria/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { colors } from '@styles/theme/color';
import { textStyles } from '@styles/theme/typographies';

import BackIcon from '../assets/BackIcon';
import PostedPlace from '../layouts/GroupDetail/PostedPlace';
import Chip from '@components/common/Chip';
import DownArrow from '@assets/DownArrow';
import FilterChip from '@components/common/FilterChip';

const BackBox = styled.div`
  display: flex;
  margin-left: 12px;
  align-items: center;
`;

const ColorBox = styled.div`
  background-color: ${colors.main400};
  width: 100%;
  height: 196px;
`;
const MainContainer = styled.div`
  margin: 0 20px;
  position: relative;
  bottom: 60px;
`;
const GroupName = styled.div`
  margin-top: 12px;
  ${textStyles.title_M_Bold}
`;
const Numbers = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  gap: 16px;
  ${textStyles.text_L_Medium}
  color: ${colors.gray700};
`;
const Introduction = styled.div`
  margin-top: 16px;
  ${textStyles.text_M_Medium}
  color:${colors.gray600};
`;
const GrayBar = styled.div`
  width: calc(100% + 40px);
  height: 4px;
  position: relative;
  right: 20px;
  margin: 24px 0;
  background-color: ${colors.gray100};
`;
const TitleSBold = styled.div`
  ${textStyles.title_S_Bold}
  margin-bottom: 16px;
`;
const Divider = styled.div`
  margin: 0 4px;
  height: 14px;
  width: 1px;
  background: ${colors.gray200};
`;
const FilterArea = styled.aside`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
`;

const GroupDetail = () => {
  return (
    <AppScreen
      appBar={{
        backButton: {
          render: () => (
            <BackBox>
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
      <ColorBox />
      <MainContainer>
        <ImageBox width_px={80} height_px={80} radius_px={16} />
        <GroupName>버거버거</GroupName>
        <Numbers>
          멤버 111 <VerticalBar /> 맛집 11
        </Numbers>
        <Introduction>
          가나다라마바사아자차카타파하아야어여오요우유으이가나다라마바사아자차카타파하아야어여오요우유으이가나다라마바사아자차카타파하아야어여오요우유으이
        </Introduction>
        <GrayBar />
        <TitleSBold>최근 등록된 맛집</TitleSBold>
        <FilterArea>
          <Chip>
            가까운순
            <DownArrow />
          </Chip>
          <Divider />
          <FilterChip active={false}>종류</FilterChip>
          <FilterChip active={false}>주류 여부</FilterChip>
        </FilterArea>
        <PostedPlace />
      </MainContainer>
    </AppScreen>
  );
};

export default GroupDetail;

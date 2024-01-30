import { ReactNode } from 'react';

import { useAtom, useSetAtom } from 'jotai';

import DownArrow from '@assets/DownArrow';
import ShareIcon from '@assets/ShareIcon';
import VerticalBar from '@assets/VerticalBar';
import Chip from '@components/common/Chip';
import FilterChip from '@components/common/FilterChip';
import ImageBox from '@components/common/ImageBox';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useMainFlow } from '@stacks/StackFlow';
import { openBottomSheet } from '@store/bottomSheetAtom';
import { SortKey, drinkCategoryState, foodCategoryState, sortByState } from '@store/filterAtom';
import { BackBox } from '@styles/global';
import {
  ColorBox,
  Divider,
  FilterArea,
  Gradation,
  GrayBar,
  Introduction,
  Main400,
  MainContainer,
  Numbers,
  Title,
  TitleSBold,
} from '@styles/pages/GroupDetail';

import BackIcon from '../assets/BackIcon';
import PostedPlace from '../layouts/GroupDetail/PostedPlace';

const GroupDetail = (): ReactNode => {
  const { pop, push } = useMainFlow();
  const [foodState] = useAtom(foodCategoryState);
  const [drinkState] = useAtom(drinkCategoryState);
  const [sortState] = useAtom(sortByState);
  const handleOpenBottomSheet = useSetAtom(openBottomSheet);
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
      <ColorBox>
        <Main400 /> <Gradation />
      </ColorBox>
      <MainContainer>
        <ImageBox width={'80px'} height={'80px'} radius_px={16} />
        <Title>
          <div>버거버거</div>
          <div onClick={() => push('GroupShare', { groupId: 1 })}>
            <ShareIcon />
          </div>
        </Title>
        <Numbers>
          멤버 111 <VerticalBar /> 맛집 11
        </Numbers>
        <Introduction>
          가나다라마바사아자차카타파하아야어여오요우유으이가나다라마바사아자차카타파하아야어여오요우유으이가나다라마바사아자차카타파하아야어여오요우유으이
        </Introduction>
        <GrayBar />
        <TitleSBold>최근 등록된 맛집</TitleSBold>
        <FilterArea>
          <Chip onClick={() => handleOpenBottomSheet('SORT_BY')}>
            {SortKey[sortState]}
            <DownArrow />
          </Chip>
          <Divider />
          <FilterChip active={foodState !== ''} onClick={() => handleOpenBottomSheet('FOOD_CATEGORY')}>
            종류
          </FilterChip>
          <FilterChip active={drinkState !== ''} onClick={() => handleOpenBottomSheet('DRINK_CATEGORY')}>
            주류 여부
          </FilterChip>
        </FilterArea>
        <PostedPlace />
        <button onClick={() => push('GroupSetting', {})}>그룹 세팅</button>
      </MainContainer>
    </AppScreen>
  );
};

export default GroupDetail;

import React, { ReactNode } from 'react';

import { useAtom, useSetAtom } from 'jotai';

import MoreIcon from '@assets/MoreIcon';
import ShareIcon from '@assets/ShareIcon';
import VerticalBar from '@assets/VerticalBar';
import FilterChip from '@components/common/FilterChip';
import ImageBox from '@components/common/ImageBox';
import InitGroupInviteModal from '@components/GroupDetail/InitGroupInviteModal.tsx';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useMainFlow } from '@stacks/StackFlow';
import { openBottomSheet } from '@store/bottomSheetAtom';
import { drinkCategoryState, foodCategoryState } from '@store/filterAtom';
import { BackBox } from '@styles/global';
import {
  ColorBox,
  FilterArea,
  Gradation,
  GrayBar,
  Introduction,
  Main400,
  MainContainer,
  Numbers,
  Title,
  TitleSBold,
  BottomBox,
} from '@styles/pages/GroupDetail';

import { postJoinGroup } from '../apis/Group/GroupServices';
import useGetGroup from '../apis/Group/useGetGroup';
import BackIcon from '../assets/BackIcon';
import PostedPlace from '../layouts/GroupDetail/PostedPlace';

const GroupDetail = (): ReactNode => {
  const { pop, push } = useMainFlow();

  const [foodState] = useAtom(foodCategoryState);
  const [drinkState] = useAtom(drinkCategoryState);
  //const [sortState] = useAtom(sortByState);
  const handleOpenBottomSheet = useSetAtom(openBottomSheet);

  const path = window.location.pathname;
  const split = path.split('/');
  const value = split[2];
  const groupId = Number(value);

  const { Group, isError } = useGetGroup(groupId);

  const localList = localStorage.getItem('group-list');
  const groupIdArray = JSON.parse(localList!);

  const useJoinbtn = async () => {
    try {
      const res = await postJoinGroup(groupId);
      console.info(res.data.message);

      groupIdArray.push(groupId);
      const json = JSON.stringify(groupIdArray);
      localStorage.setItem('group-list', json);
    } catch (error) {
      console.info('error', error);
    }
  };

  if (isError) {
    return <>에러가 났어요</>;
  } else {
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
          renderRight: () => (
            <div onClick={() => push('GroupSetting', { groupId: Group?.groupId })}>
              <MoreIcon />
            </div>
          ),
        }}
      >
        <ColorBox>
          <Main400 src={Group?.groupBackgroundImageUrl} /> <Gradation />
        </ColorBox>
        <MainContainer>
          <ImageBox width={'80px'} height={'80px'} radius_px={16} imageUrl={Group?.groupProfileImageUrl} />
          <Title>
            <div>{Group?.groupName}</div>
            <div onClick={() => push('GroupShare', { groupId: Group?.groupId })}>
              <ShareIcon />
            </div>
          </Title>
          <Numbers>
            멤버 {Group?.memberCnt}
            <VerticalBar /> 맛집 {Group?.restaurantCnt}
          </Numbers>
          <Introduction>{Group?.groupIntroduce}</Introduction>
          <GrayBar />
          <TitleSBold>최근 등록된 맛집</TitleSBold>
          <FilterArea>
            {/* <Chip onClick={() => handleOpenBottomSheet('SORT_BY')}>
              {SortKey[sortState]}
              <DownArrow />
            </Chip>
            <Divider /> */}
            <FilterChip active={foodState !== ''} onClick={() => handleOpenBottomSheet('FOOD_CATEGORY')}>
              종류
            </FilterChip>
            <FilterChip active={drinkState !== ''} onClick={() => handleOpenBottomSheet('DRINK_CATEGORY')}>
              주류 여부
            </FilterChip>
          </FilterArea>
          <PostedPlace groupId={groupId} />
        </MainContainer>
        {groupIdArray.includes(groupId) ? (
          <></>
        ) : (
          //이 그룹에 참가하지 않았을 때만 참여하기 버튼 나타냄
          <BottomBox>
            <button onClick={useJoinbtn}>그룹 참여하기</button>
          </BottomBox>
        )}

        <InitGroupInviteModal />
      </AppScreen>
    );
  }
};

export default GroupDetail;

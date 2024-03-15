import { ReactNode, useEffect, useState } from 'react';

import BackIcon from '@assets/BackIcon';
import VerticalBar from '@assets/VerticalBar';
import ImageBox from '@components/common/ImageBox';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useMainFlow } from '@stacks/StackFlow';
import { BackBox } from '@styles/global';
import { Title, MyGroup, TextBox, MyGroupWrapper } from '@styles/pages/GroupList';

import { useGetMyGroups } from '../apis/Group/queries/useGetMyGroups.ts';

const GroupList = (): ReactNode => {
  const { pop, push } = useMainFlow();
  const { myGroupsData } = useGetMyGroups();
  const [groupList, setGroupList] = useState<number[]>([]);

  useEffect(() => {
    const localList = localStorage.getItem('group-list');
    if (localList === 'undefined' || localList === null) {
      // 처음 접속하여 정보가 없을 경우 id 순서대로 정렬된 group id 배열을 local에 저장
      const groupIdArray = myGroupsData?.map((group) => group.groupId);
      setGroupList(groupIdArray!);
      const json = JSON.stringify(groupIdArray);
      localStorage.setItem('group-list', json);
    } else if (localList === '[]') {
      console.log('포함된 그룹이 없어요');
    } else {
      //로컬 순서가 설정된 것이 있는 경우
      setGroupList(JSON.parse(localList));
    }
  }, [myGroupsData]);

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
        //backgroundColor: '#00ff0000',
        height: '48px',
      }}
    >
      <Title>나의 맛집 그룹</Title>
      {groupList ? (
        <MyGroupWrapper>
          {groupList.map((groupId) => {
            const group = myGroupsData?.find((group) => group.groupId === groupId);
            if (!group) {
              return null;
            }
            const { groupName, groupProfileImageUrl, memberCnt, restaurantCnt, groupIntroduce } = group;
            return (
              <MyGroup key={groupId} onClick={() => push('GroupDetail', { groupId: groupId })}>
                <ImageBox width="80px" height="80px" radius_px={12} imageUrl={groupProfileImageUrl} />
                <TextBox>
                  <div className="place-name">{groupName}</div>
                  <div className="numbers">
                    멤버 {memberCnt} <VerticalBar /> 맛집 {restaurantCnt}
                  </div>
                  <div className="intro">{groupIntroduce}</div>
                </TextBox>
              </MyGroup>
            );
          })}
        </MyGroupWrapper>
      ) : (
        <></>
      )}
    </AppScreen>
  );
};

export default GroupList;

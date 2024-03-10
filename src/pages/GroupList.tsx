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
    if (localList !== null) {
      //로컬 순서가 설정된 것이 있는 경우
      //setGroupList(JSON.parse(localList));
      const groupIdArray = myGroupsData?.map((group) => group.groupId);
      const json = JSON.stringify(groupIdArray);
      localStorage.setItem('group-list', json);
      setGroupList(groupIdArray!);
    } else {
      const groupIdArray = myGroupsData?.map((group) => group.groupId);
      const json = JSON.stringify(groupIdArray);
      localStorage.setItem('group-list', json);
      setGroupList(groupIdArray!);
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

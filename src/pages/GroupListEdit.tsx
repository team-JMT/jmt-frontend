import { ReactNode, useEffect, useState } from 'react';

import { Reorder } from 'framer-motion';

import BackIcon from '@assets/BackIcon';
import { styled } from '@linaria/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useMainFlow } from '@stacks/StackFlow';
import { BackBox } from '@styles/global';
import { colors } from '@styles/theme/color';
import { textStyles } from '@styles/theme/typographies';

import { useGetMyGroups } from '../apis/Group/queries/useGetMyGroups';
import { Item } from '../layouts/GroupList/Item';
import { Group } from '../models/Group';

const Title = styled.div`
  ${textStyles.title_S_Bold}
  color:${colors.gray800};
  margin: 16px 0 16px 20px;
`;
const BottomBox = styled.div`
  width: 100%;
  position: sticky;
  bottom: 0;
  height: 80px;
  background-color: #fff;
  padding-top: 10px;
  button {
    border-radius: 8px;
    border: none;
    width: 90%;
    margin: 0 20px;
    color: #fff;
    background-color: ${colors.main500};
    ${textStyles.text_L_Bold}
    padding: 16px 10px;
  }
`;

const DragGroup = styled(Reorder.Group)`
  display: flex;
  flex-direction: column;
  margin: 0 4px;
  padding: 0;
`;
const GroupListEdit = (): ReactNode => {
  const { pop } = useMainFlow();

  const { myGroupsData } = useGetMyGroups();

  const localList = localStorage.getItem('group-list');
  const [groupOrder, setGroupOrder] = useState<number[]>(JSON.parse(localList!));

  const handleChange = () => {
    console.log(groupOrder);
    const json = JSON.stringify(groupOrder);
    localStorage.setItem('group-list', json);
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
        height: '48px',
      }}
    >
      <Title>그룹의 순서를 변경하세요</Title>
      <DragGroup axis="y" values={groupOrder} onReorder={setGroupOrder}>
        {groupOrder.map((groupId) => {
          const group = myGroupsData?.find((group: Group) => group.groupId === groupId);
          return <Item key={groupId} groupId={groupId} group={group!} />;
        })}
      </DragGroup>
      <BottomBox>
        <button onClick={() => handleChange()}>변경하기</button>
      </BottomBox>
    </AppScreen>
  );
};

export default GroupListEdit;

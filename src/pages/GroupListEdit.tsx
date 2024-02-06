import { ReactNode, useState } from 'react';

import { Reorder } from 'framer-motion';

import BackIcon from '@assets/BackIcon';
import { styled } from '@linaria/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useMainFlow } from '@stacks/StackFlow';
import { BackBox } from '@styles/global';
import { colors } from '@styles/theme/color';
import { textStyles } from '@styles/theme/typographies';

import { Item } from '../layouts/GroupList/Item';

const Title = styled.div`
  ${textStyles.title_S_Bold}
  color:${colors.gray800};
  margin: 16px 0 16px 20px;
`;
const Main500Btn = styled.button`
  position: absolute;
  bottom: 39px;
  border-radius: 8px;
  border: none;
  width: 90%;
  margin: 0 20px;
  color: #fff;
  background-color: ${colors.main500};
  ${textStyles.text_L_Bold}
  padding: 16px 10px;
`;
const DragGroup = styled(Reorder.Group)`
  display: flex;
  flex-direction: column;
  margin: 0 4px;
  padding: 0;
`;
const GroupListEdit = (): ReactNode => {
  const { pop } = useMainFlow();

  const [items, setItems] = useState(['가', '나', '다', '라']);
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
      <DragGroup axis="y" values={items} onReorder={setItems}>
        {items.map((item) => (
          <Item key={item} item={item} />
        ))}
      </DragGroup>
      <Main500Btn>변경하기</Main500Btn>
    </AppScreen>
  );
};

export default GroupListEdit;

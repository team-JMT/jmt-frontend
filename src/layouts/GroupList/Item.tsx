import * as React from 'react';

import { useMotionValue, Reorder, useDragControls } from 'framer-motion';

import ListIcon from '@assets/ListIcon';
import VerticalBar from '@assets/VerticalBar';
import ImageBox from '@components/common/ImageBox';
import { styled } from '@linaria/react';
import { TextBox } from '@styles/pages/GroupList';

import { useRaisedShadow } from './use-raised-shadow';

interface Props {
  item: string;
}
const DragItem = styled(Reorder.Item)`
  display: flex;
  list-style: none;
  align-items: center;
  padding: 16px;
  border-radius: 16px;
  background-color: #fff;
`;

export const Item = ({ item }: Props) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const dragControls = useDragControls();

  return (
    <DragItem value={item} drag="y" style={{ boxShadow, y }}>
      <ImageBox width={'56px'} height={'56px'} radius_px={12} />
      <TextBox>
        <div className="place-name">{item}</div>
        <div className="numbers">
          멤버 111 <VerticalBar /> 맛집 11
        </div>
      </TextBox>
      <ListIcon />
    </DragItem>
  );
};

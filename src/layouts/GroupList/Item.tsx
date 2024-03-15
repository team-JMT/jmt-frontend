import * as React from 'react';

import { useMotionValue, Reorder, useDragControls } from 'framer-motion';

import ListIcon from '@assets/ListIcon';
import VerticalBar from '@assets/VerticalBar';
import ImageBox from '@components/common/ImageBox';
import { styled } from '@linaria/react';
import { TextBox } from '@styles/pages/GroupList';

import { Group } from '../../models/Group';

import { useRaisedShadow } from './use-raised-shadow';

interface Props {
  groupId: number;
  group: Group;
}
const DragItem = styled(Reorder.Item)`
  display: flex;
  list-style: none;
  align-items: center;
  padding: 16px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.9);
`;

export const Item = ({ groupId, group }: Props) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const dragControls = useDragControls();

  return (
    <DragItem value={groupId} drag="y" style={{ boxShadow, y }}>
      <ImageBox width={'56px'} height={'56px'} radius_px={12} imageUrl={group.groupProfileImageUrl} />
      <TextBox>
        <div className="place-name">{group.groupName}</div>
        <div className="numbers">
          멤버 {group.memberCnt} <VerticalBar /> 맛집 {group.restaurantCnt}
        </div>
      </TextBox>
      <ListIcon />
    </DragItem>
  );
};

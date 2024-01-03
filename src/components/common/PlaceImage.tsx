import React from 'react';

import { styled } from '@linaria/react';
import { colors } from '@styles/theme/color';
import { textStyles } from '@styles/theme/typographies';

interface PlaceImageProps {
  category: string;
  canDrinkLiquor?: boolean;
  imageUrl?: string;
}

const Img = styled.div<{ background: string }>`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 200px;
  border-radius: 16px;
  background: ${(props) => props.background};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;
const ImageTag = styled.div`
  ${textStyles.text_S_Medium}
  color:${colors.gray700};
  padding: 1px 8px;
  background-color: ${colors.gray100};
  border-radius: 4px;
  height: 18px;
  margin: 12px 13px 0 0;
`;

/** 오른쪽 위에 태그가 달려있는 맛집 장소 이미지 컴포넌트 */
const PlaceImage = ({ category, canDrinkLiquor, imageUrl }: PlaceImageProps) => {
  const img = imageUrl ? imageUrl : '#d9d9d9';
  return (
    <Img background={img}>
      <ImageTag>{category}</ImageTag>
      {/* <ImageTag>{canDrinkLiquor}</ImageTag> */}
      <ImageTag>주류 가능</ImageTag>
    </Img>
  );
};

export default PlaceImage;

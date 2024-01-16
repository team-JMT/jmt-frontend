import React from 'react';

import { styled } from '@linaria/react';

interface ImageBoxProps {
  width: string;
  height: string;
  radius_px: number;
  imageUrl?: string;
}
const Img = styled.div<{ width: string; heigth: string; borderRadius: number; background: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.heigth};
  border-radius: ${(props) => props.borderRadius}px;
  background: ${(props) => props.background};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

/**
 * width, height, border-radius 의 값은 number로, imageUrl은 string으로
 */
const ImageBox = ({ width, height, radius_px, imageUrl }: ImageBoxProps) => {
  const img = imageUrl ? imageUrl : '#d9d9d9';
  return <Img width={width} heigth={height} borderRadius={radius_px} background={img} />;
};

export default ImageBox;

import React from 'react';

import { styled } from '@linaria/react';

interface ImageBoxProps {
  width_px: number;
  height_px: number;
  radius_px: number;
  imageUrl?: string;
}
const Img = styled.div<{ width: number; heigth: number; borderRadius: number; background: string }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.heigth}px;
  border-radius: ${(props) => props.borderRadius}px;
  background: ${(props) => props.background};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

/**
 * width, height, border-radius 의 값은 number로, imageUrl은 string으로
 */
const ImageBox = ({ width_px, height_px, radius_px, imageUrl }: ImageBoxProps) => {
  const img = imageUrl ? imageUrl : '#d9d9d9';
  return <Img width={width_px} heigth={height_px} borderRadius={radius_px} background={img} />;
};

export default ImageBox;

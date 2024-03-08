import { ReactNode } from 'react';

import { styled } from '@linaria/react';

interface ImageBoxProps {
  width: string;
  height: string;
  radius_px: number;
  imageUrl?: string;
}

const ImageDiv = styled.div<{ width: string; height: string; borderRadius: number }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius}px;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: inherit;
  height: inherit;
  border-radius: inherit;
  object-fit: cover;
`;

const ImageBox = ({ width, height, radius_px, imageUrl }: ImageBoxProps): ReactNode => {
  return (
    <ImageDiv width={width} height={height} borderRadius={radius_px}>
      {imageUrl ? <Img src={imageUrl} alt="image" /> : <></>}
    </ImageDiv>
  );
};

export default ImageBox;

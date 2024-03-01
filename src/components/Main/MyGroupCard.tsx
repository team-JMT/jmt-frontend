import React, { HTMLAttributes } from 'react';

import { styled } from '@linaria/react';
import { textStyles } from '@styles/theme/typographies.ts';

const Image = styled.img`
  width: 110px;
  height: 110px;
  object-fit: cover;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

interface MyGroupCardProps extends HTMLAttributes<HTMLDivElement> {
  image: string;
  name: string;
}

const MyGroupCard = ({ image, name, ...rest }: MyGroupCardProps) => {
  return (
    <Container {...rest}>
      <Image src={image} />
      <span css={{ ...textStyles.text_M_Medium }}>{name}</span>
    </Container>
  );
};

export default MyGroupCard;

import React from 'react';

import { styled } from '@linaria/react';
import { colors } from '@styles/theme/color.ts';
import { textStyles } from '@styles/theme/typographies.ts';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

interface Text2RowProps {
  title: string;
  text: string;
}
const Text2Row = ({ text, title }: Text2RowProps) => {
  return (
    <Container>
      <span
        style={{
          ...textStyles.text_L_Bold,
          color: colors.gray800,
        }}
      >
        {title}
      </span>
      <span style={{ ...textStyles.text_M_Medium, color: colors.gray700 }}>{text}</span>
    </Container>
  );
};

export default Text2Row;

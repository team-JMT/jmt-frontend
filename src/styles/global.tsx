import { styled } from '@linaria/react';
import { colors } from '@styles/theme/color';
import { textStyles } from '@styles/theme/typographies';

export const BackBox = styled.div`
  display: flex;
  margin: 0 12px;
  align-items: center;
  ${textStyles.text_L_Medium}
  color:${colors.gray800};
`;

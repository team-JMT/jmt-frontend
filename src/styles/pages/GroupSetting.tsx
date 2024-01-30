import { styled } from '@linaria/react';
import { colors } from '@styles/theme/color';
import { textStyles } from '@styles/theme/typographies';

export const Menus = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: ${colors.gray900};
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${textStyles.text_L_Medium};
  }
`;
export const Red = styled.div`
  color: #ff2459;
`;

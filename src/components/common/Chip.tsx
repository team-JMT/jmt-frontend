import { HTMLAttributes, ReactNode } from 'react';

import { styled } from '@linaria/react';
import { colors } from '@styles/theme/color';
import { textStyles } from '@styles/theme/typographies';

export const StyledChip = styled.div`
  ${textStyles.text_S_Medium}
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 1rem 0.4rem 1.2rem;
  white-space: nowrap;
  gap: 0.4rem;
  width: fit-content;
  border: 1px solid ${colors.gray200};
  border-radius: 50px;
`;

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
const Chip = ({ children, ...rest }: ChipProps): ReactNode => {
  return <StyledChip {...rest}>{children}</StyledChip>;
};

export default Chip;

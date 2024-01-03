import React, { HTMLAttributes, ReactNode } from 'react';

import DownArrow from '@assets/DownArrow';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { colors } from '@styles/theme/color';
import { textStyles } from '@styles/theme/typographies';

export interface FilterChipOptionProps {
  active?: boolean;
}

export interface FilterChipProps extends HTMLAttributes<HTMLDivElement>, FilterChipOptionProps {
  children: ReactNode;
}

export const StyledFilterChip = styled.div<FilterChipOptionProps>`
  ${textStyles.text_S_Medium}
  color: ${colors.gray900};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 1.2rem 0.4rem 1rem;
  white-space: nowrap;
  gap: 0.4rem;
  width: fit-content;
  border: 0 solid;
  background: ${colors.gray100};
  border-radius: 5rem;
`;
/* ${(props) =>
  props.active &&
  css`
    background: ${colors.white};
    border: 1px solid ${colors.gray200};
  `}; */

const FilterChip = ({ children, active, ...rest }: FilterChipProps) => {
  return (
    <StyledFilterChip active={active} {...rest}>
      {children}
      <DownArrow active={active} />
    </StyledFilterChip>
  );
};

export default FilterChip;

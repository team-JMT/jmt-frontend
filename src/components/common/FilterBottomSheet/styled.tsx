//import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { colors } from '@styles/theme/color';
import { textStyles } from '@styles/theme/typographies';

export const FilterTitle = styled.div`
  display: flex;
  margin-left: 20px;
  gap: 28px;
  div {
    ${textStyles.text_L_Bold}
    color: ${colors.gray400};
  }
  .active {
    color: #000;
  }
`;
export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  //max-height: 270px;
  max-height: 100%;
  overflow: scroll;
`;
export const FilterBox = styled.div<{ active: boolean }>`
  ${textStyles.title_S_Medium}
  display: flex;
  align-items: center;
  width: auto;
  min-height: 66px;
  padding-left: 20px;
  gap: 12px;
  border-radius: 8px;
  border: 2px solid ${(props) => (props.active ? colors.main500 : colors.gray100)};
  background-color: ${colors.white};
`;

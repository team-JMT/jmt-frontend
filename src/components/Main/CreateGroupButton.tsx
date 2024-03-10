import React from 'react';

import { styled } from '@linaria/react';
import { colors } from '@styles/theme/color.ts';
import { textStyles } from '@styles/theme/typographies.ts';

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  padding: 6px 8px;
  border: none;
  border-radius: 6px;
  color: ${colors.main500};
  background: ${colors.main200};
  ${textStyles.text_S_Bold}
`;
interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

const CreateGroupButton = ({ ...rest }: Props) => {
  return (
    <StyledButton {...rest}>
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M6.58065 5.41935V0.580645C6.58065 0.426648 6.51947 0.278959 6.41058 0.170067C6.30169 0.0611749 6.154 0 6 0C5.846 0 5.69831 0.0611749 5.58942 0.170067C5.48053 0.278959 5.41935 0.426648 5.41935 0.580645V5.41935H0.580645C0.426648 5.41935 0.278959 5.48053 0.170067 5.58942C0.0611749 5.69831 0 5.846 0 6C0 6.154 0.0611749 6.30169 0.170067 6.41058C0.278959 6.51947 0.426648 6.58065 0.580645 6.58065H5.41935V11.4194C5.42136 11.5727 5.48318 11.7193 5.59164 11.8277C5.7001 11.9362 5.84663 11.998 6 12C6.154 12 6.30169 11.9388 6.41058 11.8299C6.51947 11.721 6.58065 11.5734 6.58065 11.4194V6.58065H11.4194C11.5734 6.58065 11.721 6.51947 11.8299 6.41058C11.9388 6.30169 12 6.154 12 6C11.998 5.84663 11.9362 5.7001 11.8277 5.59164C11.7193 5.48318 11.5727 5.42136 11.4194 5.41935H6.58065Z"
          fill="#FF531A"
        />
      </svg>
      그룹 만들기
    </StyledButton>
  );
};

export default CreateGroupButton;

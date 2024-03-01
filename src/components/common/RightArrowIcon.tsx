import React from 'react';

import { styled } from '@linaria/react';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  width: 20px;
  height: 20px;
  padding: 0;
`;

interface RightArrowIconProps extends React.HTMLAttributes<HTMLButtonElement> {}

const RightArrowIconButton = ({ ...rest }: RightArrowIconProps) => {
  return (
    <StyledButton {...rest}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.3036 9.44175L8.33591 16.9503C8.02285 17.2876 7.49558 17.3073 7.15822 16.9943C6.82086 16.6812 6.80116 16.1539 7.11422 15.8166L13.0299 9.44175L7.11422 3.06693C6.80116 2.72957 6.82086 2.2023 7.15822 1.88924C7.49558 1.57618 8.02285 1.59588 8.33591 1.93324L15.3036 9.44175Z"
          fill="#4D5C65"
        />
      </svg>
    </StyledButton>
  );
};

export default RightArrowIconButton;

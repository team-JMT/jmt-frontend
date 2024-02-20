import React, { MouseEvent } from 'react';

import { styled } from '@linaria/react';
import { colors } from '@styles/theme/color.ts';

const StyleButton = styled.button<{
  disabled?: boolean;
}>`
  display: flex;
  padding: 16px 10px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  background: ${({ disabled = false }) => (disabled ? colors.main200 : colors.main500)};
  color: ${colors.white};
`;

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button = ({ children, onClick, disabled = false, ...rest }: ButtonProps) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e);
  };
  return (
    <StyleButton disabled={disabled} onClick={handleClick} {...rest}>
      {children}
    </StyleButton>
  );
};

export default Button;

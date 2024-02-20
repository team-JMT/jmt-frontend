import React, { HTMLAttributes } from 'react';

import { styled } from '@linaria/react';
import { colors } from '@styles/theme/color.ts';

const StyledFooter = styled.footer`
  position: sticky;
  bottom: 0;
  display: flex;
  padding: 15px 20px 39px 20px;
  border-top: 1px solid ${colors.gray100};
  background: ${colors.white};
`;

interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Footer = ({ children, ...rest }: FooterProps) => {
  return <StyledFooter {...rest}>{children}</StyledFooter>;
};

export default Footer;

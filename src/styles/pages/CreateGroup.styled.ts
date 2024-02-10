import { styled } from '@linaria/react';
import { colors } from '@styles/theme/color.ts';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  height: 100%;
  gap: 24px;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
  letter-spacing: -0.4px;
`;
export const Input = styled.input`
  display: flex;
  padding: 15px 12px;
  align-items: center;
  border: none;
  background: ${colors.gray100};
  color: ${colors.gray900};
  border-radius: 8px;
  &::placeholder {
    color: ${colors.gray300};
  }
`;

export const TextArea = styled.textarea`
  display: flex;
  padding: 15px 12px;
  align-items: center;
  border: none;
  background: ${colors.gray100};
  color: ${colors.gray900};
  border-radius: 8px;
  height: 146px;
  min-height: 146px;
  &::placeholder {
    color: ${colors.gray300};
  }
`;

export const Footer = styled.footer`
  position: sticky;
  bottom: 0;
  display: flex;
  padding: 15px 20px 39px 20px;
  border-top: 1px solid ${colors.gray100};
  background: ${colors.white};
`;

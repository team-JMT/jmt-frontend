import { styled } from '@linaria/react';
import { colors } from '@styles/theme/color';
import { textStyles } from '@styles/theme/typographies';

export const MainText = styled.div`
  margin: 16px 0 48px 20px;
  ${textStyles.title_M_Bold}
  color: ${colors.gray900};
`;
export const ButtonBox = styled.div`
  padding: 0px 20px;
  position: absolute;
  bottom: 40px;
  width: calc(100vw - 40px);
  button {
    width: 100%;
    padding: 16px 10px;
    ${textStyles.text_L_Bold}
    border-radius: 8px;
    border: none;
  }
`;
export const KakaoBtn = styled.button`
  background: #fee500;
  color: #000;
  margin-bottom: 16px;
`;
export const Main500Btn = styled.button`
  background: ${colors.main500};
  color: #fff;
`;

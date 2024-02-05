import { styled } from '@linaria/react';
import { colors } from '@styles/theme/color';
import { textStyles } from '@styles/theme/typographies';

export const ColorBox = styled.div`
  position: relative;
  bottom: 48px;
`;

export const Main400 = styled.div`
  background-color: ${colors.main400};
  width: 100%;
  height: 196px;
`;
export const Gradation = styled.div`
  position: absolute;
  top: 0px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 82.39%);
  height: 142px;
  width: 100%;
`;
export const MainContainer = styled.div`
  margin: 0 20px;
  position: relative;
  bottom: 108px;
`;
export const Numbers = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  gap: 16px;
  ${textStyles.text_L_Medium}
  color: ${colors.gray700};
`;
export const Introduction = styled.div`
  margin-top: 16px;
  ${textStyles.text_M_Medium}
  color:${colors.gray600};
`;
export const GrayBar = styled.div`
  width: calc(100% + 40px);
  height: 4px;
  position: relative;
  right: 20px;
  margin: 24px 0;
  background-color: ${colors.gray100};
`;
export const TitleSBold = styled.div`
  ${textStyles.title_S_Bold}
  margin-bottom: 16px;
`;
export const Divider = styled.div`
  margin: 0 4px;
  height: 14px;
  width: 1px;
  background: ${colors.gray200};
`;
export const FilterArea = styled.aside`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
`;
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  div {
    ${textStyles.title_M_Bold}
  }
`;

import { styled } from '@linaria/react';
import { colors } from '@styles/theme/color';
import { textStyles } from '@styles/theme/typographies';

export const ColorBox = styled.div`
  position: relative;
  bottom: 48px;
`;

export const Main400 = styled.img<{ background?: string | null }>`
  background-color: ${(props) => (props.background ? `url(${props.background})` : colors.main400)};
  width: 100%;
  height: 196px;
  background-size: cover;
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
  height: calc(100vh - 90px);
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
export const BottomBox = styled.div`
  width: 100%;
  position: sticky;
  bottom: 0;
  height: 80px;
  background-color: #fff;
  padding-top: 10px;
  button {
    border-radius: 8px;
    border: none;
    width: calc(100vw - 40px);
    margin: 0 20px;
    color: #fff;
    background-color: ${colors.main500};
    ${textStyles.text_L_Bold}
    padding: 16px 10px;
  }
`;

export const BlankBox = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    ${textStyles.text_L_Medium}
  }
  button {
    width: 140px;
    height: 48px;
    margin-top: 16px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: ${colors.main500};
    border: none;
    ${textStyles.text_M_Bold};
    color: #fff;
  }
`;

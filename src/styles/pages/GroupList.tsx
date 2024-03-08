import { styled } from '@linaria/react';
import { colors } from '@styles/theme/color';
import { textStyles } from '@styles/theme/typographies';

export const Title = styled.div`
  ${textStyles.title_S_Bold}
  color:${colors.gray800};
  margin: 16px 0 16px 20px;
`;
export const MyGroupWrapper = styled.div`
  margin: 4px 20px;
  display: flex;
  gap: 32px;
  flex-direction: column;
`;
export const MyGroup = styled.div`
  display: flex;
  align-items: center;
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  width: calc(100% - 92px);
  .place-name {
    ${textStyles.title_S_Bold}
    color:${colors.gray800};
    margin-bottom: 2px;
  }
  .numbers {
    ${textStyles.text_M_Medium}
    color:${colors.gray800};
    svg {
      margin: 0 8px;
    }
  }
  .intro {
    ${textStyles.text_M_Medium}
    color:${colors.gray500};
    white-space: nowrap;
    overflow: hidden;
    margin-top: 4px;
  }
`;

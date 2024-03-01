import { motion } from 'framer-motion';

import { styled } from '@linaria/react';
import { colors } from '@styles/theme/color';
import { textStyles } from '@styles/theme/typographies';

export const LayerWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(22, 26, 29, 0.3);
  opacity: 1;
  content: '';
  z-index: 100;
`;

export const CenterInner = styled(motion.div)`
  margin: auto;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px;
  height: 200px;
  width: calc(100vw - 40px);
  position: relative;
  top: calc(50vh - 100px);
  z-index: 130;
`;

export const Title = styled.div`
  ${textStyles.title_S_Bold}
  color: ${colors.gray900};
`;
export const Explain = styled.div`
  margin: 12px 0;
  div {
    color: ${colors.gray600};
    ${textStyles.text_M_Medium}
    text-align: center;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;
export const ModalButton = styled.button`
  ${textStyles.text_L_Bold}
  width: 140px;
  height: 48px;
  padding: 0px;
  border: 1px solid ${colors.main600};
  border-radius: 8px;
  background: ${colors.white};
  color: ${colors.main600};
  & + & {
    background: ${colors.main500};
    color: ${colors.white};
  }
`;

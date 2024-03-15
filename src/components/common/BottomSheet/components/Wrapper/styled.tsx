import { motion } from 'framer-motion';

import { styled } from '@linaria/react';

export const LayerWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(22, 26, 29, 0.3);
  z-index: 100;
`;

export const Inner = styled(motion.div)`
  overflow: hidden;
  position: fixed;
  max-height: calc(100vh - env(safe-area-inset-top) - 5px);
  min-height: 100px;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  -webkit-box-sizing: border-box;
  padding: 32px 20px env(safe-area-inset-bottom) 20px;
  box-sizing: border-box;
  z-index: 101;
  background-color: white;
`;

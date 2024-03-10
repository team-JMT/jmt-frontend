import React, { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import Button from '@components/common/Button.tsx';
import Footer from '@components/Footer.tsx';
import { styled } from '@linaria/react';
import { colors } from '@styles/theme/color.ts';
import { textStyles } from '@styles/theme/typographies.ts';

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px 20px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: ${colors.white};
`;
const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Backdrop = styled(motion.div)`
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
`;

const InitGroupInviteModal = () => {
  const sessionInit = sessionStorage.getItem('group-init');
  const [init, setInit] = useState(sessionInit === 'true');

  const handleCloseInit = () => {
    sessionStorage.setItem('group-init', 'false');
    setInit(false);
  };
  const copyToClipboard = (text: string) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  const linkShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '타이틀',
        text: 'Hello World',
        url: 'https://github.com/team-JMT/jmt-frontend',
      });
    } else {
      //alert('공유하기가 지원되지 않는 환경 입니다.');
      copyToClipboard('https://github.com/team-JMT/jmt-frontend');
    }
  };

  return (
    <AnimatePresence>
      {init && (
        <Backdrop
          onClick={handleCloseInit}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <Container
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <TextSection>
              <span style={textStyles.title_S_Bold}>
                새로운 그룹이 만들어졌어요!
                <br />
                그룹으로 친구를 초대하세요
              </span>
              <span style={{ ...textStyles.text_L_Medium, color: colors.gray600 }}>
                서브 내용 어쩌구서브 내용 어쩌구서브 내용 어쩌구서브 내용 어쩌구서브 내용 어쩌구
              </span>
            </TextSection>
          </Container>
          <Footer>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                linkShare();
                handleCloseInit();
              }}
            >
              <span style={textStyles.text_L_Bold}>친구 초대하기</span>
            </Button>
          </Footer>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export default InitGroupInviteModal;

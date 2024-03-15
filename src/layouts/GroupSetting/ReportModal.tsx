import { ReactNode } from 'react';

import { useSetAtom } from 'jotai';

import ModalComponent from '@components/common/Modal';
import { Title, Explain, ButtonWrapper, ModalButton } from '@components/common/Modal/styled';
import { useMainFlow } from '@stacks/StackFlow';
import { MODAL_KEY, closeModal } from '@store/modalAtom';

// interface Props {
//   restaurantId: number;
//   reportReason: string;
// }

const ReportModal = (): ReactNode => {
  const useCloseModal = useSetAtom(closeModal);
  const { pop } = useMainFlow();

  return (
    <ModalComponent
      type={'REPORT_CHECK'}
      content={
        <>
          <Title>신고를 제출할까요?</Title>
          <Explain>
            <div>신고는 익명으로 처리되며</div>
            <div>해당 사용자의 활동이 제한될 수 있어요.</div>
          </Explain>
          <ButtonWrapper>
            <ModalButton
              onClick={() => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                useCloseModal(MODAL_KEY.REPORT_CHECK);
              }}
            >
              취소하기
            </ModalButton>
            <ModalButton
              onClick={() => {
                pop();
                pop();
                // eslint-disable-next-line react-hooks/rules-of-hooks
                useCloseModal(MODAL_KEY.REPORT_CHECK);
              }}
            >
              제출하기
            </ModalButton>
          </ButtonWrapper>
        </>
      }
    />
  );
};

export default ReportModal;

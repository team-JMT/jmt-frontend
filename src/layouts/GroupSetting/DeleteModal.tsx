import { ReactNode } from 'react';

import { useSetAtom } from 'jotai';

import ModalComponent from '@components/common/Modal';
import { Title, Explain, ButtonWrapper, ModalButton } from '@components/common/Modal/styled';
import { useMainFlow } from '@stacks/StackFlow';
import { MODAL_KEY, closeModal } from '@store/modalAtom';

const DeleteModal = (): ReactNode => {
  const useCloseModal = useSetAtom(closeModal);
  const { pop } = useMainFlow();

  return (
    <ModalComponent
      type={'DELETE_CHECK'}
      content={
        <>
          <Title>그룹을 삭제하시겠어요?</Title>
          <Explain>
            <div>그룹을 없애면 그룹에 관련된 모든 정보가 사라지며</div>
            <div>복구할 수 없어요.</div>
          </Explain>
          <ButtonWrapper>
            <ModalButton
              onClick={() => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                useCloseModal(MODAL_KEY.DELETE_CHECK);
              }}
            >
              취소
            </ModalButton>
            <ModalButton
              onClick={() => {
                pop();
                // eslint-disable-next-line react-hooks/rules-of-hooks
                useCloseModal(MODAL_KEY.DELETE_CHECK);
              }}
            >
              삭제하기
            </ModalButton>
          </ButtonWrapper>
        </>
      }
    />
  );
};

export default DeleteModal;

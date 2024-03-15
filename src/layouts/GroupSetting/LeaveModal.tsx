import { ReactNode } from 'react';

import { useSetAtom } from 'jotai';

import ModalComponent from '@components/common/Modal';
import { Title, Explain, ButtonWrapper, ModalButton } from '@components/common/Modal/styled';
import { useMainFlow } from '@stacks/StackFlow';
import { MODAL_KEY, closeModal } from '@store/modalAtom';

import { deleteGroup } from '../../apis/Group/GroupServices';

const LeaveModal = (): ReactNode => {
  const useCloseModal = useSetAtom(closeModal);
  const { pop } = useMainFlow();

  const path = window.location.pathname;
  const value = path.split('/')[2];
  const groupId = Number(value);

  return (
    <ModalComponent
      type={'LEAVE_CHECK'}
      content={
        <>
          <Title>그룹을 나가시겠어요?</Title>
          <Explain>
            <div>그룹을 나가면 등록한 맛집과 저장한 맛집 등,</div>
            <div>그룹에 관련된 정보가 모두 사라져요</div>
          </Explain>
          <ButtonWrapper>
            <ModalButton
              onClick={() => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                useCloseModal(MODAL_KEY.LEAVE_CHECK);
              }}
            >
              취소
            </ModalButton>
            <ModalButton
              onClick={() => {
                const res = deleteGroup(groupId);
                console.info(res);

                const localList = localStorage.getItem('group-list');
                const groupIdArray = JSON.parse(localList!);
                const filteredArray = groupIdArray.filter((number: number) => number !== groupId);
                const json = JSON.stringify(filteredArray);
                localStorage.setItem('group-list', json);
                pop();
                // eslint-disable-next-line react-hooks/rules-of-hooks
                useCloseModal(MODAL_KEY.LEAVE_CHECK);
              }}
            >
              나가기
            </ModalButton>
          </ButtonWrapper>
        </>
      }
    />
  );
};

export default LeaveModal;

import { ReactNode } from 'react';

import { useSetAtom } from 'jotai';

import BackIcon from '@assets/BackIcon';
import RightIcon from '@assets/RightIcon';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useMainFlow } from '@stacks/StackFlow';
import { MODAL_KEY, toggleModal } from '@store/modalAtom';
import { BackBox } from '@styles/global';
import { Menus, Red } from '@styles/pages/GroupSetting';

import DeleteModal from '../layouts/GroupSetting/DeleteModal';
import LeaveModal from '../layouts/GroupSetting/LeaveModal';
import ReportModal from '../layouts/GroupSetting/ReportModal';

const GroupSetting = (): ReactNode => {
  const { pop } = useMainFlow();
  const useToggleModal = useSetAtom(toggleModal);

  return (
    <>
      <AppScreen
        appBar={{
          backButton: {
            render: () => (
              <BackBox onClick={pop}>
                <BackIcon />
              </BackBox>
            ),
          },
          borderColor: '#00ff0000',
          backgroundColor: '#00ff0000',
          //https://github.com/daangn/stackflow/blob/main/demo/src/activities/Main.tsx
          height: '48px',
        }}
      >
        <Menus>
          <div
            onClick={() => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              useToggleModal(MODAL_KEY.LEAVE_CHECK);
            }}
          >
            이 그룹 나가기 <RightIcon />
          </div>
          <div
            onClick={() => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              useToggleModal(MODAL_KEY.DELETE_CHECK);
            }}
          >
            이 그룹 삭제하기 <RightIcon />
          </div>
          <Red
            onClick={() => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              useToggleModal(MODAL_KEY.REPORT_CHECK);
            }}
          >
            이 그룹 신고하기
            <RightIcon />
          </Red>
        </Menus>
      </AppScreen>
      <LeaveModal />
      <DeleteModal />
      <ReportModal />
    </>
  );
};

export default GroupSetting;
